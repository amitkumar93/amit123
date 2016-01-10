(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function(){
     $('.slider').slider({full_width:true});
   });
   $('#textarea1').val('New Text');
   
     $('#textarea1').trigger('autoresize');
