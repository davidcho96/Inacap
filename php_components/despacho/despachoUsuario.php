<?php
require_once '../control/usuario.php';

$usuario = new Usuario();

switch ($_REQUEST['action']) {
	case 'buscar':
		echo $usuario->cargarDatos();
		break;
	
	default:
		# code...
		break;
}