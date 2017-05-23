$(()=>{
	
	   $('.carousel').carousel();
	   $('.modal').modal();
	   $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );

	$('.tooltipped').tooltip({delay: 50});
	$('.modal').modal();

	firebase.initializeApp(varConfig);
/*	
	var x= firebase.database().ref("publicaciones/");
	x.on('child_added',function(snapshot){
var message= snapshot.val();

$('#posts').append("<article class=\"post\">\n" +
                    "                <div class=\"post-titulo\">\n" +
                    "                    <h5>"+message.tituloPublicacion+"</h5>                    \n" +
                    "                </div>\n" +
                    "                <div class=\"post-calificacion\">\n" +
                    "                        <a class=\"post-estrellita-llena\" href=\"*\"></a>\n" +
                    "                        <a class=\"post-estrellita-llena\" href=\"*\"></a>\n" +
                    "                        <a class=\"post-estrellita-llena\" href=\"*\"></a>\n" +
                    "                        <a class=\"post-estrellita-llena\" href=\"*\"></a>\n" +
                    "                        <a class=\"post-estrellita-vacia\" href=\"*\"></a>\n" +
                    "                </div>\n" +
                    "                <div class=\"post-video\">\n" +
                    "                     <iframe type=\"text/html\" width=\"500\" height=\"385\" src='"+message.urlPublicacion+"' frameborder=\"0\"></iframe>\n" +
                    "                </figure>\n" +
                    "                </div>\n" +
                    "                <div class=\"post-descripcion\">\n" +
                    "                    <p>"+message.descripcionPublicacion+"</p>                    \n" +
                    "                </div>\n" +
                    "                <div class=\"post-footer\">\n" +
                    "                    <div class=\"post-footer-autor\">\n" +
                    "                        Autor: Juan Guillermo\n" +
                    "                    </div>     \n" +
                    "                </div>\n" +
                    "            </article>");
//$('#posts').append("<strong>NOMBRE:</strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong>EMAIL:</strong>"+"<br>"+message.name+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+message.email+"<br>"+"<strong>COMENTARIO:</strong>"+"<br>"+message.comment+"<br>"+"<br>");
// $('#comments').text(message.name+"->"+email).prepend($('<em/>')).text(message.comment).appendTo($('#messagesDiv'));
// $('#messagesDiv')[0].scrollTop = $('messagesDiv')[0].scrollHeight;

});
	*/
	
});	