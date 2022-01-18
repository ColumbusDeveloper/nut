
let slider1 = new Swiper ('.slider1', {
  loop: true,

  slidesPerView:1,


  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
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


  



 