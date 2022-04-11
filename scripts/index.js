$( function() {
    $( ".fab-wrapper" ).draggable({containment :"document"});
    
    // different sections
    $("#chat").load("./html/chat.html"); 
    $("#knowMore").load("./html/knowMore.html"); 
    $("#about").load("./html/about.html");
} );
$(document).ready(function(){
    $("#para1").hide(); $("#u1").hide();
    $("#button1").click(function(){
      $("#para1").toggle(); 
    });
    $("#button1").click(function(){
        $("#u1").toggle(); 
    });
});
$(document).ready(function(){
    $("#para2").hide(); $("#u2").hide();
    $("#button2").click(function(){
      $("#para2").toggle(); 
    });
    $("#button2").click(function(){
        $("#u2").toggle(); 
    });
});
$(document).ready(function(){
    $("#para3").hide(); $("#u3").hide();
    $("#button3").click(function(){
      $("#para3").toggle(); 
    });
    $("#button3").click(function(){
        $("#u3").toggle(); 
    });
});
$(document).ready(function(){
    $("#para4").hide(); $("#u4").hide();
    $("#button4").click(function(){
      $("#para4").toggle(); 
    });
    $("#button4").click(function(){
        $("#u4").toggle(); 
    });
});
$(document).ready(function(){
    $("#para5").hide(); $("#u5").hide();
    $("#button5").click(function(){
      $("#para5").toggle(); 
    });
    $("#button5").click(function(){
        $("#u5").toggle(); 
    });
});
