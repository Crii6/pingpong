<?php 

if(array_key_exists("action", $_GET)){


    switch($_GET['action']){
        case "inscription" :
            include 'controllers/inscription.php';
            break;
        case "historique" :
            include 'controllers/historique.php';
            break;
        case "contact" :
            include 'controllers/contact.php';
            break;
        case "formulaire" :
            include 'controllers/formulaire.php';
            break;
        case "classement" :
            include 'controllers/classement.php';
            break;
        
    }


}else{
    include 'controllers/index.php';
}

?>