<?php

include 'models/api.php';

$xml = new API();
$equipeData = $xml->getEquipesByClub('01690167', '');

$pouleClassement = $xml->getPouleClassement('126302', '657180');

$resultPoule = $xml->getResultPoule('657180');

$template='equipe1';
include 'views/layout.phtml';

?>