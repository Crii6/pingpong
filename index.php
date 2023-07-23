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
        
    }


}else{
    include 'controllers/index.php';
}

?>