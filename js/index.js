let slide_data = [
  {
    'src':'https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/17904003_1889734631271419_2712721295824761248_n.jpg?_nc_cat=0&_nc_eui2=AeH-3TEGzf42SKyToz3qQHL5LTvWL8QeomCjukfeEIhBCTt-SFq_IC-ecevGfefF9yenWewmAJ0LEbZXexOtH1yYXMnLD_VvwBzppzv4n6AaTA&oh=adf589b9ac4f66e0313ea2cb07e3d538&oe=5B791064',
    'title':'',
    'copy':'.'
  },
  {
    'src':'https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/26220139_2009917135919834_753673053232029821_n.jpg?_nc_cat=0&_nc_eui2=AeH2z9qxTT9FM8bWZ5YpBYdWgub-BM5i5pTHeAU5r1WM3tyJheE7GyU6nfG12uWDawj88o_vTeImd-P6FHZevARGIc1k4OhkDQON5NoI0OSOnA&oh=3845dce8b064d2c42b7b3d5974e380bb&oe=5B793DDA', 
    'title':'',
    'copy':''
  },
  {
    'src':'https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/30515696_2053683754876505_2651385905704599552_n.jpg?_nc_cat=0&_nc_eui2=AeF-K8cn78Jb2X6C2hryBuQwv58mA6FfX3xLCvYz8aX7sSdMeTEx73b9v4DIDTqWskur_AZRVlo74mxFo6Yi6Wb7Na2PKeY_zMZBepAI4iinTg&oh=8b2f653eadd7bc512fff5cd62287a68d&oe=5BBA5968', 
    'title':'',
    'copy':'.'
  },
  {
    'src':'https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/11139410_1621723074739244_3496433915049894662_n.jpg?_nc_cat=0&_nc_eui2=AeHoF1q8IMBGS7eBskwORaiPrQKZcu5JrSDgerIuhQ7UkTt7WcrhOV21iQbPVL7aEhAHuwb2fTpbfXaLwJqNeXpxJDuyiNIEeM96K3Sja5cXIg&oh=9ddaa759fbea5df64c3457331550bf26&oe=5BBE308B', 
    'title':'',
    'copy':''
  },
  
];
let slides = [],
  captions = [];

let autoplay = setInterval(function(){
  nextSlide();
},5000);
let container = document.getElementById('container');
let leftSlider = document.getElementById('left-col');
// console.log(leftSlider);
let down_button = document.getElementById('down_button');
// let caption = document.getElementById('slider-caption');
// let caption_heading = caption.querySelector('caption-heading');

down_button.addEventListener('click',function(e){
  e.preventDefault();
  clearInterval(autoplay);
  nextSlide();
  autoplay;
});

for (let i = 0; i< slide_data.length; i++){
  let slide = document.createElement('div'),
      caption = document.createElement('div'),
      slide_title = document.createElement('div');
    
  slide.classList.add('slide');
  slide.setAttribute('style','background:url('+slide_data[i].src+')');
  caption.classList.add('caption');
  slide_title.classList.add('caption-heading');
  slide_title.innerHTML = '<h1>'+slide_data[i].title+'</h1>';
  
  switch(i){
    case 0:
        slide.classList.add('current');
        caption.classList.add('current-caption');
        break;
    case 1:
        slide.classList.add('next');
        caption.classList.add('next-caption');
        break;
    case slide_data.length -1:
      slide.classList.add('previous');
      caption.classList.add('previous-caption');
      break;
    default:
       break;       
  }
  caption.appendChild(slide_title);
  caption.insertAdjacentHTML('beforeend','<div class="caption-subhead"><span>INDEPENDENCE | DEMOCRACY | SOCIALISM</span></div>');
  slides.push(slide);
  captions.push(caption);
  leftSlider.appendChild(slide);
  container.appendChild(caption);
}
// console.log(slides);

function nextSlide(){
  // caption.classList.add('offscreen');
  
  slides[0].classList.remove('current');
  slides[0].classList.add('previous','change');
  slides[1].classList.remove('next');
  slides[1].classList.add('current');
  slides[2].classList.add('next');
  let last = slides.length -1;
  slides[last].classList.remove('previous');
  
  captions[0].classList.remove('current-caption');
  captions[0].classList.add('previous-caption','change');
  captions[1].classList.remove('next-caption');
  captions[1].classList.add('current-caption');
  captions[2].classList.add('next-caption');
  let last_caption = captions.length -1;
  
  // console.log(last);
  captions[last].classList.remove('previous-caption');
  
  let placeholder = slides.shift();
  let captions_placeholder = captions.shift();
  slides.push(placeholder); 
  captions.push(captions_placeholder);
}

let heading = document.querySelector('.caption-heading');


// https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
function whichTransitionEvent(){
  var t,
      el = document.createElement("fakeelement");

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

var transitionEvent = whichTransitionEvent()
caption.addEventListener(transitionEvent, customFunction);

function customFunction(event) {
  caption.removeEventListener(transitionEvent, customFunction);
  console.log('animation ended');

  // Do something when the transition ends
}