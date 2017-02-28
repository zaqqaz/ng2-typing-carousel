"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//noinspection TypeScriptCheckImport
var core_1 = require('@angular/core');
var TypingCarouselDirective = (function () {
    function TypingCarouselDirective(el) {
        this.element = el;
        this.loopNum = 0;
        this.period = 1000;
        this.isDeleting = false;
        this.typingCarousel = [];
    }
    TypingCarouselDirective.prototype.ngOnInit = function () {
        this.tick('', this.typingCarousel, this.period);
    };
    TypingCarouselDirective.prototype.tick = function (value, toRotate, period) {
        var _this = this;
        var i = this.loopNum % toRotate.length, fullTxt = toRotate[i], delta = 300 - Math.random() * 100;
        value = this.isDeleting ?
            fullTxt.substring(0, value.length - 1) :
            fullTxt.substring(0, value.length + 1);
        if (this.isDeleting) {
            delta /= 2;
        }
        if (!this.isDeleting && value === fullTxt) {
            delta = period;
            this.isDeleting = true;
        }
        else if (this.isDeleting && value === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        this.element.nativeElement.innerHTML = value;
        setTimeout(function () { return _this.tick(value, toRotate, period); }, delta);
    };
    TypingCarouselDirective = __decorate([
        core_1.Directive({
            selector: '[typingCarousel]',
            inputs: ['typingCarousel', 'period']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], TypingCarouselDirective);
    return TypingCarouselDirective;
}());
exports.TypingCarouselDirective = TypingCarouselDirective;
;
