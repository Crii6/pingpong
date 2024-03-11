<?php 


class API {

    // Fonction pour générer un numéro de série unique
    private function generateUniqueSerial($nbr) {
        // Générer une chaîne de 15 caractères aléatoires [A..Z][0..9]
        $str = "";
        $chaine = "ABCDEFGHIJKLMNOPQRSUTVWXYZ0123456789";
        $nb_chars = strlen($chaine);
        for($i=0; $i<$nbr; $i++)
        {
            $str .= $chaine[ rand(0, ($nb_chars-1)) ];
        }
        return $str;
    }
    
    public function initialisationAPI() {
        
        
        // Paramètres requis pour l'initialisation d'un nouvel utilisateur
        $id = "SW940";
        $cle = md5('5eZUsR61Xe');
        $serie = $this->generateUniqueSerial(15); // Numéro de série unique
        $_SESSION["API"] = $serie;
        $tm = round(microtime(true)*1000); // timestamp en ms
        $timestamp = sprintf("%.0f", $tm);  // Timestamp actuel au format Y-m-d H:i:s
        $tmc = hash_hmac("sha1", $timestamp, $cle);
        
        // Construire l'URL avec les paramètres
        $url = 'http://www.fftt.com/mobile/pxml/xml_initialisation.php?serie='.$serie.'&tm='.$timestamp.'&tmc='.$tmc.'&id='.$id;
        
        // Envoyer une requête pour initialiser un nouvel utilisateur
        $response = file_get_contents($url);

        return $response;
        
        // $xml = simplexml_load_string($response);
        
        // // Vérifier si l'accès est autorisé
        // if ($xml->appli == 1) {
        //     echo "L'accès est autorisé.";
        // } else {
        //     echo "L'accès n'est pas autorisé.";
        // }
    }

    private function compare($a, $b) {
        return strcmp((string)$a, (string)$b);
    }

    // Méthode pour trier les éléments XML
    public function sortXML($xml) {
        usort($xml->children(), array($this, 'compare'));
        return $xml;
    }

    public function connexionAPI($api, $params = null){


        $id = "SW940";
        $cle = md5('5eZUsR61Xe');
        $serie = $this->generateUniqueSerial(15); // Numéro de série unique
        $_SESSION["API"] = $serie;
        $tm = round(microtime(true)*1000); // timestamp en ms
        $timestamp = sprintf("%.0f", $tm);  // Timestamp actuel au format Y-m-d H:i:s
        $tmc = hash_hmac("sha1", $timestamp, $cle);

        $url = 'http://www.fftt.com/mobile/pxml/'.$api.'.php?serie='.$serie.'&tm='.$timestamp.'&tmc='.$tmc.'&id='.$id;

        if (!empty($params)) {
            $url .= '&' . http_build_query($params);
            }

        $response = simplexml_load_string(file_get_contents($url));
        // $xml = mb_convert_encoding($response, 'ISO-8859-1', 'UTF-8');
        return $response; 

    }

    public function getLicence($licence) {
        $extract = $this->connexionAPI('xml_licence', array ('licence' => $licence));
        return $extract;
    }

    public function getLicenceB($club){
        $extract = $this->connexionAPI('xml_licence_b', array ('club' => $club));
        
        return $extract;
    }


    public static function getObject($data, $key = null){
        if ($key) {
            return @array_key_exists($key, $data) ? $data[$key] : null;
        } else {
            return empty($data) ? null : $data;
        }
    }

    public function getEquipesByClub($club, $type) {
        
        $extract = $this->connexionAPI('xml_equipe', array ('numclu' => $club, 'type' => $type));
        return $extract;
    }

    public function getPouleClassement($division, $poule) {

        $extract = $this->connexionAPI('xml_result_equ', array ('auto' => '1', 'D1' => $division, 'cx_poule' => $poule, 'action' => 'classement'));
        return $extract;
    }

    public function getResultPoule($poule) {
        $extract = $this->connexionAPI('xml_rencontre_equ', array ('poule' => $poule));
        return $extract;
    }



}

?>