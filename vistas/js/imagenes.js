$(document).ready(function() {
    // Manejar el clic en el botón de editar producto
    $(".tablas").on("click", ".btnEditarImagen", function() {
        // Obtener el ID del producto desde el botón
        var idImagen = $(this).attr("idImagen");
        // Establecer el valor del campo oculto con el ID del producto
        $("#idProducto").val(idProducto);
        var datos = new FormData();
        datos.append("idProducto", idProducto);

        $.ajax({
            url:"ajax/imagenes.ajax.php",
            method: "POST",
            data: datos,
            cache: false,
            contentType: false,
            processData: false,
            dataType:"json",
            success:function(respuesta){
                // No necesitas asignar nuevamente el valor de idProducto aquí
                // $("#idProducto").val(respuesta["id_prod"]);
                $("#editarNombre").val(respuesta["nombre"]);
                $("#editarDescripcion").val(respuesta["descripcion"]);
                $("#editarPrecio").val(respuesta["precio"]);
                $("#editarEstrellas").val(respuesta["estrellas"]);
                $("#editarClasificacion").val(respuesta["clasificacion"]);
                $("#editarPrincipal").val(respuesta["principal"]);
                $("#editarMasVendido").val(respuesta["masvendido"]);
            }
        });
    });





    $(".tablas").on("click", ".btnEliminarProducto", function() {
        var idProducto = $(this).data("idproducto");
        console.log("ID del producto:", idProducto);
    
        // Mostrar un cuadro de diálogo de confirmación
        swal({
            title: '¿Está seguro de borrar el producto?',
            text: "¡Si no lo está puede cancelar la acción!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, borrar producto!'
        }).then(function(result) {
            if (result.value) {
                // Redirigir a la página que se encarga de eliminar el producto, enviando el ID como parámetro
                window.location = "index.php?ruta=productos&idProducto=" + idProducto;
            }
        });
    });
    
    
    // Manejar el clic en el botón de actualizar estado de producto
    $(".tablas").on("click", ".btnActualizarEstadoProducto", function() {
        var idProducto = $(this).attr("idProducto");
        var estadoProducto = $(this).attr("estadoProducto");

        console.log("ID del producto:", idProducto); // Depuración
        console.log("Estado del producto:", estadoProducto); // Depuración

        var datos = new FormData();
        datos.append("idProducto", idProducto);
        datos.append("estadoProducto", estadoProducto);

        $.ajax({
            url: "ajax/productos.ajax.php",
            method: "POST",
            data: datos,
            cache: false,
            contentType: false,
            processData: false,
            dataType: "json",
            success: function(respuesta) {
                console.log("Respuesta del servidor:", respuesta); // Depuración
                // Aquí puedes hacer lo que necesites con la respuesta
                if (respuesta.status === "success") {
                    // Éxito
                } else {
                    // Error
                }
            },
            error: function(xhr, status, error) {
                // Manejo de errores
                console.error("Error en la solicitud AJAX:", xhr.responseText);
            }
        });
    });
});
