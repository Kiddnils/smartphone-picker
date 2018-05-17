<?php if($_SERVER['QUERY_STRING'] != "Schulze-Beckendorf"){ exit(); }



// Your Access Key ID, as taken from the Your Account page

$access_key_id = "AKIAJ37QGA6ELGKIL5TQ";



// Your Secret Key corresponding to the above ID, as taken from the Your Account page

$secret_key = "WO02DV+U9qlyv7JtUxxnO6QPoDZaLX+b20n4cvNd";



// The region you are interested in

$endpoint = "webservices.amazon.de";



$uri = "/onca/xml";











$file = "../scripts/smartphones.js";
$json = json_decode(file_get_contents($file),TRUE);


for ($x = 0; $x <= count($json['smartphones']); $x++) {
    echo "The number is: $x <br>";


    $params = array(

    "Service" => "AWSECommerceService",

    "Operation" => "ItemLookup",

    "AWSAccessKeyId" => "AKIAJ37QGA6ELGKIL5TQ",

    "AssociateTag" => "smartphonep08-21",

    "ItemId" => "B07CHQHFDZ",

    "IdType" => "ASIN",

    "ResponseGroup" => "Medium"

    );

if ($json['smartphones'][$x]['asin_de'] != '') {
    $params["ItemId"] = $json['smartphones'][$x]['asin_de'];
    echo $params["ItemId"];



    // Set current timestamp if not set

    if (!isset($params["Timestamp"])) {

    $params["Timestamp"] = gmdate('Y-m-d\TH:i:s\Z');

    }



    // Sort the parameters by key

    ksort($params);



    $pairs = array();



    foreach ($params as $key => $value) {

    array_push($pairs, rawurlencode($key)."=".rawurlencode($value));

    }



    // Generate the canonical query

    $canonical_query_string = join("&", $pairs);



    // Generate the string to be signed

    $string_to_sign = "GET\n".$endpoint."\n".$uri."\n".$canonical_query_string;



    // Generate the signature required by the Product Advertising API

    $signature = base64_encode(hash_hmac("sha256", $string_to_sign, $secret_key, true));



    // Generate the signed URL

    $request_url = 'http://'.$endpoint.$uri.'?'.$canonical_query_string.'&Signature='.rawurlencode($signature);

echo "Signed URL: \"".$request_url."\"";

//echo "Signed URL: \"".$response."\"";

$response = file_get_contents($request_url);

if($response === FALSE)
{
  echo "Amazon blocked";
}else {
    $xml = new DOMDocument();
    $xml->loadXML($response);
    $items = $xml->getElementsByTagName("Items")[0];
    foreach ( $items->getElementsByTagName("Item") as $item )    {
    $json['smartphones'][$x]['amazon_de'] = $item->getElementsByTagName("DetailPageURL")[0]->nodeValue.PHP_EOL;

    $json['smartphones'][$x]['price_de'] = substr($item->getElementsByTagName("Amount")[0]->nodeValue.PHP_EOL, 0, -3);
    }
    sleep(4);

  }
}
}
file_put_contents("../scripts/smartphones.js", json_encode($json));
echo "Files should be updated";



?>
