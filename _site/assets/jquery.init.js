jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){
  
  
  // Enlarge menu on hover 
  jQuery("#menu ul li").hover(
    function () {
      jQuery(this).addClass('highlight', 300);
    }, 
    function () {
      jQuery(this).removeClass('highlight', 300);
    }
  );

  
  // Startpage. Show article body on click
  jQuery(".startpage article").click(function() {
    jQuery(".startpage #body").toggle('slow');   
    jQuery(".startpage #excerpt").toggle('slow');
  });
});
