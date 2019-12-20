<?php
$conn = new mysqli( 'localhost', 'remoto', 'x1234567', 'directorio' );

if ( $conn->connect_error ) {
  die( 'Error conexion base de datos' );
}

$res = array( 'error' => false );

$action = 'read';

if ( isset( $_GET['action'] ) ) {
  $action = $_GET['action'];
}

if ( $action == 'read' ) {
  $result = $conn->query( "SELECT * FROM personas" );
  $personas = array();

  while ( $row = $result->fetch_assoc() ) {
    array_push( $personas, $row );
  }

  $res['personas'] = $personas;  
}

if ( $action == 'create' ) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $web = $_POST['web'];

  $result = $conn->query( "INSERT INTO personas (name, email, web) VALUES ('$name', '$email', '$web')" );
  
  if ( $result ) {
    $res['message'] = 'Agregado con éxito.';
  } else {
    $res['error'] = true;
    $res['message'] = "Error al tratar de agregar.";
  }
}

if ( $action == 'update' ) {
  $id = $_POST['id'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  $web = $_POST['web'];

  $result = $conn->query( "UPDATE personas SET name = '$name', email = '$email', web = '$web' WHERE id = $id" );
  
  if ( $result ) {
    $res['message'] = 'Actualizado con éxito.';
  } else {
    $res['error'] = true;
    $res['message'] = "Error al tratar de actualizar.";
  }
}

if ( $action == 'delete' ) {
  $id = $_POST['id'];

  $result = $conn->query( "DELETE FROM personas WHERE id = $id" );
  
  if ( $result ) {
    $res['message'] = 'Eliminado con éxito.';
  } else{
    $res['error'] = true;
    $res['message'] = "Error al tratar de eliminar.";
  }
}

$conn->close();

header('Content-type: application/json');
echo json_encode($res);