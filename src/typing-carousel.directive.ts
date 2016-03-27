//noinspection TypeScriptCheckImport
import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
    selector: '[typingCarousel]',
    inputs: ['typingCarousel', 'period']
})
export class TypingCarouselDirective {

    element:ElementRef;
    loopNum:number;
    period:number;
    isDeleting:boolean;
    typingCarousel:Array<string>;

    constructor(el:ElementRef) {
        this.element = el;
        this.loopNum = 0;
        this.period = 1000;
        this.isDeleting = false;
        this.typingCarousel = [];
    }

    ngOnInit() {
        this.tick('', this.typingCarousel, this.period);
    }

    tick(value:string, toRotate:Array<string>, period:number) {
        let i = this.loopNum % toRotate.length,
            fullTxt = toRotate[i],
            delta = 300 - Math.random() * 100;

        value = this.isDeleting ?
            fullTxt.substring(0, value.length - 1) :
            fullTxt.substring(0, value.length + 1);

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && value === fullTxt) {
            delta = period;
            this.isDeleting = true;
        } else if (this.isDeleting && value === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        this.element.nativeElement.innerHTML = value;

        setTimeout(() => this.tick(value, toRotate, period), delta);
    }
};