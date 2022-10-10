//DYNAMIC SUBMENU CLASS SYMBOLS
// $("#navbarMenu ul li").has( "ul" ).each(function( index ) {
//     $(this).toggleClass('submenu');
// });
$("#navbarMenu ul .submenu > a").append('<span class="submenu-button"></span>');

//OPEN TOGGLE MENU ON BREAKPOINT MEDIA QUERY
$(".toggleMenu").click(function(e){
    $("nav > ul").slideToggle();
    e.preventDefault();
});

//TO PREVENT MENU CLOSE ON CLICK IN SUBMENU
$(".submenu ul li").click(function(e){
    e.stopPropagation();
});

//CLICK ON SUBMENU LINK
$(".submenu").click(function(e){
    //CLOSE OPEN SUBMENU
    if($(this).hasClass("active")){
        $("#navbarMenu ul li").removeClass('active');
        $('#navbarMenu ul li ul').slideUp();
    }else{
        $("#navbarMenu ul li").removeClass('active');
        $("#navbarMenu ul li ul").slideUp();
        $(this).addClass("active");
        $(this).find('ul').stop().slideToggle();
        e.stopPropagation();
    }
    $("#navbarMenu ul li").removeClass('openSub');
    $(this).addClass('openSub');

});

$("body, html").click(function(){
    $("#navbarMenu ul li").removeClass('active openSub');
    $('#navbarMenu ul li ul').slideUp();
});

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});









/*

const $backTop = $(".back-to-top");
const isHidden = "is-hidden";

AOS.init({
  offset: 200,
  delay: 50,
  once: true
});

/*$('a[data-toggle="pill"]').on("shown.bs.tab", e => {
  AOS.refresh();
});

$(window).on("scroll", function() {
  const $this = $(this);
  if ($this.scrollTop() + $this.height() == $(document).height()) {
    $backTop.removeClass(isHidden);
  } else {
    $backTop.addClass(isHidden);
  }
});

$backTop.on("click", () => {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
*/
