window.onload = function() {

  var tableHead = document.getElementById("myTable").getElementsByTagName('thead')[0];
  var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];



  var json = '{ "smartphones" : [' +

    '{ "name":"6" , "brand":"Nokia", "imagelink":"images/TheNewNokia6_hardware-phone.jpg?fm=png", 	"price":279, 	"design":4, "display":5.5, "length":149, "width":76, "processor":3, "updates":5, "camera":3, "battery":3, "storage":32, "memory":3, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0,"totalscore":0},' +
    '{ "name":"7 Plus" , "brand":"Nokia", "imagelink":"images/Nokia7plus_ROW_hardware-phone.jpg?fm=png", 	"price":399, 	"design":4, "display":6, "length":158, "width":76, "processor":4, "updates":5, "camera":4, "battery":5, "storage":64, "memory":4, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"8 Sirocco" , "brand":"Nokia", "imagelink":"images/Nokia8Sirocco_ROW__power-phone.jpg?fm=png", 	"price":749, 	"design":5, "display":5.5, "length":141, "width":73, "processor":5, "updates":5, "camera":4, "battery":4, "storage":128, "memory":6, "sdslot":1, "simcards":1, "headphonejack":0 ,"totalscore":0},' +

    '{ "name":"Mi A1" , "brand":"Xiamoi", "imagelink":"images/y74WpwR.jpg", 	"price":185, 	"design":4, "display":5.5, "length":155, "width":76, "processor":3, "updates":5, "camera":3, "battery":3, "storage":64, "memory":4, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"Mi MIX 2" , "brand":"Xiamoi", "imagelink":"images/7EIAsGt.jpg", 	"price":377, 	"design":5, "display":6, "length":152, "width":76, "processor":5, "updates":2, "camera":4, "battery":4, "storage":64, "memory":6, "sdslot":0, "simcards":2, "headphonejack":0 ,"totalscore":0},' +


    '{ "name":"U11 life" , "brand":"HTC", "imagelink":"images/61iBTjkp3yL._SY741_.jpg", 	"price":229, 	"design":4, "display":5.2, "length":149, "width":73, "processor":3, "updates":5, "camera":3, "battery":3, "storage":32, "memory":3, "sdslot":2, "simcards":2, "headphonejack":0 ,"totalscore":0},' +
    '{ "name":"U11 +" , "brand":"HTC", "imagelink":"images/51XltEAiihL._SY879_.jpg", 	"price":641, 	"design":5, "display":6, "length":159, "width":75, "processor":5, "updates":4, "camera":4, "battery":5, "storage":128, "memory":6, "sdslot":1, "simcards":2, "headphonejack":0 ,"totalscore":0},' +

    '{ "name":"Pixel 2", "brand":"Google", "imagelink":"images/81Ea5V2MehL._SY879_.jpg", 	"price":669, 	"design":4, "display":5, "length":146, "width":70, "processor":5, "updates":5, "camera":5, "battery":4, "storage":64, "memory":4, "sdslot":0, "simcards":1, "headphonejack":0 ,"totalscore":0},' +
    '{ "name":"Pixel 2 XL" , "brand":"Google", "imagelink":"images/pixel2xl.jpg", 	"price":731, 	"design":4, "display":6, "length":158, "width":77, "processor":5, "updates":5, "camera":5, "battery":4, "storage":64, "memory":4, "sdslot":0, "simcards":1, "headphonejack":0 ,"totalscore":0},' +

    '{ "name":"5t (64GB)", "brand":"OnePlus", "imagelink":"images/qPbTGxu.jpg", 	"price":499, 	"design":5, "display":6, "length":156, "width":75, "processor":5, "updates":4, "camera":4, "battery":4, "storage":64, "memory":6, "sdslot":0, "simcards":2, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"5t (128GB)", "brand":"OnePlus", "imagelink":"images/qPbTGxu.jpg", 	"price":559, 	"design":5, "display":6, "length":156, "width":75, "processor":5, "updates":4, "camera":4, "battery":4, "storage":128, "memory":8, "sdslot":0, "simcards":2, "headphonejack":1 ,"totalscore":0},' +

    '{ "name":"Honor 7X", "brand":"Huawei", "imagelink":"images/9chGwId.jpg", 	"price":236, 	"design":4, "display":5.9, "length":157, "width":75, "processor":3, "updates":4, "camera":3, "battery":4, "storage":64, "memory":4, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"P20", "brand":"Huawei", "imagelink":"images/vqPQcia.jpg", 	"price":539, 	"design":5, "display":5.8, "length":149, "width":71, "processor":4, "updates":4, "camera":5, "battery":4, "storage":128, "memory":4, "sdslot":0, "simcards":2, "headphonejack":0 ,"totalscore":0},' +
    '{ "name":"P20 lite", "brand":"Huawei", "imagelink":"images/5wTSOmp.jpg", 	"price":318, 	"design":4, "display":5.8, "length":149, "width":71, "processor":4, "updates":4, "camera":3, "battery":4, "storage":64, "memory":4, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"P20 Pro", "brand":"Huawei", "imagelink":"images/Vc0thgM.jpg", 	"price":787, 	"design":5, "display":6.1, "length":155, "width":74, "processor":5, "updates":4, "camera":5, "battery":5, "storage":128, "memory":6, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0},' +


    '{ "name":"Phone", "brand":"Essential", "imagelink":"images/OGr1dfB.jpg", 	"price":560, 	"design":5, "display":5.7, "length":142, "width":71, "processor":5, "updates":5, "camera":5, "battery":4, "storage":128, "memory":4, "sdslot":0, "simcards":1, "headphonejack":0 ,"totalscore":0},' +

    '{ "name":"G6", "brand":"LG", "imagelink":"images/814YBWa7gGL._SY879_.jpg", 	"price":324, 	"design":3, "display":5.7, "length":149, "width":72, "processor":4, "updates":4, "camera":4, "battery":4, "storage":32, "memory":4, "sdslot":1, "simcards":1, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"V30", "brand":"LG", "imagelink":"images/715GbwmYJjL._SY879_.jpg", 	"price":512, 	"design":3, "display":6, "length":152, "width":75, "processor":5, "updates":4, "camera":4, "battery":4, "storage":32, "memory":4, "sdslot":2, "simcards":2, "headphonejack":1 ,"totalscore":0},' +


    '{ "name":"Xperia XZ2", "brand":"Sony", "imagelink":"images/lis9AWg.jpg", 	"price":623, 	"design":3, "display":5.7, "length":153, "width":72, "processor":5, "updates":4, "camera":4, "battery":4, "storage":64, "memory":4, "sdslot":1, "simcards":2, "headphonejack":0 ,"totalscore":0},' +
    '{ "name":"Xperia XZ2 Compact", "brand":"Sony", "imagelink":"images/ExuzR25.jpg", 	"price":585, 	"design":3, "display":5, "length":135, "width":65, "processor":5, "updates":4, "camera":4, "battery":3, "storage":64, "memory":4, "sdslot":1, "simcards":2, "headphonejack":0 ,"totalscore":0},' +

    '{ "name":"iPhone 8 (64GB)" , "brand":"Apple", "imagelink":"images/xGEFWor.jpg", 	"price":665, 	"design":3, "display":4.7, "length":138, "width":67, "processor":5, "updates":5, "camera":5, "battery":4, "storage":64, "memory":2, "sdslot":0, "simcards":1, "headphonejack":0 ,"totalscore":0},' +
    '{ "name":"iPhone 8 (256GB)" , "brand":"Apple", "imagelink":"images/xGEFWor.jpg", 	"price":760, 	"design":3, "display":4.7, "length":138, "width":67, "processor":5, "updates":5, "camera":5, "battery":4, "storage":256, "memory":2, "sdslot":0, "simcards":1, "headphonejack":0 ,"totalscore":0},' +
    '{ "name":"iPhone 8 Plus (64GB)" , "brand":"Apple", "imagelink":"images/lq2EmJG.jpg", 	"price":783, 	"design":3, "display":5.5, "length":158, "width":78, "processor":5, "updates":5, "camera":5, "battery":4, "storage":64, "memory":3, "sdslot":0, "simcards":1, "headphonejack":0 ,"totalscore":0},' +
    '{ "name":"iPhone 8 Plus (256GB)" , "brand":"Apple", "imagelink":"images/lq2EmJG.jpg", 	"price":926, 	"design":3, "display":5.5, "length":158, "width":78, "processor":5, "updates":5, "camera":5, "battery":4, "storage":256, "memory":3, "sdslot":0, "simcards":1, "headphonejack":0 ,"totalscore":0},' +
    '{ "name":"iPhone X (64GB)" , "brand":"Apple", "imagelink":"images/UDV8YUp.jpg", 	"price":995, 	"design":5, "display":5.8, "length":144, "width":77, "processor":5, "updates":5, "camera":5, "battery":4, "storage":64, "memory":3, "sdslot":0, "simcards":1, "headphonejack":0 ,"totalscore":0},' +
    '{ "name":"iPhone X (256GB)" , "brand":"Apple", "imagelink":"images/UDV8YUp.jpg", 	"price":1150, 	"design":5, "display":5.8, "length":144, "width":77, "processor":5, "updates":5, "camera":5, "battery":4, "storage":256, "memory":3, "sdslot":0, "simcards":1, "headphonejack":0 ,"totalscore":0},' +


    '{ "name":"Moto X4", "brand":"Motorola", "imagelink":"images/61eEr3fsroL._SY879_.jpg", 	"price":289, 	"design":3, "display":5.2, "length":148, "width":73, "processor":3, "updates":5, "camera":4, "battery":5, "storage":32, "memory":3, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"Moto G6" , "brand":"Motorola", "imagelink":"images/v3WB6HT.jpg", 	"price":249, 	"design":3, "display":5.7, "length":154, "width":72, "processor":3, "updates":3, "camera":3, "battery":3, "storage":32, "memory":3, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"Moto G6 Plus" , "brand":"Motorola", "imagelink":"images/phQJx7z.jpg", 	"price":299, 	"design":3, "display":5.9, "length":160, "width":76, "processor":3, "updates":3, "camera":4, "battery":3, "storage":64, "memory":3, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"Moto G6 Play" , "brand":"Motorola", "imagelink":"images/JQ7Vnzc.jpg", 	"price":199, 	"design":3, "display":5.7, "length":154, "width":72, "processor":2, "updates":2, "camera":3, "battery":5, "storage":32, "memory":3, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"Moto E4" , "brand":"Motorola", "imagelink":"images/71r21xr50KL._SY879_.jpg", 	"price":110, 	"design":2, "display":5, "length":144, "width":73, "processor":2, "updates":2, "camera":2, "battery":2, "storage":16, "memory":2, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"Moto E4 Plus" , "brand":"Motorola", "imagelink":"images/motoe4plus.jpg", 	"price":139, 	"design":2, "display":5.5, "length":155, "width":78, "processor":2, "updates":2, "camera":2, "battery":4, "storage":16, "memory":3, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"Moto G5S" , "brand":"Motorola", "imagelink":"images/S9FO30n.jpg", 	"price":147, 	"design":3, "display":5.2, "length":150, "width":74, "processor":3, "updates":2, "camera":3, "battery":3, "storage":32, "memory":3, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"Moto G5S Plus" , "brand":"Motorola", "imagelink":"images/tdlPqFG.jpg", 	"price":200, 	"design":3, "display":5.5, "length":154, "width":76, "processor":3, "updates":2, "camera":3, "battery":3, "storage":32, "memory":3, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0},' +


    '{ "name":"Galaxy A5"     , "brand":"Samsung", 	"imagelink":"images/wrIcHyN.jpg",	"price":236, 	"design":1, "display":5.2, "length":146, "width":71, "processor":3, "updates":3, "camera":3, "battery":3, "storage":32, "memory":3, "sdslot":1, "simcards":1, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"Galaxy S9"     , "brand":"Samsung", 	"imagelink":"images/71uI%2BnAzruL._SY879_.jpg",	"price":629, 	"design":5, "display":5.8, "length":148, "width":68, "processor":5, "updates":4, "camera":5, "battery":4, "storage":64, "memory":4, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"Galaxy S9+"    , "brand":"Samsung", 	"imagelink":"images/71dd-elhT7L._SY879_.jpg",	"price":769, 	"design":5, "display":6.2, "length":158, "width":74, "processor":5, "updates":4, "camera":5, "battery":4, "storage":64, "memory":6, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"Galaxy S8 Note"    , "brand":"Samsung", 	"imagelink":"images/PQYBIud.jpg",	"price":643, 	"design":5, "display":6.3, "length":163, "width":75, "processor":5, "updates":4, "camera":5, "battery":4, "storage":64, "memory":6, "sdslot":1, "simcards":2, "headphonejack":1 ,"totalscore":0},' +
    '{ "name":"Galaxy S8"     , "brand":"Samsung", 	"imagelink":"images/6gY3U53.jpg",	"price":476, 	"design":5, "display":5.8, "length":148, "width":68, "processor":5, "updates":3, "camera":4, "battery":4, "storage":64, "memory":4, "sdslot":1, "simcards":1, "headphonejack":1 ,"totalscore":0}' +
    ']}';
  var obj;
  var listOfFilteredObjects;
  var listOfFilteredAndScoredObjects;

  function calculateAllScores() {
    obj = JSON.parse(json);
    for (var i = 0; i < obj.smartphones.length; i++) {
      obj.smartphones[i].totalscore = calculateScore(obj.smartphones[i]);
    }
  }

  calculateAllScores();

  function filterJSON() {

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

      //design
      if (document.querySelector('input[name="design-input-1"]:checked')) {
        if (obj.smartphones[i].design < document.querySelector('input[name="design-input-1"]:checked').value) {
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
      //battery
      if (document.querySelector('input[name="battery-input-2"]:checked')) {
        if (obj.smartphones[i].battery < document.querySelector('input[name="battery-input-2"]:checked').value) {
          continue;
        }
      }

      //storage
      if (document.getElementById("storageInput").options[document.getElementById("storageInput").selectedIndex].value !== "") {
        if (obj.smartphones[i].storage < document.getElementById("storageInput").options[document.getElementById("storageInput").selectedIndex].value) {
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

      listOfFilteredObjects.push(obj.smartphones[i]);
    }
  }

  function sortListOfFilteredObjects(filterType) {
    listOfFilteredAndScoredObjects = [];

    if (filterType === "Price") {
      //first score stuff
      for (var i = 0; i < listOfFilteredObjects.length; i++) {
        //then sort it into listOfFilteredAndScoredObjects
        for (var e = 0; e < listOfFilteredObjects.length; e++) {

          if (listOfFilteredAndScoredObjects.length == 0) {
            listOfFilteredAndScoredObjects.push(listOfFilteredObjects[i]);
            break;
          } else if (e == listOfFilteredAndScoredObjects.length) {
            listOfFilteredAndScoredObjects.splice(listOfFilteredAndScoredObjects.length, 0, listOfFilteredObjects[i]);
            break;
          } else if (listOfFilteredObjects[i].totalscore > listOfFilteredAndScoredObjects[e].totalscore) {
            listOfFilteredAndScoredObjects.splice(e, 0, listOfFilteredObjects[i]);
            break;
          } else if (listOfFilteredObjects[i].totalscore === listOfFilteredAndScoredObjects[e].totalscore && listOfFilteredObjects[i].price < listOfFilteredAndScoredObjects[e].price) {
            listOfFilteredAndScoredObjects.splice(e, 0, listOfFilteredObjects[i]);
            break;
          }
        }
      }
    } else if (filterType === "Body-Size") {
      for (var i = 0; i < listOfFilteredObjects.length; i++) {
        //then sort it into listOfFilteredAndScoredObjects
        for (var e = 0; e < listOfFilteredObjects.length; e++) {

          if (listOfFilteredAndScoredObjects.length == 0) {
            listOfFilteredAndScoredObjects.push(listOfFilteredObjects[i]);
            break;
          } else if (e == listOfFilteredAndScoredObjects.length) {
            listOfFilteredAndScoredObjects.splice(listOfFilteredAndScoredObjects.length, 0, listOfFilteredObjects[i]);
            break;
          } else if (listOfFilteredObjects[i].length < listOfFilteredAndScoredObjects[e].length) {
            listOfFilteredAndScoredObjects.splice(e, 0, listOfFilteredObjects[i]);
            break;
          } else if (listOfFilteredObjects[i].length === listOfFilteredAndScoredObjects[e].length && listOfFilteredObjects[i].width > listOfFilteredAndScoredObjects[e].width) {
            listOfFilteredAndScoredObjects.splice(e, 0, listOfFilteredObjects[i]);
            break;
          }
        }
      }
    } else if (filterType === "Screen-Size") {
      for (var i = 0; i < listOfFilteredObjects.length; i++) {
        //then sort it into listOfFilteredAndScoredObjects
        for (var e = 0; e < listOfFilteredObjects.length; e++) {

          if (listOfFilteredAndScoredObjects.length == 0) {
            listOfFilteredAndScoredObjects.push(listOfFilteredObjects[i]);
            break;
          } else if (e == listOfFilteredAndScoredObjects.length) {
            listOfFilteredAndScoredObjects.splice(listOfFilteredAndScoredObjects.length, 0, listOfFilteredObjects[i]);
            break;
          } else if (listOfFilteredObjects[i].display < listOfFilteredAndScoredObjects[e].display) {
            listOfFilteredAndScoredObjects.splice(e, 0, listOfFilteredObjects[i]);
            break;
          } else if (listOfFilteredObjects[i].display === listOfFilteredAndScoredObjects[e].display && listOfFilteredObjects[i].length < listOfFilteredAndScoredObjects[e].length) {
            listOfFilteredAndScoredObjects.splice(e, 0, listOfFilteredObjects[i]);
            break;
          }
        }
      }
    } else if (filterType === "Total-Score") {
      for (var i = 0; i < listOfFilteredObjects.length; i++) {
        //then sort it into listOfFilteredAndScoredObjects
        for (var e = 0; e < listOfFilteredObjects.length; e++) {

          if (listOfFilteredAndScoredObjects.length == 0) {
            listOfFilteredAndScoredObjects.push(listOfFilteredObjects[i]);
            break;
          } else if (e == listOfFilteredAndScoredObjects.length) {
            listOfFilteredAndScoredObjects.splice(listOfFilteredAndScoredObjects.length, 0, listOfFilteredObjects[i]);
            break;
          } else if (listOfFilteredObjects[i].totalscore < listOfFilteredAndScoredObjects[e].totalscore) {
            listOfFilteredAndScoredObjects.splice(e, 0, listOfFilteredObjects[i]);
            break;
          } else if (listOfFilteredObjects[i].totalscore === listOfFilteredAndScoredObjects[e].totalscore && listOfFilteredObjects[i].price < listOfFilteredAndScoredObjects[e].price) {
            listOfFilteredAndScoredObjects.splice(e, 0, listOfFilteredObjects[i]);
            break;
          }
        }
      }
    }
  }

  function calculateScore(smartphone) {
    return smartphone.design + smartphone.processor + smartphone.updates + smartphone.camera + smartphone.battery;
  }

  function deleteTable() {
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i >= 0; i--) {
      table.deleteRow(i);
    }

    rowCount = tableHead.rows[0].cells.length;
    for (var i = rowCount - 1; i > 0; i--) {
      tableHead.rows[0].deleteCell(i);
    }
  }

  function buildTableStructure(filterType) {
    var rowCount = table.rows.length;
    var cell1;
    var leftBoundary;
    var rightBoundary;
    for (var i = 1; i <= 100; i++) {
      cell1 = tableHead.rows[0].insertCell(i);
      cell1.className += "priceTiers accentColor";
      cell1.outerHTML = "<th></th>";

    }

    if (filterType === "Price") {
      tableHead.rows[0].cells[1].innerHTML = '<img class="float" style="height:24px;" src = "images/arrow.png">' +
        '<span class="float" style="color:red; padding-left: 5px;">Try Filtering</span>';
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
          var row = table.insertRow(i);
          cell1 = row.insertCell(0);
          cell1.className += "priceTiers accentColor";
          cell1.innerHTML = leftBoundary + "-" + rightBoundary;
        }
      }
    } else if (filterType === 'Body-Size' || filterType === 'Screen-Size') {
      var row = table.insertRow();
      row.insertCell(0);
    } else if (filterType === "Total-Score") {
      var row = table.insertRow();
      var row = table.rows[0];
      row.insertCell();
      for (var i = 1; i <= 25; i++) {
        cell1 = tableHead.rows[0].cells[i];
        cell1.innerHTML = i;
        row.insertCell(i);
      }


    }
  }

  function updateTable() {
    var tableType = document.getElementById("filterInput").options[document.getElementById("filterInput").selectedIndex].value;
    console.log(tableType);
    deleteTable();
    buildTableStructure(tableType);
    filterJSON();
    sortListOfFilteredObjects(tableType);
    switch (tableType) {
      case "Price":
        fillPrice();
        break;
      case "Body-Size":
      case "Screen-Size":
        fillSize();
        break;
      case "Total-Score":
        fillScore();
        break;
      default:
        fillPrice();
        break;
    }

  }


  function fillPrice() {
    for (var i = 0; i < listOfFilteredAndScoredObjects.length; i++) {
      for (var e = 0; e < 24; e++) {
        if (listOfFilteredAndScoredObjects[i].price > (e) * 50 && listOfFilteredAndScoredObjects[i].price <= (e + 1) * 50) {

          if (table.rows[e + 1].cells.length < 10) { //Only 10 phones per row should be shown
            var cell = table.rows[e + 1].insertCell(table.rows[e + 1].cells.length);
            cell.className += "smartphonecells";
            cell.innerHTML = getInnerHTMLSmartphone(e, i, "none");
            registerEventForDetails(listOfFilteredAndScoredObjects[i].name);
            break;
          }

        }
      }
    }
  }

  function fillSize() {
    for (var i = 0; i < listOfFilteredAndScoredObjects.length; i++) {
      var cell = table.rows[0].insertCell(table.rows[0].cells.length);
      cell.className += "smartphonecells";
      cell.innerHTML = getInnerHTMLSmartphone(0, i, "block");
      registerEventForDetails(listOfFilteredAndScoredObjects[i].name);
    }
  }

  function fillScore() {
    var cell;
    for (var i = 0; i < listOfFilteredAndScoredObjects.length; i++) {
      for (var e = 1; i < tableHead.rows[0].cells.length; e++) {

        if (tableHead.rows[0].cells[e].innerHTML - 1 === listOfFilteredAndScoredObjects[i].totalscore) {
          if (table.rows[0].cells[e].className === "smartphonecells") {
            cell = table.rows[0].cells[e];
          } else {
            cell = table.rows[0].insertCell(e);
            tableHead.rows[0].insertCell(e)
          }
          cell.className += "smartphonecells";
          cell.innerHTML = getInnerHTMLSmartphone(listOfFilteredAndScoredObjects[i].totalscore, i, "block");
          registerEventForDetails(listOfFilteredAndScoredObjects[i].name);
          break;
        }
      }

    }
  }

  function getInnerHTMLSmartphone(currentRow, i, isDetailsHidden) {
    var innerHtml =
      '<table>' +
      '<tr style="height:425px;">' +
      '<td style="vertical-align: bottom;">' +
      '<input type="checkbox">' +
      '<label for="toggle" id="picture' + listOfFilteredAndScoredObjects[i].name + '">' +
      '<div class="float">' +
      '<img class="qtip-img" id="picture' + listOfFilteredAndScoredObjects[i].name + '" style="vertical-align: bottom; max-height:' + document.getElementById("scaleInput").options[document.getElementById("scaleInput").selectedIndex].value * listOfFilteredAndScoredObjects[i].length + 'px;"" src="' + listOfFilteredAndScoredObjects[i].imagelink + '">' +
      '</td>' +
      '</tr>' +
      '</table>' +
      '<p class="smartphone-name">' + listOfFilteredAndScoredObjects[i].brand + ' ' + listOfFilteredAndScoredObjects[i].name + '</p>' +

      '</label>' +
      '<div class="detailwindow float" id="hiddenpicture' + listOfFilteredAndScoredObjects[i].name + '" style ="display:' + isDetailsHidden + '" >' +
      '<h3><span style="font-weight: bold;">' + listOfFilteredAndScoredObjects[i].display + '"</span><span style="float:right; font-weight: bold;" class="accentColor">' + listOfFilteredAndScoredObjects[i].price + '€</span></h3>' +
      '<h3>' + listOfFilteredAndScoredObjects[i].width + ' * ' + listOfFilteredAndScoredObjects[i].length + 'mm</h3>' +
      '<br>' +
      '<h3 >Design: <span style="float:right";>' + listOfFilteredAndScoredObjects[i].design + '</span></h3>' +
      '<h3 >Processor: <span style="float:right";>' + listOfFilteredAndScoredObjects[i].processor + '</span></h3>' +
      '<h3 >Software: <span style="float:right">' + listOfFilteredAndScoredObjects[i].updates + '</span></h3>' +
      '<h3 >Camera: <span style="float:right">' + listOfFilteredAndScoredObjects[i].camera + '</span></h3>' +
      '<h3 >Battery: <span style="float:right">' + listOfFilteredAndScoredObjects[i].battery + '</span></h3>' +
      '<hr>' +
      '<h3 ><span style="float:right; color: green; font-weight: bold;">' + listOfFilteredAndScoredObjects[i].totalscore + '</span></h3>' +
      '<h3 ><span style="float:right; color: white;">_______________________</span></h3>' +

      '</div> ';


    return innerHtml;
  }

  function registerEventForDetails(name) {
    document.getElementById('picture' + name).addEventListener('click', function(e) {
      if (document.getElementById('hidden' + e.target.parentElement.parentElement.id).style.display === "none") {
        document.getElementById('hidden' + e.target.parentElement.parentElement.id).style.display = "block";
      } else {
        document.getElementById('hidden' + e.target.parentElement.parentElement.id).style.display = "none";
      }
    });
  }

  document.getElementById("size_minimum_1").addEventListener("input", function() {
    updateTable();
  });


  //Set Scale Smartphones to true when case "Body-Size": oder case "Screen-Size":
  document.getElementById("filterInput").addEventListener("input", function() {
    switch (document.getElementById("filterInput").options[document.getElementById("filterInput").selectedIndex].value) {
      case "Price":
        break;
      case "Body-Size":
        document.getElementById("scaleInput").value = "2.6";
        break;
      case "Screen-Size":
        document.getElementById("scaleInput").value = "2.6";
        break;
      case "Total-Score":
        break;
      default:
    }
    console.log("DSRIN");
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