<?php
$form_data = '';
foreach($_POST as $key => $value){
  $form_data .= "\$_$key=<b>$value</b><br>";
  $$key = $value;
}

echo '<pre>';
echo '<b>Datos recibidos:</b><br><br>'.$form_data;

if ($formType) {
  echo '<br>para Opinión';
} else {
  echo '<br>para Presupuesto';
}
echo '</pre>';