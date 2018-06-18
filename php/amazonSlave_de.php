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

  $counter = array();
  for ($i=0; $i < count($json['smartphones']); $i++) {
    for ($x=0; $x < count($countries); $x++) {
      $counter[] = array($i, $countries[$x][0], $x );
    }
  }

 $smartphoneDataRequester = [];
   for ($i = 0; $i < count($countries); $i++) {
     $smartphoneDataRequester[] = new SmartphoneDataRequester($countries[$i][1], $countries[$i][2]);
   }
$x = 0;
while (count($counter) > 0) {
    logToFile("amazonSlave_de", "Smartphonenumber is: " . $counter[$x][0]);
    echo "Smartphonenumber is: $x <br>";
    echo 'a'.$json['smartphones'][$x]['asin_' . 'de'];
    if ($json['smartphones'][$counter[$x][0]]['asin_' . $counter[$x][1]] != '') {
      logToFile("amazonSlave_de", "ASIN: " . $json['smartphones'][$counter[$x][0]]['asin_' . $counter[$x][1]]);
      echo "ASIN: " . $json['smartphones'][$counter[$x][0]]['asin_' . $counter[$x][1]] . "<br>";

      $smartphoneData = $smartphoneDataRequester[$counter[$x][2]]->getSmartPhoneData($json['smartphones'][$counter[$x][0]]['asin_' . $counter[$x][1]]);
      if($smartphoneData[0] === TRUE) {
        logToFile("amazonSlave_de", "Amazon blocked Request with ASIN " . $json['smartphones'][$counter[$x][0]]['asin_' . $counter[$x][1]]);
        echo "Amazon blocked <br>";
        $x++;
      } else {
        $json['smartphones'][$counter[$x][0]]['amazon_' . $counter[$x][1]] = $smartphoneData[1];
        $json['smartphones'][$counter[$x][0]]['price_' . $counter[$x][1]] = $smartphoneData[2];
        logToFile("amazonSlave_de", "New Price: " . $smartphoneData[2]);
        echo "New Price: " . $smartphoneData[2] . "<br>";
        echo "CountArray: " . count($counter) . "<br>";
        array_splice($counter, $x, 1); //Delete element when it was succesful
        echo "CountArray: " . count($counter) . "<br>";
      }
    }
    else {
      array_splice($counter, $x, 1); //Delete element when there is no asin
    }

    if($x === count($counter))
    {
      echo "Reset x to 0: " . "<br>";
      $x = 0;
    }
}

  file_put_contents("../scripts/smartphones.js", json_encode($json));
  logToFile("amazonSlave_de", "Prices should be updated");
  echo "Files should be updated <br>";
?>
