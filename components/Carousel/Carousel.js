class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        this.rightButton = document.querySelector('.right-button');
        this.leftButton = document.querySelector('.left-button');
        this.leftButton.style.zIndex='999';
        this.rightButton.style.zIndex='999';
        this.slide = this.carousel.querySelectorAll('img');
        this.index = 0;
        this.prevslide;
        this.currentSlide = this.slide[this.index];
        this.currentSlide.style.display='block';
        this.prevSlide();
        this.nextSlide();
    }
    prevSlide(){
        this.leftButton.addEventListener('click',() =>{ 
        this.prevslide= this.slide[this.index]
        this.prevslide.style.display='none';
        this.index === 0 ? this.index = this.slide.length - 1: this.index = this.index-1;
        this.currentSlide = this.slide[this.index]
       this.currentSlide.style.display ='block'
        TweenMax.from(this.currentSlide, .5, {x: '1184px'})
        

       
    })
    
    }
    nextSlide(){
        this.rightButton.addEventListener('click',() =>{ 
            this.prevslide= this.slide[this.index]
            this.prevslide.style.display = 'none'
            this.index < this.slide.length -1 ? this.index = this.index + 1 : this.index = 0;
            this.currentSlide = this.slide[this.index]
            this.currentSlide.style.display ='block'
            TweenMax.from(this.currentSlide, .5, {x: '-1184px'})
            
            })

    }
}

let carousel = document.querySelector('.carousel');
const Sliding = new Carousel(carousel)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
