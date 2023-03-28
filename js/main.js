$(document).ready(function () {
  $('.hero-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots: false,
    nav: true,
    autoplayHoverPause: true,
    items: 1,
    autoplayTimeout: 6000,
    smartSpeed: 800,
    navText: [
      "<i class='fa fa-long-arrow-alt-left'></i>",
      "<i class='fa fa-long-arrow-alt-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $('.we-inspire').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 5,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots: false,
    center: true,
    nav: true,
    items: 1,
    autoplayTimeout: 6000,
    smartSpeed: 800,
    navText: [
      "<i class='fa fa-long-arrow-alt-left'></i>",
      "<i class='fa fa-long-arrow-alt-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      767: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1500: {
        items: 4,
      },
    },
  });
});
$(document).ready(function () {
  window.onload = function () {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close')[0];

    // Get the number of times the modal has been shown
    var numTimesShown = sessionStorage.getItem('numTimesShown');
    if (numTimesShown === null) {
      numTimesShown = 0;
    }
    numTimesShown = parseInt(numTimesShown);

    // If the modal has been shown three times, don't show it again
    if (numTimesShown >= 3) {
      return;
    }

    // When the user clicks on the button, open the modal
    modal.classList.add('show');

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.classList.remove('show');
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.classList.remove('show');
      }
    };

    // Increment the number of times shown and save it to sessionStorage
    numTimesShown++;
    sessionStorage.setItem('numTimesShown', numTimesShown.toString());
  };

  // window.onload = function() {
  //   // Get the modal
  //   var modal = document.getElementById("myModal");

  //   // Get the <span> element that closes the modal
  //   var span = document.getElementsByClassName("close")[0];

  //   // When the user clicks on the button, open the modal
  //   modal.classList.add("show");

  //   // When the user clicks on <span> (x), close the modal
  //   span.onclick = function() {
  //     modal.classList.remove("show");
  //   }

  //   // When the user clicks anywhere outside of the modal, close it
  //   window.onclick = function(event) {
  //     if (event.target == modal) {
  //       modal.classList.remove("show");
  //     }
  //   }

  //   // Close the modal after 5 seconds
  //   // setTimeout(function() {
  //   //   modal.classList.remove("show");
  //   // }, 5000);
  // }

  var togglebtn = document.querySelector('.navbar-toggler');
  var mobileSidebar = document.querySelector('.mobile__sidebar');

  if (togglebtn && mobileSidebar) {
    togglebtn.addEventListener('click', () => {
      mobileSidebar.classList.toggle('open');
    });
  }

  document.addEventListener('click', (e) => {
    const isDropdownButton = e.target.matches('[data-dropdown-btn]');
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null)
      return;

    let currentDropdown;
    if (isDropdownButton) {
      // alert("clickedd")
      currentDropdown = e.target.closest('[data-dropdown]');
      currentDropdown.classList.toggle('show');
      // isDropdownButton.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].show').forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove('show');
    });
  });

  $('.owl-testimonial').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots: false,
    nav: true,
    autoplayHoverPause: false,
    items: 1,
    autoplayTimeout: 6000,
    // smartSpeed: 800,
    navText: [
      "<i class='fa fa-long-arrow-alt-left'></i>",
      "<i class='fa fa-long-arrow-alt-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    //   responsive:{
    //     0:{
    //         items:1,
    //         dots:false,
    //         nav:false,
    //     },
    //     767:{
    //         items:1,
    //         dots:false,
    //         nav:false,
    //     },
    //     992:{
    //         items:1,
    //         nav:false
    //     },
    //     1200:{
    //         items:1,
    //         nav:false
    //     },
    //     1500:{
    //         items:1
    //     }
    // }
  });
});
