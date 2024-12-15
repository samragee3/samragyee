function navbar() {
  var nav = document.querySelector(".nav-box")
  var icon = document.querySelector("#icon")
  var check = true

  icon.addEventListener("click", function () {
    if (check == true) {
      nav.style.right = "0"
      icon.style.color = "orange"
      check = false
    }
    else {
      nav.style.right = "-300px"
      icon.style.color = "rgba(87, 9, 133, 0.568)"
      check = true
    }

  })
}
navbar()


function toogle() {
  var page = document.querySelector(".page1")
  var button = document.querySelector(".toogle")
  var mode = document.querySelector("#mode")
  var nav = document.querySelector("nav")
  var text = document.querySelector("#cnt-lft")
  var check = true

  button.addEventListener("click", function () {
    if (check == true) {
      page.style.background = "rgba(27, 27, 27, 0.877)"
      text.style.color = "white"
      nav.style.backgroundColor = "rgba(192, 192, 192, 0.692)"
      button.style.backgroundColor = "black"
      mode.style.color = "white"
      check = false
    }
    else {
      page.style.background = "white"
      nav.style.backgroundColor = "white"
      text.style.color = "black"
      button.style.backgroundColor = "rgba(157, 5, 177, 0.096)"
      mode.style.color = "black"
      check = true
    }
  })
}
toogle()


function swiper() {
  const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
}
swiper()


function SendMail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value
  }
  emailjs.send("service_hmke3dm", "template_crl2v9y", params).then(function (res) {
    alert("Your Message Sent Successfully");
  })
}



