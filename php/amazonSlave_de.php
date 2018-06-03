<?php
  if($_SERVER['QUERY_STRING'] != "Schulze-Beckendorf"){
    exit();
  }

  ignore_user_abort(true);
  set_time_limit(100);

  require_once "logger.php";
  require_once "SmartphoneDataRequester.php";

  $json = json_decode(file_get_contents("../scripts/smartphones.js"),TRUE);

  $countries = array(
      array("de", "webservices.amazon.de", "smartphonep08-21"),
      array("com", "webservices.amazon.com", "smartphonep08-20" ),
  );
 $smartphoneDataRequester = [];
   for ($i = 0; $i < count($countries); $i++) {
     $smartphoneDataRequester[] = new SmartphoneDataRequester($countries[$i][1], $countries[$i][2]);
   }
  $failedAsinsIDs = [];

  for ($x = 0; $x < count($json['smartphones']); $x++) {
    logToFile("amazonSlave_de", "Smartphonenumber is: " . ($x+1));
    echo "Smartphonenumber is: $x <br>";
    for($i = 0; $i < count($countries); $i++) {
      echo 'a'.$json['smartphones'][$x]['asin_' . 'de'];
    if ($json['smartphones'][$x]['asin_' . $countries[$i][0]] != '') {
      logToFile("amazonSlave_de", "ASIN: " . $json['smartphones'][$x]['asin_' . $countries[$i][0]]);
      echo "ASIN: " . $json['smartphones'][$x]['asin_' . $countries[$i][0]] . "<br>";

      $smartphoneData = $smartphoneDataRequester[$i]->getSmartPhoneData($json['smartphones'][$x]['asin_' . $countries[$i][0]]);
      if($smartphoneData[0] === TRUE) {
        $failedAsinsIDs[] = array($x, $countries[$i][0], i);
        logToFile("amazonSlave_de", "Amazon blocked Request with ASIN " . $json['smartphones'][$x]['asin_' . $countries[$i][0]]);
        echo "Amazon blocked <br>";
      } else {
        $json['smartphones'][$x]['amazon_' . $countries[$i][0]] = $smartphoneData[1];
        $json['smartphones'][$x]['price_' . $countries[$i][0]] = $smartphoneData[2];
        logToFile("amazonSlave_de", "New Price: " . $smartphoneData[2]);
        echo "New Price: " . $smartphoneData[2] . "<br>";
      }
    }
   }
  }

  //Alle Einträge in der smartphones.js welche nicht geupdatet werden konnten so oft wiederholen, bis alles aktualisiert wurde
  while (count($failedAsinsIDs) !== 0) {
    logToFile("amazonSlave_de", "Die folgenden ASINs wurden im letzten Try von Amazon blockiert und müssen nochmal requested werden");
    echo "Die folgenden ASINs wurden im letzten Try von Amazon blockiert und müssen nochmal requested werden <br>";
    for ($x = 0; $x < count($failedAsinsIDs); $x++) {
      logToFile("amazonSlave_de", "Failed ASIN:" . $json['smartphones'][$failedAsinsIDs[$x][0]]['asin_' . $failedAsinsIDs[$x][1]]);
      echo "Failed ASIN:" . $json['smartphones'][$failedAsinsIDs[$x][0]]['asin_' . $failedAsinsIDs[$x][1]] . "<br>";
    }

    //Hier drin temporär die wieder gescheiterten Speichern
    $failedAsinsIDsTMP = [];
    for ($x = 0; $x < count($failedAsinsIDs); $x++) {
      logToFile("amazonSlave_de", $json['smartphones'][$failedAsinsIDs[$x][0]]['asin_' . $failedAsinsIDs[$x][1]]);
      echo $json['smartphones'][$failedAsinsIDs[$x][0]]['asin_' . $failedAsinsIDs[$x][1]] . "<br>";

      $smartphoneData = $smartphoneDataRequester->getSmartPhoneData($json['smartphones'][$failedAsinsIDs[$x][0]]['asin_' . $failedAsinsIDs[$x][1]]);
      if($smartphoneData[0] === TRUE) {
        $failedAsinsIDsTMP[] = $failedAsinsIDs[$x];
        logToFile("amazonSlave_de", "Amazon blocked Request with ASIN " . $json['smartphones'][$failedAsinsIDs[$x][0]]['asin_' . $failedAsinsIDs[$x][1]]);
        echo "Amazon blocked <br>";
      } else {
        $json['smartphones'][$failedAsinsIDs[$x][0]]['amazon_' . $failedAsinsIDs[$x][1]] = $smartphoneData[1];
        $json['smartphones'][$failedAsinsIDs[$x][0]]['price_' . $failedAsinsIDs[$x][1]] = $smartphoneData[2];
        logToFile("amazonSlave_de", "New Price: " . $smartphoneData[2]);
        echo "New Price: " . $smartphoneData[2] . "<br>";
      }
    }
    //Die wieder gescheiterten zurückspielen in die while Schleife
    $failedAsinsIDs = $failedAsinsIDsTMP;
  }

  file_put_contents("../scripts/smartphones.js", json_encode($json));
  logToFile("amazonSlave_de", "Prices should be updated");
  echo "Files should be updated <br>";
?>
