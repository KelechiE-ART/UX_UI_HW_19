console.log("It works!");

$(".logo").hover(function() {
    $('h1').fadeOut(800);
    $('h1').fadeIn(500);
});


$(".card").click(function() {
    alert("color");
});

ScrollReveal().reveal('.Examples', {
    delay: 375,
    duration: 500,
    reset: true
});

ScrollReveal().reveal('.mySkills', {
    delay: 375,
    duration: 500,
    reset: true
});

ScrollReveal().reveal('.myWork', {
    delay: 375,
    duration: 500,
    reset: true
});

function fade() {
    $('.Preload').fadeOut("slow");
    }
    setTimeout(fade, 3000);