<?php 

include 'models/api.php';

$xml = new API();
$licenceData = $xml->getLicenceB('01690167');

// Convertir les éléments XML en tableau pour le tri
$data = [];
foreach ($licenceData->children() as $child) {
    $data[] = $child;
}

// Fonction de comparaison pour trier les éléments
function compare($a, $b) {
    return strcmp((string)$a->nom, (string)$b->nom);
}

usort($data, 'compare');



$template='classement';
include 'views/layout.phtml';

?>