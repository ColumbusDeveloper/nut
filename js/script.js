
let slider1 = new Swiper ('.slider1', {
  loop: true,

  slidesPerView:1,


  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },

  breakpoints: {
    375:{
      slidesPerView:1,
    },

    576:{
      slidesPerView:1,
    },

    992:{
      slidesPerView:1,
    },

    1200:{
      slidesPerView:1,
    },



  },

  


}) 


let slider2 = new Swiper ('.slider2', {
  loop: true,
  

  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },

  slidesPerView:4,
  
  zoom: {
    maxRatio: 2,
  },

  toggle:true,

  breakpoints: {
    320:{
      slidesPerView:1,
    },

    480:{
      slidesPerView:2,
    },

    992:{
      slidesPerView:3,
    },

    1200:{
      slidesPerView:4,
    },



  },


})

let slider3 = new Swiper ('.slider3', {
  loop: true,
  

  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },

  slidesPerView:4,

  spaceBetween:60,
  
  zoom: {
    maxRatio: 2,
  },

  toggle:true,

  breakpoints: {
    320:{
      slidesPerView:1,
    },

    480:{
      slidesPerView:2,
    },

    576:{
      slidesPerView:3,
    },

    1200:{
      slidesPerView:4,
    },



  },


})

let slider4 = new Swiper ('.slider4', {
  loop: true,
  

  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4',
  },

  slidesPerView:4,

  spaceBetween:60,
  
  zoom: {
    maxRatio: 2,
  },

  toggle:true,

  breakpoints: {
    320:{
      slidesPerView:1,
    },

    480:{
      slidesPerView:2,
    },

    576:{

      slidesPerView:3,
    },

    1200:{
      slidesPerView:4,
    },



  },


})





const iconMenu = document.querySelector(".menu__btn");
const menuBody=document.querySelector(".menu__box");
if (iconMenu) {
  
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  }) 
}



const burgerIcon = document.querySelector(".navbar-toggler1");
const burgerIconCrossItemTop =document.querySelector(".mid-level-cross-top");
const burgerIconCrossItemBottom =document.querySelector(".mid-level-cross-bottom");
const burgerIconOnTop =document.querySelector(".top-level-mobile");
const burgerIconOnBottom =document.querySelector(".mid-level-burger");

if (burgerIcon) {
  
  burgerIcon.addEventListener("click", function(e) {
    burgerIcon.classList.toggle("_none");
    burgerIconCrossItemTop.classList.toggle("_active");
    burgerIconCrossItemBottom.classList.toggle("_active");
    burgerIconOnTop.classList.toggle("_none");
    burgerIconOnBottom.classList.toggle("_none");
  }) 
}


var videoEl = document.getElementsByTagName('video')[0];
    playBtn = document.getElementById('playBtn');
    videoText = document.querySelector(".video-box-text");


    playBtn.addEventListener('click', function () {
      if (videoEl.paused) {
          videoEl.play();
          videoText.classList.toggle("_none");
      } else {
          videoEl.pause();
          videoText.classList.toggle("_none");
      }
  }, false);

  var videoEl1 = document.getElementsByTagName('video')[1];
    playBtn1 = document.getElementById('playBtn1');
    videoText1 = document.querySelector(".video-box-text1");


    playBtn1.addEventListener('click', function () {
      if (videoEl1.paused) {
          videoEl1.play();
          videoText1.classList.toggle("_none1");
      } else {
          videoEl1.pause();
          videoText1.classList.toggle("_none1");
      }
  }, false);

  var videoEl2 = document.getElementsByTagName('video')[2];
    playBtn2 = document.getElementById('playBtn2');
    videoText2 = document.querySelector(".video-box-text2");


    playBtn2.addEventListener('click', function () {
      if (videoEl2.paused) {
          videoEl2.play();
          videoText2.classList.toggle("_none2");
      } else {
          videoEl2.pause();
          videoText2.classList.toggle("_none2");
      }
  }, false);

  var videoEl3 = document.getElementsByTagName('video')[3];
    playBtn3 = document.getElementById('playBtn3');
    videoText3 = document.querySelector(".video-box-text3");


    playBtn3.addEventListener('click', function () {
      if (videoEl3.paused) {
          videoEl3.play();
          videoText3.classList.toggle("_none3");
      } else {
          videoEl3.pause();
          videoText3.classList.toggle("_none3");
      }
  }, false);

  var videoEl4 = document.getElementsByTagName('video')[4];
  var playBtn4 = document.getElementById('playBtn4');
      videoText3 = document.querySelector(".production-imgbox-row1__right-part_video-box-play-icon");
  playBtn4.addEventListener('click', function () {
    if (videoEl4.paused) {
        videoEl4.play();
        videoText3.classList.add("_none3");
    } else {
        videoEl4.pause();
        videoText3.classList.add("_none3");
    }
}, false);

var videoEl5 = document.getElementsByTagName('video')[5];
var playBtn5 = document.getElementById('production-imgbox-row1__right-part_video-box-play-icon2');

playBtn5.addEventListener('click', function () {
  if (videoEl5.paused) {
      videoEl5.play();
    
  } else {
      videoEl5.pause();
    
  }
}, false);

var videoEl6 = document.getElementsByTagName('video')[6];
var playBtn6 = document.getElementById('production-imgbox-row1__right-part_video-box-play-icon3');

playBtn6.addEventListener('click', function () {
  if (videoEl6.paused) {
      videoEl6.play();
  
  } else {
      videoEl6.pause();
    
  }
}, false);

// document.getElementById('playBtn').onclick = function() {
// document.getElementById('video-box-text').classList.toggle("_none");
// }




















// const menuLinks=document.querySelectorAll(".menu__box-link[data-goto]");
// if (menuLinks>0) {
//   menuLinks.forEach(menuLinks => {
//     menuLinks.addEventListener("click", onMenuLinkClick);
//   });

//   function onMenuLinkClick(e){
//     const menuLink=e.target;
    
//     if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
//       const gotoBlock=document.querySelector(menuLink.dataset.goto);
//       const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("heder").offsetWeight;

//       if (iconMenu.classList.contains("_active")) {
//         document.body.classList.remove("_lock");
//         iconMenu.classList.remove("_active");
//         menuBody.classList.remove("_active");
      
//       }


//       window.scrollTo({
//         top: gotoBlockValue,
//         behavior:"smooth"
//       });
//       e.preventDefault();
//     }

//   }
// }

















































// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     // loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

    
  
//     // And if we need scrollbar
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },

//     autoHeight:true,


// });

// const swiper1 = new Swiper('.swiper1', {
//   // Optional parameters
//   // direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination1',
//   },

//   slidesPerView:1,

//   autoplay: {
//     delay: 1000,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next1',
//     prevEl: '.swiper-button-prev1',
//   },

//   // And if we need scrollbar
//   // scrollbar: {
//   //   el: '.swiper-scrollbar1',
//   // },

  

//   autoHeight:true,


// });


  



 