 

window.onload = function() {

  let slider1 = new Slider({
    slides: '.mySlides',
    btnPrev: '.prev',
    btnNext: '.next',
    dots: '.dot',
    auto: true,
    rate: 2000,
  });

}
function Slider (obj) {
    
    this.slides = document.querySelectorAll(obj.slides);
    this.dots = document.querySelectorAll(obj.dots);
    this.auto = obj.auto;
    this.btnPrev = obj.btnPrev,
    this.btnNext = obj.btnNext;
    this.rate = obj.rate;
    let self = this;
    let slideIndex = 0;
    let next = document.querySelector(self.btnNext);
    let prev = document.querySelector(self.btnPrev);
            prev.onclick = function(){
              self.showSlides('prev');
            };
            next.onclick = function() {
              self.showSlides('next');
            };

            Array.prototype.forEach.call(this.dots, function(item,index) {
            item.onclick = function () {
              self.showSlides('dots', index)
            }
            });
            
            self.showSlides = function(operator, index) {
                      
              self.slides[slideIndex].classList.remove('visible')
              self.dots[slideIndex].classList.remove('active');
                      switch(operator){
                        case 'prev':
                              if (slideIndex < 1){
                              slideIndex = self.slides.length
                                }
                              slideIndex--;
                              break;
                        case 'next':
                              slideIndex++
                              if (slideIndex >= self.slides.length){
                              slideIndex = 0;
                        }
                              break;
                        case 'dots':
                              slideIndex = index
                              break;
                      }
                      self.slides[slideIndex].classList.add('visible');
                      self.dots[slideIndex].classList.add('active');
          }
          if (self.auto){
            setInterval(next.onclick, self.rate);
        }  
    }     
  


  // function Slider (obj) {
  //   this.prev = document.getElementById('prev');
  //   this.next = document.getElementById('next');
  //   this.img = document.getElementsByClassName("mySlides");
  //   this.dots = document.querySelectorAll('.dot');
  //   this.auto = obj.auto;
  //   this.btnPrev :'.btnPrev',
  //   this.btnNext = obj.btnNext;
  //   this.rate = obj.rate || 1000;

  //   let slideIndex = 0;
  //   let slides = this;
  //   let dots = this;
    
    
  //           this.prev.onclick = () =>{
  //             this.showSlides('prev');
  //           };
  //           this.next.onclick = () => {
  //             this.showSlides('next');
  //           };
  //           //присваем функцию для Dots
  //           dots.forEach((item,index) => {
  //             item.onclick = () =>{
  //               this.showSlides('dots',index);
  //           }
  //           })
  //           this.showSlides = (operator, index=0, auto=false) => {
                      
  //                     slides[slideIndex].classList.remove('visible')
  //                     dots[slideIndex].classList.remove('active');
  //                     switch(operator){
  //                       case 'prev':
  //                             if (slideIndex < 1){
  //                             slideIndex = slides.length
  //                               }
  //                             slideIndex--;
  //                             break;
  //                       case 'next':
  //                             slideIndex++
  //                             if (slideIndex >= slides.length){
  //                             slideIndex = 0;
  //                       }
  //                             break;
  //                       case 'dots':
  //                             slideIndex = index
  //                             break;
  //                     }
  //                     slides[slideIndex].classList.add('visible');
  //                     dots[slideIndex].classList.add('active');
  //                     if (slides.auto)	{
  //                       setInterval(slides.next, slides.rate);
  //                   }
  //         }
  //   }     
    
   
     


// this.next = function (){
            //   //Убираем пред значения кнопки и слайда
            //   this.slides[slideIndex].classList.remove('visible')
            //   this.dots[slideIndex].classList.remove('active');
            //   //добавляем +1 к индексу  
            //   slideIndex++
            //   if (slideIndex >= this.slides.length){
            //   slideIndex = 0;
            //   }
            //   //присваиваем новый индекс кнопке и слайду  
            //   this.slides[slideIndex].classList.add('visible');
            //   this.dots[slideIndex].classList.add('active');
            //   }
            //   document.querySelector(this.btnNext).onclick = this.next;


                    // function Slider(obj) {

                    //   this.images = document.querySelectorAll(obj.images);
                    //   this.auto = obj.auto;
                    //   this.btnPrev = obj.btnPrev;
                    //   this.btnNext = obj.btnNext;
                    //      this.rate = obj.rate || 1000;
                    
                    //   var i = 0;
                    //      var slider = this;
                    
                    //   this.prev = function () {
                    //     slider.images[i].classList.remove('shown');
                    //     i--;
                    
                    //     if (i < 0) {
                    //       i = slider.images.length - 1;
                    //     }
                    
                    //     slider.images[i].classList.add('shown');
                    //   }
                    
                    //   this.next = function () {
                    //     slider.images[i].classList.remove('shown');
                    //     i++;
                    
                    //     if (i >= slider.images.length) {
                    //       i = 0;
                    //     }
                    
                    //     slider.images[i].classList.add('shown');
                    //   }
                    
                    //     document.querySelector(slider.btnPrev).onclick = slider.prev;
                    //     document.querySelector(slider.btnNext).onclick = slider.next;
                    
                    //   if (slider.auto)	{
                    //         setInterval(slider.next, slider.rate);
                    //     }
                    // };



        // function carousel(){
//   slides[slideIndex].classList.remove('visible');
//   dots[slideIndex].classList.remove('active');
//   slideIndex++
//           if (slideIndex >= slides.length){
//           slideIndex = 0;
//           }
//           setTimeout(carousel, 2000);
//   slides[slideIndex].classList.add('visible')
//   dots[slideIndex].classList.add('active')
// }
// carousel();