window.onload = function() {

  var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];



  var json = '{ "smartphones" : [' +

    '{ "name":"6" , "brand":"Nokia", "imagelink":"https://images.ctfassets.net/wcfotm6rrl7u/QHJzVZHv2KSCQ8cIkgYo2/ae6c4ef77c7d6021890efa60b21c0cc3/TheNewNokia6_hardware-phone.png?fm=png", 	"price":279, 	"display":5.5, "length":149, "width":76, "processor":3, "updates":5, "camera":3, "battery":3, "storage":32, "memory":3, "sdslot":1, "simcards":2, "headphonejack":1 },' +
    '{ "name":"7 Plus" , "brand":"Nokia", "imagelink":"https://images.ctfassets.net/wcfotm6rrl7u/342egUgbI4QaC4wgKseYuk/6cbec796565c8bd2eca2b873b50f47da/Nokia7plus_ROW_hardware-phone.png?fm=png", 	"price":299, 	"display":6, "length":158, "width":76, "processor":4, "updates":5, "camera":4, "battery":5, "storage":64, "memory":4, "sdslot":1, "simcards":2, "headphonejack":1 },' +
    '{ "name":"8 Sirocco" , "brand":"Nokia", "imagelink":"https://images.ctfassets.net/wcfotm6rrl7u/BQQ8NVkKqGWAe4Am8UWO4/980e40489a147ff4e9abbd5e30274d1a/Nokia8Sirocco_ROW__power-phone.png?fm=png", 	"price":749, 	"display":5.5, "length":141, "width":73, "processor":5, "updates":5, "camera":5, "battery":3, "storage":128, "memory":6, "sdslot":1, "simcards":1, "headphonejack":0 },' +
    '{ "name":"Mi A1" , "brand":"Xiamoi", "imagelink":"https://i.imgur.com/y74WpwR.png", 	"price":185, 	"display":5.5, "length":155, "width":76, "processor":3, "updates":5, "camera":3, "battery":3, "storage":64, "memory":4, "sdslot":1, "simcards":2, "headphonejack":1 },' +

    '{ "name":"U11 life" , "brand":"HTC", "imagelink":"https://images-na.ssl-images-amazon.com/images/I/61iBTjkp3yL._SY741_.jpg", 	"price":229, 	"display":5.2, "length":149, "width":73, "processor":3, "updates":5, "camera":3, "battery":3, "storage":32, "memory":3, "sdslot":2, "simcards":2, "headphonejack":0 },' +
    '{ "name":"U11 +" , "brand":"HTC", "imagelink":"https://images-na.ssl-images-amazon.com/images/I/51XltEAiihL._SY879_.jpg", 	"price":641, 	"display":6, "length":159, "width":75, "processor":5, "updates":4, "camera":4, "battery":5, "storage":128, "memory":6, "sdslot":1, "simcards":2, "headphonejack":0 },' +

    '{ "name":"Pixel 2", "brand":"Google", "imagelink":"https://images-na.ssl-images-amazon.com/images/I/81Ea5V2MehL._SY879_.jpg", 	"price":669, 	"display":5, "length":146, "width":70, "processor":5, "updates":5, "camera":5, "battery":4, "storage":64, "memory":4, "sdslot":0, "simcards":1, "headphonejack":0 },' +
    '{ "name":"Pixel 2 XL" , "brand":"Google", "imagelink":"https://lh3.googleusercontent.com/GvCggzBjHRGSOCe-r5G0snOcJ0B8UeDLn-tSHrhrjT3M56BIXwiFijHnwskEGpdw-FD_WILxqHLUyYkmDZ8=v1-rp-w450", 	"price":731, 	"display":6, "length":158, "width":77, "processor":5, "updates":5, "camera":5, "battery":4, "storage":64, "memory":4, "sdslot":0, "simcards":1, "headphonejack":0 },' +

    '{ "name":"5t (64GB)", "brand":"OnePlus", "imagelink":"https://i.imgur.com/qPbTGxu.png", 	"price":499, 	"display":6, "length":156, "width":75, "processor":5, "updates":4, "camera":4, "battery":4, "storage":64, "memory":6, "sdslot":0, "simcards":2, "headphonejack":1 },' +
    '{ "name":"5t (128GB)", "brand":"OnePlus", "imagelink":"https://i.imgur.com/qPbTGxu.png", 	"price":559, 	"display":6, "length":156, "width":75, "processor":5, "updates":4, "camera":4, "battery":4, "storage":128, "memory":8, "sdslot":0, "simcards":2, "headphonejack":1 },' +

    '{ "name":"Honor 7X", "brand":"Huawei", "imagelink":"https://i.imgur.com/9chGwId.png", 	"price":236, 	"display":5.9, "length":157, "width":75, "processor":3, "updates":4, "camera":3, "battery":4, "storage":64, "memory":4, "sdslot":1, "simcards":2, "headphonejack":1 },' +
    '{ "name":"P20", "brand":"Huawei", "imagelink":"https://i.imgur.com/vqPQcia.png", 	"price":539, 	"display":5.8, "length":149, "width":71, "processor":4, "updates":4, "camera":5, "battery":4, "storage":128, "memory":4, "sdslot":0, "simcards":2, "headphonejack":0 },' +
    '{ "name":"P20 lite", "brand":"Huawei", "imagelink":"https://i.imgur.com/5wTSOmp.png", 	"price":318, 	"display":5.8, "length":149, "width":71, "processor":4, "updates":4, "camera":3, "battery":4, "storage":64, "memory":4, "sdslot":1, "simcards":2, "headphonejack":1 },' +
    '{ "name":"P20 Pro", "brand":"Huawei", "imagelink":"https://i.imgur.com/Vc0thgM.png", 	"price":787, 	"display":6.1, "length":155, "width":74, "processor":5, "updates":4, "camera":5, "battery":5, "storage":128, "memory":6, "sdslot":1, "simcards":2, "headphonejack":1 },' +


    '{ "name":"Phone", "brand":"Essential", "imagelink":"https://i.imgur.com/OGr1dfB.png", 	"price":560, 	"display":5.7, "length":142, "width":71, "processor":5, "updates":5, "camera":5, "battery":4, "storage":128, "memory":4, "sdslot":0, "simcards":1, "headphonejack":0 },' +

    '{ "name":"G6", "brand":"LG", "imagelink":"https://images-na.ssl-images-amazon.com/images/I/814YBWa7gGL._SY879_.jpg", 	"price":324, 	"display":5.7, "length":149, "width":72, "processor":4, "updates":4, "camera":4, "battery":4, "storage":32, "memory":4, "sdslot":1, "simcards":1, "headphonejack":1 },' +
    '{ "name":"V30", "brand":"LG", "imagelink":"https://images-na.ssl-images-amazon.com/images/I/715GbwmYJjL._SY879_.jpg", 	"price":512, 	"display":6, "length":152, "width":75, "processor":5, "updates":4, "camera":4, "battery":4, "storage":32, "memory":4, "sdslot":2, "simcards":2, "headphonejack":1 },' +


    '{ "name":"Xperia XZ2", "brand":"Sony", "imagelink":"https://i.imgur.com/lis9AWg.png", 	"price":623, 	"display":5.7, "length":153, "width":72, "processor":5, "updates":4, "camera":4, "battery":4, "storage":64, "memory":4, "sdslot":1, "simcards":2, "headphonejack":0 },' +
    '{ "name":"Xperia XZ2 Compact", "brand":"Sony", "imagelink":"https://i.imgur.com/ExuzR25.png", 	"price":585, 	"display":5, "length":135, "width":65, "processor":5, "updates":4, "camera":4, "battery":3, "storage":64, "memory":4, "sdslot":1, "simcards":2, "headphonejack":0 },' +

    '{ "name":"iPhone 8 (64GB)" , "brand":"Apple", "imagelink":"https://i.imgur.com/xGEFWor.png", 	"price":665, 	"display":4.7, "length":138, "width":67, "processor":5, "updates":5, "camera":5, "battery":4, "storage":64, "memory":2, "sdslot":0, "simcards":1, "headphonejack":0 },' +
    '{ "name":"iPhone 8 (256GB)" , "brand":"Apple", "imagelink":"https://i.imgur.com/xGEFWor.png", 	"price":760, 	"display":4.7, "length":138, "width":67, "processor":5, "updates":5, "camera":5, "battery":4, "storage":256, "memory":2, "sdslot":0, "simcards":1, "headphonejack":0 },' +
    '{ "name":"iPhone 8 Plus (64GB)" , "brand":"Apple", "imagelink":"https://i.imgur.com/lq2EmJG.png", 	"price":783, 	"display":5.5, "length":158, "width":78, "processor":5, "updates":5, "camera":5, "battery":4, "storage":64, "memory":3, "sdslot":0, "simcards":1, "headphonejack":0 },' +
    '{ "name":"iPhone 8 Plus (256GB)" , "brand":"Apple", "imagelink":"https://i.imgur.com/lq2EmJG.png", 	"price":926, 	"display":5.5, "length":158, "width":78, "processor":5, "updates":5, "camera":5, "battery":4, "storage":256, "memory":3, "sdslot":0, "simcards":1, "headphonejack":0 },' +
    '{ "name":"iPhone X (64GB)" , "brand":"Apple", "imagelink":"https://i.imgur.com/UDV8YUp.png", 	"price":995, 	"display":5.8, "length":144, "width":77, "processor":5, "updates":5, "camera":5, "battery":4, "storage":64, "memory":3, "sdslot":0, "simcards":1, "headphonejack":0 },' +
    '{ "name":"iPhone X (256GB)" , "brand":"Apple", "imagelink":"https://i.imgur.com/UDV8YUp.png", 	"price":1150, 	"display":5.8, "length":144, "width":77, "processor":5, "updates":5, "camera":5, "battery":4, "storage":256, "memory":3, "sdslot":0, "simcards":1, "headphonejack":0 },' +
    '{ "name":"iPhone X (256GB)" , "brand":"Apple", "imagelink":"https://i.imgur.com/UDV8YUp.png", 	"price":1150, 	"display":5.8, "length":144, "width":77, "processor":5, "updates":5, "camera":5, "battery":4, "storage":256, "memory":3, "sdslot":0, "simcards":1, "headphonejack":0 },' +


    '{ "name":"Moto X4", "brand":"Motorola", "imagelink":"https://images-na.ssl-images-amazon.com/images/I/61eEr3fsroL._SY879_.jpg", 	"price":289, 	"display":5.2, "length":148, "width":73, "processor":3, "updates":5, "camera":4, "battery":5, "storage":32, "memory":3, "sdslot":1, "simcards":2, "headphonejack":1 },' +
    '{ "name":"Moto G6" , "brand":"Motorola", "imagelink":"https://i.imgur.com/v3WB6HT.png", 	"price":249, 	"display":5.7, "length":154, "width":72, "processor":3, "updates":4, "camera":3, "battery":3, "storage":32, "memory":3, "sdslot":1, "simcards":2, "headphonejack":1 },' +
    '{ "name":"Moto G6 Plus" , "brand":"Motorola", "imagelink":"https://i.imgur.com/phQJx7z.png", 	"price":299, 	"display":5.9, "length":160, "width":76, "processor":3, "updates":4, "camera":4, "battery":3, "storage":64, "memory":3, "sdslot":1, "simcards":2, "headphonejack":1 },' +
    '{ "name":"Moto G6 Play" , "brand":"Motorola", "imagelink":"https://i.imgur.com/JQ7Vnzc.png", 	"price":199, 	"display":5.7, "length":154, "width":72, "processor":2, "updates":2, "camera":3, "battery":5, "storage":32, "memory":3, "sdslot":1, "simcards":2, "headphonejack":1 },' +
    '{ "name":"Moto E4" , "brand":"Motorola", "imagelink":"https://images-na.ssl-images-amazon.com/images/I/71r21xr50KL._SY879_.jpg", 	"price":110, 	"display":5, "length":144, "width":73, "processor":2, "updates":2, "camera":2, "battery":2, "storage":16, "memory":2, "sdslot":1, "simcards":2, "headphonejack":1 },' +
    '{ "name":"Moto E4 Plus" , "brand":"Motorola", "imagelink":"https://i.imgur.com/FjLo3Ai.png", 	"price":139, 	"display":5.5, "length":155, "width":78, "processor":2, "updates":2, "camera":2, "battery":4, "storage":16, "memory":3, "sdslot":1, "simcards":2, "headphonejack":1 },' +
    '{ "name":"Moto G5S" , "brand":"Motorola", "imagelink":"https://i.imgur.com/S9FO30n.png", 	"price":147, 	"display":5.2, "length":150, "width":74, "processor":3, "updates":2, "camera":3, "battery":3, "storage":32, "memory":3, "sdslot":1, "simcards":2, "headphonejack":1 },' +
    '{ "name":"Moto G5S Plus" , "brand":"Motorola", "imagelink":"https://i.imgur.com/tdlPqFG.png", 	"price":200, 	"display":5.5, "length":154, "width":76, "processor":3, "updates":2, "camera":3, "battery":3, "storage":32, "memory":3, "sdslot":1, "simcards":2, "headphonejack":1 },' +


    '{ "name":"Galaxy A5"     , "brand":"Samsung", 	"imagelink":"https://i.imgur.com/wrIcHyN.png",	"price":236, 	"display":5.2, "length":146, "width":71, "processor":3, "updates":3, "camera":3, "battery":3, "storage":32, "memory":3, "sdslot":1, "simcards":1, "headphonejack":1 }, ' +
    '{ "name":"Galaxy S9"     , "brand":"Samsung", 	"imagelink":"https://images-na.ssl-images-amazon.com/images/I/71uI%2BnAzruL._SY879_.jpg",	"price":629, 	"display":5.8, "length":148, "width":68, "processor":5, "updates":4, "camera":5, "battery":4, "storage":64, "memory":4, "sdslot":1, "simcards":2, "headphonejack":1 }, ' +
    '{ "name":"Galaxy S9+"    , "brand":"Samsung", 	"imagelink":"https://images-na.ssl-images-amazon.com/images/I/71dd-elhT7L._SY879_.jpg",	"price":769, 	"display":6.2, "length":158, "width":74, "processor":5, "updates":4, "camera":5, "battery":4, "storage":64, "memory":6, "sdslot":1, "simcards":2, "headphonejack":1 }, ' +
    '{ "name":"Galaxy S8 Note"    , "brand":"Samsung", 	"imagelink":"https://i.imgur.com/PQYBIud.png",	"price":643, 	"display":6.3, "length":163, "width":75, "processor":5, "updates":4, "camera":5, "battery":4, "storage":64, "memory":6, "sdslot":1, "simcards":2, "headphonejack":1 }, ' +
    '{ "name":"Galaxy S8"     , "brand":"Samsung", 	"imagelink":"https://i.imgur.com/6gY3U53.png",	"price":476, 	"display":5.8, "length":148, "width":68, "processor":5, "updates":3, "camera":4, "battery":4, "storage":64, "memory":4, "sdslot":1, "simcards":1, "headphonejack":1 } ' +
    ']}';
  var obj;
  var listOfFilteredObjects;
  var listOfFilteredAndScoredObjects;

  function filterJSON() {
    obj = JSON.parse(json);
    listOfFilteredObjects = [];
    for (var i = 0; i < obj.smartphones.length; i++) {

      //prize minimum
      if (document.getElementById("price_minimum_1").value !== "") {
        if (obj.smartphones[i].price < document.getElementById("price_minimum_1").value) {
          continue;
        }
      }

      //prize maximum
      if (document.getElementById("price_maximum_1").value !== "") {
        if (obj.smartphones[i].price > document.getElementById("price_maximum_1").value) {
          continue;
        }
      }

      //display minimum
      if (document.getElementById("size_minimum_1").value !== "") {
        if (obj.smartphones[i].display < document.getElementById("size_minimum_1").value) {
          continue;
        }
      }
      //display maximum
      if (document.getElementById("size_maximum_1").value !== "") {
        if (obj.smartphones[i].display > document.getElementById("size_maximum_1").value) {
          continue;
        }
      }

      //length minimum
      if (document.getElementById("size_minimum_2").value !== "") {
        if (obj.smartphones[i].length < document.getElementById("size_minimum_2").value) {
          continue;
        }
      }
      //length maximum
      if (document.getElementById("size_maximum_2").value !== "") {
        if (obj.smartphones[i].length > document.getElementById("size_maximum_2").value) {
          continue;
        }
      }

      //width minimum
      if (document.getElementById("size_minimum_3").value !== "") {
        if (obj.smartphones[i].width < document.getElementById("size_minimum_3").value) {
          continue;
        }
      }
      //width maximum
      if (document.getElementById("size_maximum_3").value !== "") {
        if (obj.smartphones[i].width > document.getElementById("size_maximum_3").value) {
          continue;
        }
      }


      //processor
      if (document.querySelector('input[name="processor-input-1"]:checked')) {
        if (obj.smartphones[i].processor < document.querySelector('input[name="processor-input-1"]:checked').value) {
          continue;
        }
      }
      //software updates
      if (document.querySelector('input[name="updates-input-1"]:checked')) {
        if (obj.smartphones[i].updates < document.querySelector('input[name="updates-input-1"]:checked').value) {
          continue;
        }
      }
      //camera
      if (document.querySelector('input[name="camera-input-1"]:checked')) {
        if (obj.smartphones[i].camera < document.querySelector('input[name="camera-input-1"]:checked').value) {
          continue;
        }
      }
      //camera
      if (document.querySelector('input[name="battery-input-2"]:checked')) {
        if (obj.smartphones[i].battery < document.querySelector('input[name="battery-input-2"]:checked').value) {
          continue;
        }
      }

      //sdSLot
      if (document.getElementById("sdSlotInput").options[document.getElementById("sdSlotInput").selectedIndex].value !== "") {
        if (obj.smartphones[i].sdSLot < document.getElementById("sdSlotInput").options[document.getElementById("sdSlotInput").selectedIndex].value) {
          continue;
        }
      }

      //headphonejack
      if (document.getElementById("jackInput").options[document.getElementById("jackInput").selectedIndex].value !== "") {
        if (obj.smartphones[i].headphonejack < document.getElementById("jackInput").options[document.getElementById("jackInput").selectedIndex].value) {
          continue;
        }
      }

      //simCardInput
      if (document.getElementById("simCardInput").options[document.getElementById("simCardInput").selectedIndex].value !== "") {
        if (obj.smartphones[i].simcards < document.getElementById("simCardInput").options[document.getElementById("simCardInput").selectedIndex].value) {
          continue;
        }
      }

      listOfFilteredObjects.push(i);
    }
  }

  function sortListOfFilteredObjects() {
    var score = [];
    listOfFilteredAndScoredObjects = [];
    //first score stuff
    for (var i = 0; i < listOfFilteredObjects.length; i++) {
      score.push(calculateScore(obj.smartphones[listOfFilteredObjects[i]]));
      //then sort it into listOfFilteredAndScoredObjects
      for (var e = 0; e < listOfFilteredObjects.length; e++) {

        if (listOfFilteredAndScoredObjects.length == 0) {
          listOfFilteredAndScoredObjects.push(listOfFilteredObjects[i]);
          break;
        } else if (e == listOfFilteredAndScoredObjects.length) {
          listOfFilteredAndScoredObjects.splice(listOfFilteredAndScoredObjects.length, 0, listOfFilteredObjects[i]);
          break;
        } else if (score[i] > calculateScore(obj.smartphones[listOfFilteredAndScoredObjects[e]])) {
          listOfFilteredAndScoredObjects.splice(e, 0, listOfFilteredObjects[i]);
          break;
        } else if (score[i] === calculateScore(obj.smartphones[listOfFilteredAndScoredObjects[e]]) && obj.smartphones[listOfFilteredObjects[i]].price < obj.smartphones[listOfFilteredAndScoredObjects[e]].price) {
          listOfFilteredAndScoredObjects.splice(e, 0, listOfFilteredObjects[i]);
          break;
        }
      }
    }
  }

  function calculateScore(smartphone) {
    return smartphone.processor + smartphone.updates + smartphone.camera + smartphone.battery;
  }

  function deleteTable() {
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
      table.deleteRow(i);
    }
  }

  function buildTableStructure() {
    var rowCount = table.rows.length;
    var cell1;
    var leftBoundary;
    var rightBoundary;
    for (var i = 0; i < 24; i++) {
      leftBoundary = i * 50;
      rightBoundary = (i + 1) * 50;

      if (leftBoundary < document.getElementById("price_minimum_1").value && rightBoundary > document.getElementById("price_minimum_1").value) {
        leftBoundary = document.getElementById("price_minimum_1").value;
      }
      if (leftBoundary < document.getElementById("price_maximum_1").value && rightBoundary > document.getElementById("price_maximum_1").value) {
        rightBoundary = document.getElementById("price_maximum_1").value;
      }

      if (leftBoundary < document.getElementById("price_minimum_1").value || (rightBoundary > document.getElementById("price_maximum_1").value && document.getElementById("price_maximum_1").value != 0)) {
        var row = table.insertRow();
        cell1 = row.insertCell(0);
        cell1.classList.add('padding-none');
      } else {
        var row = table.insertRow();
        cell1 = row.insertCell(0);
        cell1.className += "priceTiers";
        cell1.innerHTML = leftBoundary + "-" + rightBoundary;
      }

    }
  }

  function updateTable() {
    deleteTable();
    buildTableStructure();
    filterJSON();
    sortListOfFilteredObjects();
    for (var i = 0; i < listOfFilteredAndScoredObjects.length; i++) {
      for (var e = 0; e < 24; e++) {
        if (obj.smartphones[listOfFilteredAndScoredObjects[i]].price > (e) * 50 && obj.smartphones[listOfFilteredAndScoredObjects[i]].price <= (e + 1) * 50) {

          if (table.rows[e + 1].cells.length < 10) { //Only 10 phones per row should be shown
            var cell = table.rows[e + 1].insertCell(table.rows[e + 1].cells.length);

            cell.innerHTML = '<input type="checkbox">' +
              '<label for="toggle" id="picture' + (e + 1) + '-' + table.rows[e + 1].cells.length + '">' +
              '<div class="float">' +
              '<img  class="qtip-img" src="' + obj.smartphones[listOfFilteredAndScoredObjects[i]].imagelink + '">' +
              '<p class="smartphone-name">' + obj.smartphones[listOfFilteredAndScoredObjects[i]].brand + ' ' + obj.smartphones[listOfFilteredAndScoredObjects[i]].name + '</p>' +
              '</div>' +
              '</label>' +
              '<div class="float" id="hiddenpicture' + (e + 1) + '-' + table.rows[e + 1].cells.length + '" style ="display:none" >' +
              '<h3>' + obj.smartphones[listOfFilteredAndScoredObjects[i]].display + '"<span style="float:right; color:red;">' + obj.smartphones[listOfFilteredAndScoredObjects[i]].price + '€</span></h3>' +
              '<br>' +
              '<h3 >Processor: <span style="float:right";>' + obj.smartphones[listOfFilteredAndScoredObjects[i]].processor + '</span></h3>' +
              '<h3 >Software: <span style="float:right">' + obj.smartphones[listOfFilteredAndScoredObjects[i]].updates + '</span></h3>' +
              '<h3 >Camera: <span style="float:right">' + obj.smartphones[listOfFilteredAndScoredObjects[i]].camera + '</span></h3>' +
              '<h3 >Battery: <span style="float:right">' + obj.smartphones[listOfFilteredAndScoredObjects[i]].battery + '</span></h3>' +
              '<hr>' +
              '<h3 ><span style="float:right; color: green;">' + calculateScore(obj.smartphones[listOfFilteredAndScoredObjects[i]]) + '</span></h3>' +
              '<h3 ><span style="float:right; color: white;">________________________</span></h3>' +
              '</div > ';

            document.getElementById('picture' + (e + 1) + '-' + table.rows[e + 1].cells.length).addEventListener('click', function(e) {
              if (document.getElementById('hidden' + e.target.parentElement.parentElement.id).style.display === "none") {
                document.getElementById('hidden' + e.target.parentElement.parentElement.id).style.display = "block";
              } else {
                document.getElementById('hidden' + e.target.parentElement.parentElement.id).style.display = "none";
              }
            });
            break;
          }

        }
      }
    }
  }


  document.getElementById("size_minimum_1").addEventListener("input", function() {
    updateTable();
  });
  var elems = document.getElementsByClassName("rating_updater");

  for (var i = 0, len = elems.length; i < len; i++) {
    elems[i].onchange = function() {
      updateTable();
    }
    elems[i].oninput = function() {
      updateTable();
    }

  }


  buildTableStructure();
  updateTable();


}