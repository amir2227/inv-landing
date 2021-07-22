
const emailCheck = () => {
  const emailAddress = document.getElementById('email').value;
  const emailInput = document.getElementById('email');
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 
  if (emailAddress.match(mailFormat)) {
    emailInput.classList.remove('landing__text__email--red');
    document.getElementById('emailWarning').classList.add('hidden');
  } else if (!emailAddress.match(mailFormat)) {
    emailInput.classList.add('landing__text__email--red');
    document.getElementById('emailWarning').classList.remove('hidden');
  }
}


// Scroll Animation
const sr = ScrollReveal({
  origin: 'top',
  distance:'85px',
  duration:2000,
  reset: true
})

sr.reveal ('.h3_delay',{delay:600})
sr.reveal ('.h5_delay',{delay:500})
sr.reveal ('.customer__logo',{delay:500})
sr.reveal ('.footer__list li',{})
sr.reveal ('.footer__social li',{})

sr.reveal ('.features__box__image',{})
sr.reveal ('.img_delay',{})
sr.reveal ('.contact__form div',{delay:200})
sr.reveal ('input',{})
sr.reveal ('textarea',{})
sr.reveal ('.inline_text',{})

$(document).ready(function () {
  $("#inv").click(function () {
      $("#abouth1").fadeOut(function () {
          $("#abouth1").text('Investing Skills').fadeIn();
      })
      $("#p1").fadeOut(function () {
        $("#p1").fadeIn(delay=2000);
    })
  })
  $("#adv").click(function () {
    $("#abouth1").fadeOut(function () {
        $("#abouth1").text('Advitex').fadeIn();
    })
    $("#p1").fadeOut(function () {
      $("#p1").fadeIn(delay=2000);
  })
})
$("#bey").click(function () {
  $("#abouth1").fadeOut(function () {
      $("#abouth1").text('Beyond Click').fadeIn();
  })
  $("#p1").fadeOut(function () {
    $("#p1").fadeIn(delay=2000);
})
})
$("#nan").click(function () {
  $("#abouth1").fadeOut(function () {
      $("#abouth1").text('Nano Net').fadeIn();
  })
  $("#p1").fadeOut(function () {
    $("#p1").fadeIn(delay=2000);
})
})
$("#mor").click(function () {
  $("#abouth1").fadeOut(function () {
      $("#abouth1").text('Moroorgar').fadeIn();
  })
  $("#p1").fadeOut(function () {
    $("#p1").fadeIn(delay=2000);
})
})
});