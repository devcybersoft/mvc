$(document).ready(function() {
var id, opcion;
opcion = 4;
    
tablaproductos = $('#tablaproductos').DataTable({  
    "ajax":{            
        "url": "bd/crud.php", 
        "method": 'POST', //usamos el metodo POST
        "data":{opcion:opcion}, //enviamos opcion 4 para que haga un SELECT
        "dataSrc":""
    },
    "columns":[
        {"data": "id"},
        {"data": "nombre"},
        {"data": "codigo"},
        {"data": "valor"},
        {"data": "cantidad_i"},
        {"data": "cantidad_a"},
        {"data": "dato"},
        {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>edit</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>delete</i></button></div></div>"}
    ]
});     

var fila; //captura la fila, para editar o eliminar
//submit para el Agregar y Actualización
$('#formHerramientas').submit(function(e){                         
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
    nombre = $.trim($('#nombre').val());    
    codigo = $.trim($('#codigo').val());
    valor = $.trim($('#valor').val());    
    cantidad_i = $.trim($('#cantidad_i').val());    
    cantidad_a  = $.trim($('#cantidad_a').val());
    dato = $.trim($('#dato').val());
    request_body = {id:id,nombre:nombre, codigo:codigo, valor:valor, cantidad_i:cantidad_i, cantidad_a:cantidad_a, dato:dato  ,opcion:opcion};
    console.log(request_body);
    debugger;
        $.ajax({
          url: "bd/crud.php",
          type: "POST",
          datatype:"json",    
          data:  request_body,
          success: function(response) {
            console.log(response);
            tablaHerramientas.ajax.reload(null, false);
           }
        });			        
    $('#modalCRUD').modal('hide');											     			
});
        
 

//para limpiar los campos antes de agregar un producto
$("#btnNuevo").click(function(){
    opcion = 1; //agregar
    id=null;
    $("#formHerramientas").trigger("reset");
    $(".modal-header").css( "background-color", "#17a2b8");
    $(".modal-header").css( "color", "white" );
    $(".modal-title").text(" Agregar Herramienta");
    $('#modalCRUD').modal('show');	    
});

//Editar        
$(document).on("click", ".btnEditar", function(){		        
    opcion = 2;//editar
    fila = $(this).closest("tr");	        
    id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID		            
    nombre = fila.find('td:eq(1)').text();
    codigo = fila.find('td:eq(2)').text();
    valor = fila.find('td:eq(3)').text();
    cantidad_i = fila.find('td:eq(4)').text();
    cantidad_a = fila.find('td:eq(5)').text();
    dato = fila.find('td:eq(6)').text();
    $("#nombre").val(nombre);
    $("#codigo").val(codigo);
    $("#valor").val(valor);
    $("#cantidad_i").val(cantidad_i);
    $("#cantidad_a").val(cantidad_a);
    $("#dato").val(dato);
    $(".modal-header").css("background-color", "#007bff");
    $(".modal-header").css("color", "white" );
    $(".modal-title").text("Editar Herramienta");		
    $('#modalCRUD').modal('show');
    debugger;
});

//Borrar
$(document).on("click", ".btnBorrar", function(){
    fila = $(this);           
    id = parseInt($(this).closest('tr').find('td:eq(0)').text()) ;		
    opcion = 3; //eliminar        
    var respuesta = confirm("¿Está seguro de borrar el registro "+id+"?");                
    if (respuesta) {            
        $.ajax({
          url: "bd/crud.php",
          type: "POST",
          datatype:"json",    
          data:  {opcion:opcion, id:id},    
          success: function() {
              tablaHerramientas.row(fila.parents('tr')).remove().draw();                  
           }
        });	
    }
 });
     
});
