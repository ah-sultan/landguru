const docBody = document.getElementById('doc-body')



$(window).on('load', function() {
  $('#prloader').delay(1500).fadeOut('slow', function() {
    $(this).remove();
  });
});

// Navbar Section Start
const navOpenBtn = document.getElementById('nav-open-btn')
const navCloseBtn = document.getElementById('nav-close-btn')
const navbarWraper = document.getElementById('navbarSupportedContent')
const dropdownBtn = document.getElementById('dropdown-btn')
const dropdownNav = document.getElementById('dropdown-nav')


navOpenBtn.addEventListener('click', function () {

  // docBody.style.opacity = '0.4'
  navbarWraper.style.visibility = 'visible'
  navbarWraper.style.width = '85%'
  docBody.classList.add('black-mask')
})

navCloseBtn.addEventListener('click', function () {

  navbarWraper.style.visibility = 'hidden'
  navbarWraper.style.width = '0'
  docBody.classList.remove('black-mask')
})

// Sticky Navbar

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 30) {
      $('#navbar').addClass('sticky-nav');
  } else {
      $('#navbar').removeClass('sticky-nav');
  }
});

// Sub Navtoggler

function subNavToggler(id){
  event.preventDefault()
  const navItem = document.getElementById(id)
  navItem.classList.toggle('showSubnav')

}

// Navbar Section End

// Register Form Section

const registerBtn = document.getElementById('register-btn')
const registerCloseBtn = document.getElementById('register-close-btn')
const registerFromContainer = document.getElementById('register-form-container')


registerBtn.addEventListener('click', function () {

  registerFromContainer.style.visibility = 'visible'
  registerFromContainer.style.opacity = '1'
  docBody.classList.add('black-mask')

})

registerCloseBtn.addEventListener('click', function () {
  registerFromContainer.style.visibility = 'hidden'
  registerFromContainer.style.opacity = '0'
  docBody.classList.remove('black-mask')

})


let signInSection = document.getElementById('sign-in-section')
let signUpSection = document.getElementById('sign-up-section')

let signUpHereBtn = document.getElementById('sign-up-here')
let signInHereBtn = document.getElementById('sign-in-here')


signUpHereBtn.addEventListener('click', function () {

  signInSection.style.visibility = 'hidden'
  signInSection.style.height = '0'

  signUpSection.style.visibility = 'visible'
  signUpSection.style.height = '100%'

})

signInHereBtn.addEventListener('click', function () {

  signUpSection.style.visibility = 'hidden'
  signUpSection.style.height = '0'

  signInSection.style.visibility = 'visible'
  signInSection.style.height = '100%'

})

// Service Section

new VenoBox({
  selector: '.service-video',
  maxWidth : '90%',
  spinColor : 'red',
  spinner : 'wave'
});

new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});

// Pricing Section Start
const monthlyPlanCard = document.getElementById('monthly-plan')
const annualPlanCard = document.getElementById('annual-plan')

const monthlyBtn = document.getElementById('monthly-btn')
const annualBtn = document.getElementById('annual-btn')


monthlyBtn.addEventListener('click', function () {

  monthlyBtn.classList.add('active')
  annualBtn.classList.remove('active')

  monthlyPlanCard.classList.add('show-plan-card')
  annualPlanCard.classList.remove('show-plan-card')

})

annualBtn.addEventListener('click', function () {

  annualBtn.classList.add('active')
  monthlyBtn.classList.remove('active')

  monthlyPlanCard.classList.remove('show-plan-card')
  annualPlanCard.classList.add('show-plan-card')
});


// pricing Slider

$('.pricing-slider').slick({

  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,

  responsive: [{
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        centerPadding : '0px'

      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      }
    },

    {
      breakpoint: 575,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    },
  ]


})




// Team Slider Section

$('.team-slider').slick({
  infinite : false,
  accessibility : false,
  slidesToShow : 3,
  arrows : false,
  dots : true,

  responsive: [
    {
      breakpoint: 776,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll : 2,
        dots : true,
      }
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        dots : true,
        slidesToShow: 2
      }
    }
  ]

})


// Testimonial Slider

$('.testimonial-slider').slick({

  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<div class="testimonial-prev-btn"><img src="./img/testimonial/prev.svg" alt="Prev"></div>',
  nextArrow: '<div class="testimonial-next-btn"><img src="./img/testimonial/next.svg" alt="Next"></div>',
  dots: true,

  responsive: [{
    breakpoint: 992,
    settings: {
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,

    }
  },
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
    }
  },

  {
    breakpoint: 575,
    settings: {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
    }
  }
]

});



// Blog Slider 

$('.blog-slider').slick({
  centerPadding: '60px',
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="blog-prev-btn"><img src="./img/blog/preve.svg" alt="prev" class="prev"></div>',
  nextArrow: '<div class="blog-next-btn"><img src="./img/blog/next.svg" alt="Next" class="Next"></div>',
  dots: true,
  centerMode: true,
  centerPadding: '1px',

  responsive: [{
    breakpoint: 992,
    settings: {
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,

    }
  },
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
    }
  }
]
})

$(window).on('scroll', function(){

  if($(window).scrollTop() > 20){
   $('#backTopBtn').css('transform', 'scale(1)')
  }else{
    $('#backTopBtn').css('transform', 'scale(0)')
  }
}
)
$("#backTopBtn").click(function scrollTopAnimated() {
  $("html, body").animate(
      { scrollTop: "0" }, 1000);
})
