import { ElementRef } from 'angular2/core';
export declare class TypingCarouselDirective {
    element: ElementRef;
    loopNum: number;
    period: number;
    isDeleting: boolean;
    typingCarousel: Array<string>;
    constructor(el: ElementRef);
    ngOnInit(): void;
    tick(value: string, toRotate: Array<string>, period: number): void;
}
