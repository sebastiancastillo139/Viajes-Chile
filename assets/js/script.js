
$( document ).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    
      $(function (){
        $(window).scroll(function(){
           if ($(this).scrollTop() >= 300) {
            $('.navbar').removeClass("navbar1");
           } else {
            $(".navbar").addClass("navbar1");
           }
        });
    });
    
});


