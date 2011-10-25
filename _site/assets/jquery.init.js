jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){
  
  // Startpage. Show article body on click
  jQuery(".startpage article").click(function() {
    jQuery(".startpage #body").toggle('slow');   
    jQuery(".startpage #excerpt").toggle('slow');
  });
});
