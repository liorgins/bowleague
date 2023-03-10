import * as e from "express";
import { Subject } from "rxjs";

export class FrameNode {
    value!: Frame;
    next!: FrameNode | null;
    prev!: FrameNode | null;

}

export class Frame {
    number: number;
    roles: number[] = new Array(3).fill(0);
    total: number = 0;
    strike = false;
    spare = false;

    constructor(number: number) {
        this.number = number;
    }
}



export default class Game {
    state: 'started' | '10th' | 'over' = 'started';
    name: string;
    frames!: Frame[];
    currentRole = 0;
    currentFrameIndex = 0;

    private head!: FrameNode;
    private tail!: FrameNode;
    private current!: FrameNode;


    frameSubject$: Subject<number>;
    

    constructor(name: string) {
        this.frameSubject$ = new Subject<number>();
        this.name = name;
        this.initGameFrames();
    }

    initGameFrames() {
        this.frames = Array.from(Array(10).keys()).map(f => new Frame(f + 1));
        this.frames.forEach(frame => {
            const tmp = new FrameNode();
            tmp.value = frame;

            if (!this.head) {
                this.head = tmp;
                this.tail = tmp;
                this.current = tmp;
            } else {
                tmp.next = null;
                tmp.prev = this.tail;
                this.tail.next = tmp;
                this.tail = tmp;
            }
        });
    }

    get total() {
        return this.current.value.total;
    }

    nextFrame() {
        if(this.state === 'over') {
            throw new Error('nextFrame should not be triggerd for finished game')
        }
        if (this.current?.next) {
            this.current = this.current?.next;
            this.currentFrameIndex++;
            this.frameSubject$.next(this.currentFrameIndex);
            this.currentRole = 0;
        } else {           
            if(this.current.value.spare || this.current.value.strike) {
                this.currentRole = 2;
                this.state = '10th'
            } else {
                this.state = 'over';
            }
        }

    }

    setRole(pins: number) {
        if(this.state === 'over') {
            throw new Error('nextFrame should not be triggerd for finished game')
        }
        
        const currentValue = this.current.value;
        currentValue.roles[this.currentRole] = pins;

        currentValue.total += pins;

        if(this.state === '10th') {
            this.state = 'over';
            return;
        }

        const handleStrikeBonus = () => {
            if (!this.current.prev?.value.strike) return;

            const strikeBonus = currentValue.roles[0] + currentValue.roles[1];
            this.current.prev.value.total += strikeBonus;
            currentValue.total += strikeBonus;
        }

        if (this.currentRole === 1) {
            if (currentValue.roles[0] + currentValue.roles[1] === 10) {
                currentValue.spare = true;
            }
            handleStrikeBonus();
            this.nextFrame();
        } else {
            if (this.current.prev) {
                const prev = this.current.prev;
                if (prev.value.spare) {
                    prev.value.total += pins;
                }
                this.current.value.total += prev.value.total;
            }
            if (pins === 10) {
                currentValue.strike = true;

                handleStrikeBonus();
                this.nextFrame();
                return;
            }
            this.currentRole = 1;
        }
    }

    public get availablePins() {
        if(this.state === '10th') {
            return 10;
        }
        return 10 - this.current.value.roles[0] - this.current.value.roles[1];
    }

}