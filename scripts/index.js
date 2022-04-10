$( function() {
    $( ".fab-wrapper" ).draggable({containment :"document"});
    
    // different sections
    $("#chat").load("./html/chat.html"); 
    $("#knowMore").load("./html/knowMore.html"); 
    $("#about").load("./html/about.html");
} );
  