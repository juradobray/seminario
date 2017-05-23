$(() => {

    class Coments {

        constructor() {

        }

        enviarComentarios() {
var tipos="";
        let nombreContact = $("#nombre_compl").val();
		let numDoc=$("#num_doc").val();
            let emailContact = $("#email").val();
          	let tipoComent=$("#seleccione").val();
			let comentario=$("#coment").val();
			


				
            	firebase.database().ref(`comentarios/${nombreContact+","+emailContact}`).set(
            		{
            			nombreContacto : nombreContact,
						numeroDocumento : numDoc,
						emailContacto : emailContact,
						tipoComentario : tipoComent,
						comentario : coment						
            		}
            	);

            	
                  	Materialize.toast(` Comentario enviado con exito!! `, 4000);

            	$('.modal').modal('close');


        }

    
    }

    const objComent = new Coments();

    $("#enviarComent").click(objComent.enviarComentarios);
  

});
