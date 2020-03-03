$(document).ready(function(){
    $(".navbar").on("click","a", function (event) {

        event.preventDefault();
 
        var id  = $(this).attr('href'),
 
            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: top}, 500);
    });
    
    $('.nav-link').click(function() {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 500);
    });
 });   
