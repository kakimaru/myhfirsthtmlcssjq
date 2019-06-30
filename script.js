$(function(){

  $(".login").click(function(){
    $("#login-modal").fadeIn();
  });

  $("#close-modal").click(function(){
    $("#login-modal").fadeOut();
  });


  $(".faq-list-item").click(function(){
    var $answer = $(this).find(".answer");

    if ($answer.hasClass("open")) {
      $answer.removeClass("open");
      $answer.slideUp();
      $(this).find("span").text("+");
    } else {
      $answer.addClass("open");
      $answer.slideDown();
      $(this).find("span").text("-");
    }
  });

  $(".header-logo").click(function(){
    $("html, body").animate({
      'scrollTop': 0
    },500);
  });

});
