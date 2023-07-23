<?php
    session_start();
    require_once 'vendor/autoload.php';
    use \Mailjet\Resources;

    define('API_USER', 'd673eba66e002c42260e2c3c66cd13c0');
    define('API_LOGIN', '084a78cc162a0ce4aa1b24de6624ff28');
    $mj = new \Mailjet\Client(API_USER, API_LOGIN,true,['version' => 'v3.1']);

    if(!empty($_POST['nom']) && !empty($_POST['email']) && !empty($_POST['tel']) && !empty($_POST['sujet']) && !empty($_POST['message'])){
        $nom = htmlspecialchars($_POST['nom']);
        $email = htmlspecialchars($_POST['email']);
        $tel = htmlspecialchars($_POST['tel']);
        $sujet = htmlspecialchars($_POST['sujet']);
        $message = htmlspecialchars($_POST['message']);

        if(filter_var($email, FILTER_VALIDATE_EMAIL)){

        
           
            $body = [
                'Messages' => [
                    [
                        'From' => [
                            'Email' => "guillau602008@hotmail.fr",
                            'Name' => "Site Tennis de table Mornant"
                        ],
                        'To' => [
                            [
                                'Email' => "lecardonnelgm@gmail.com",
                                'Name' => "passenger 1"
                            ]
                        ],
                        'Subject' => "Message du site du club de ping pong",
                        'HTMLPart' => "
                                        <h2>$sujet :</h2>
                                        <p>$message</p>
                                        <br>
                                        <p>Nom : $nom</p>
                                        <p>Email : $email</p>
                                        <p>Telephone : $tel</p>"
                    ]
                ]
            ];
            $response = $mj->post(Resources::$Email, ['body' => $body]);
            if ($response->success()) {
                $_SESSION['email_sent'] = true;
                header('location: index.php?action=contact');
            } else {
                echo "Erreur lors de l'envoi de l'email";
            }
        }else{
            echo "Email non valide";
        }

    }else{

        header('location: index.php?action=contact');
        die();
    }

    ?>