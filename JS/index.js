console.log("It works!");

$(".logo").hover(function() {
    console.log("Work damnit!");
    $("#title").addClass().css("color", "Purple");
    $("#title").removeClass().css("color", "midnightblue");
});

$(".logo").mouseenter(function() {
    console.log("Work damnit!");
    $("#title").css("color", "Purple");
});

$(".logo").mouseleave(function() {
    console.log("Work damnit!");
    $("#title").css("color", "Midnightblue");
});


$(".card").click(function() {
    alert("color");
});

ScrollReveal().reveal('.Examples', {
    delay: 500,
    reset: true
});

ScrollReveal().reveal('.mySkills', {
    delay: 500,
    reset: true
});

ScrollReveal().reveal('.myWork', {
    delay: 500,
    reset: true
});

function fade() {
    $('.preload').fadeOut("slow");
    setTimeout(fade, 3000);
}

