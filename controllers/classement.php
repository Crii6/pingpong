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
function comparer($a, $b, $mode) {
    if ($mode === 'point') {
        return intval($b->point) - intval($a->point);
    } else if ($mode === 'pointm') {
        return intval($b->pointm) - intval($a->pointm);
    } else if ($mode === 'nom') {
        return strcmp((string)$a->nom, (string)$b->nom);
    }
}

// Déterminer le mode de tri en fonction de la valeur sélectionnée dans le select
$modeDeTri = $_GET['mode'] ?? 'nom'; // Si aucun tri spécifié, par défaut trier par point

usort($data, function ($a, $b) use ($modeDeTri) {
    return comparer($a, $b, $modeDeTri);
});


$template='classement';
include 'views/layout.phtml';

?>