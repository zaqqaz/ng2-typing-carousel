# ng2-typing-carousel
Simple typing carousel directive for angular2. 

![directive](https://cloud.githubusercontent.com/assets/2823336/14065104/f7394ed0-f424-11e5-9778-e9f4d019e6b2.gif)

Thanks: http://codepen.io/dissimulate/pen/BvpGr

## Installation

To install this library, run:

```bash
$ npm install ng2-typing-carousel --save
```

## Usage

```JavaScript
import { TypingCarouselDirective } from 'ng2-typing-carousel';

@Component({
    // ***
    directives: [TypingCarouselDirective]
})

class AppComponent {
	constructor() {
		this.carousel = ['full-stack developer.','ui/ux designer.', 'blogger.'];
	}
}
```

```HTML
<span class="text-primary" [typingCarousel]=carousel></span>|
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

## License

MIT © [Denis Artyuhovich](http://denis.by/)
