<?php
  // Wöchentlich per Cronjob aufrufen
  // Alle Dateien im /log Verzeichnis durchgehen und prüfen, ob das letzte Änderungsdatum länger als 1 Woche her ist, dann löschen
  // filetime()  date()

  if($_SERVER['QUERY_STRING'] != "EXECUTE"){
    echo "Nothing to see here <br>";
    exit();
  }

  ignore_user_abort(true);
  set_time_limit(100);

  require_once "logger.php";

  echo "br>Starting to zip Logs of last Week <br>";

  //Create archive directory if not existing
  if (!file_exists('logs/archive')) {
    mkdir('logs/archive');
  }

  //Create a new zip file
  $zip = new ZipArchive();
  $filename = "logs/archive/logs_week_" . date("W")-1 . ".zip";
  $zip->open($filename, ZipArchive::CREATE);

  $dir = new DirectoryIterator('logs');

  $date = new DateTime('2018-06-11');
  echo "Current date " . $date->format('d.m.Y') . "<br>";
  $date->modify('-7 day');
  echo "Startdate of last week: " . $date->format('d.m.Y') . "<br>";
  echo "Startdate timestamp: " . $date->getTimestamp() . "<br>";

  echo "Logfiles<br>";
  foreach ($dir as $fileinfo) {
    if (!$fileinfo->isDot() AND !$fileinfo->isDir()) {
        #$zip->addFile($fileinfo->getPathname());
        echo $fileinfo->getMTime() . "<br>";
    }
  }

  echo "Number of logfiles: " . $zip->numFiles . "<br>";
  echo "Status of the new zip file:" . $zip->status . "<br>";

  $zip->close();

  echo "Successfully zipped logs of last week";
 ?>
