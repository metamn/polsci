jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){
  
  
  // Show Events, News, Search ...
  jQuery("#secondary li h4").click(function() {
    var id = "#" + jQuery(this).attr('class'); 
    jQuery(id).toggle('slow', function() {
      if (jQuery(".startpage #body").is(":visible")) {
        toggleArticleOpacity("");  
      } else {
        toggleArticleOpacity(" #excerpt");  
      }            
    });
      
  });
  
  // Hiding or showing the main article 
  function toggleArticleOpacity(div) {    
    var switchOff = false;
    
    jQuery.each(["#news", "#events"], function(index, value) { 
      switchOff = switchOff || (jQuery(".startpage " + value).css('display') ==  'block');
    });
    
    if (switchOff) {
      jQuery(".startpage article" + div).fadeTo('slow', .1);
    } else {
      jQuery(".startpage article" + div).fadeTo('slow', .9);
    }
  }
  
  
  
  
  // Enlarge menu on hover 
  jQuery("#menu ul li a").hover(
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
