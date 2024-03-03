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
        case "equipe1" :
            include 'controllers/equipe1.php';
            break;
        case "equipe2" :
            include 'controllers/equipe2.php';
            break;
        case "equipe3" :
            include 'controllers/equipe3.php';
            break;
        case "equipe4" :
            include 'controllers/equipe4.php';
            break;
        case "equipe5" :
            include 'controllers/equipe5.php';
            break;
        case "equipe6" :
            include 'controllers/equipe6.php';
            break;
        case "equipe7" :
            include 'controllers/equipe7.php';
            break;
        
    }


}else{
    include 'controllers/index.php';
}

?>