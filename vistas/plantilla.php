<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Manual de Usuario</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="vistas/plugins/fontawesome-free/css/all.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="vistas/dist/css/adminlte.css">
  <!-- jQuery -->
  <script src="vistas/plugins/jquery/jquery.min.js"></script>
  <!-- Bootstrap 4 -->
  <script src="vistas/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- AdminLTE App -->
  <script src="vistas/dist/js/adminlte.min.js"></script>
  <!-- AdminLTE for demo purposes -->
  <script src="vistas/dist/js/demo.js"></script>
</head>
<body class="hold-transition sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper">
<?php
include "modulos/cabecera.php";
include "modulos/menu.php";
if (isset($_GET["fase"]))
          {
            if ($_GET["fase"] == "inicio" ||
                $_GET["fase"] == "requisitos"||
                $_GET["fase"] == "elemento")
              {
                include "modulos/".$_GET["fase"].".php";
              }
              else
              {
                include "modulos/404.php";
              }
          }
          else
          {
            include "modulos/inicio.php";
          }
        include "vistas/modulos/piedepagina.php";
?>
</div>
<!-- ./wrapper -->
</body>
</html>
