document.querySelector(".menu-trigger").onclick=function(){s.classList.forEach(function(e){"closeMenu"==e?(s.classList.remove("closeMenu"),s.classList.add("showMenu")):"showMenu"==e&&(s.classList.remove("showMenu"),s.classList.add("closeMenu"))})};var s=document.querySelector(".nav__items");particlesJS.load("particles-js","particles.json",function(){console.log("callback - particles.js config loaded")}),$(".slider").slick({autoplay:!0,autoplaySpeed:2200,dots:!0,arrows:!1,responsive:[{breakpoint:600,settings:{dots:!1}}]}),$(".slider-feedback").slick({autoplay:!0,autoplaySpeed:2200,centerMode:!0,centerPadding:"0",dots:!0,arrows:!1,infinite:!0,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:1e3,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:670,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,centerPadding:"0"}}]});