<?php
require_once '../conexion/conexion.php';

class Usuario extends conexion{
	private $id;
	private $nombre;
	private $apellido;

	public function __construct(){
		$this->conectar();
	}
	public function setId($id){
		return $this->id=$id;
	}
	public function getId(){
		return $this->id;
	}
	public function setNombre($nombre){
		return $this->nombre=$nombre;
	}
	public function getNombre(){
		return $this->nombre;
	}
	public function setApellido($apellido){
		return $this->apellido=$apellido;
	}
	public function getApellido(){
		return $this->apellido;
	}

	public function cargarDatos(){
		$consultas=$this->consultaBd("select * from usuario");
		$datos = array();
		while($row=$this->fetch_array($consultas))
		{
			$datos[]=array(
				'Id'=> $row[0],
				'Nombre'=> $row[1],
				'Apellido'=> $row[2]
			);
		}
		return json_encode($datos);
	}
}