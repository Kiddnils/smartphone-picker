window.onload = function() {

  var tableHead = document.getElementById("myTable").getElementsByTagName('thead')[0];
  var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

  init();

  var obj;
  var listOfFilteredObjects;
  var listOfFilteredAndScoredObjects;



  function init() {
    loadJSON(function(response) {
      // Parse JSON string into object
      obj = JSON.parse(response);
      calculateAllScores();
      buildTableStructure();
      updateTable();
    });
  }

  function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'scripts/smartphones.js', true); // Replace 'my_data' with the path to your file

    xobj.onreadystatechange = function() {
      if (xobj.readyState == 4 && xobj.status == 200) {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }



  function calculateAllScores() {
    console.log(obj);
    for (var i = 0; i < obj.smartphones.length; i++) {
      obj.smartphones[i].totalscore = calculateScore(obj.smartphones[i]);
    }
  }



  function filterJSON() {

    listOfFilteredObjects = [];
    for (var i = 0; i < obj.smartphones.length; i++) {

      //prize not 0
      if (obj.smartphones[i].price_de === 0) {
        continue;
      }



      //prize minimum
      if (document.getElementById("price_minimum_1").value !== "") {
        if (obj.smartphones[i].price_de < document.getElementById("price_minimum_1").value) {
          continue;
        }
      }

      //prize maximum
      if (document.getElementById("price_maximum_1").value !== "") {
        if (obj.smartphones[i].price_de > document.getElementById("price_maximum_1").value) {
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

    if (filterType === "price") {
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
          } else if (listOfFilteredObjects[i].totalscore === listOfFilteredAndScoredObjects[e].totalscore && listOfFilteredObjects[i].price_de < listOfFilteredAndScoredObjects[e].price_de) {
            listOfFilteredAndScoredObjects.splice(e, 0, listOfFilteredObjects[i]);
            break;
          }
        }
      }
    } else if (filterType === "length") {
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
    } else if (filterType === "display") {
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
    } else if (filterType === "totalscore") {
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
          } else if (listOfFilteredObjects[i].totalscore === listOfFilteredAndScoredObjects[e].totalscore && listOfFilteredObjects[i].price_de < listOfFilteredAndScoredObjects[e].price_de) {
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

    if (filterType === "price") {
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
    } else if (filterType === 'length' || filterType === 'display') {
      var row = table.insertRow();
      row.insertCell(0);
    } else if (filterType === "totalscore") {
      var row = table.insertRow();
      row.insertCell(0);
    }


  }


  function updateTable() {
    var tableType = document.getElementById("filterInput").options[document.getElementById("filterInput").selectedIndex].value;
    deleteTable();
    buildTableStructure(tableType);
    filterJSON();
    sortListOfFilteredObjects(tableType);
    switch (tableType) {
      case "price":
        fillPrice(tableType);
        break;
      case "length":
      case "display":
        fillHorizontally(tableType);
        break;
      case "totalscore":
        fillHorizontally(tableType);
        break;
      default:
        fillPrice(tableType);
        break;
    }

  }


  function fillPrice(type) {
    for (var i = 0; i < listOfFilteredAndScoredObjects.length; i++) {
      for (var e = 0; e < 24; e++) {
        if (listOfFilteredAndScoredObjects[i].price_de > (e) * 50 && listOfFilteredAndScoredObjects[i].price_de <= (e + 1) * 50) {

          if (table.rows[e].cells.length < 10) { //Only 10 phones per row should be shown
            var cell = table.rows[e].insertCell(table.rows[e].cells.length);
            cell.className += "smartphonecells";
            cell.innerHTML = getInnerHTMLSmartphone(i, "none");
            registerEventForDetails(listOfFilteredAndScoredObjects[i].name);
            break;
          }

        }
      }
    }
  }


  function fillHorizontally(type) {
    var cell;
    var cell1;
    for (var i = 0; i < listOfFilteredAndScoredObjects.length; i++) {
      cell1 = tableHead.rows[0].cells[i + 1];
      cell1.innerHTML = i;
      cell1.innerHTML = listOfFilteredAndScoredObjects[i][type];

      cell = table.rows[0].insertCell(table.rows[0].cells.length);
      cell.className += "smartphonecells";
      cell.innerHTML = getInnerHTMLSmartphone(i, "block");
      registerEventForDetails(listOfFilteredAndScoredObjects[i].name);
    }
  }

  function getColumn(type) {
    switch (expression) {
      case expression:

        break;
      default:

    }
  }

  function getInnerHTMLSmartphone(i, isDetailsHidden) {
    var innerHtml =
      '<table>' +
      '<tr style="height:425px;">' +
      '<td style="vertical-align: bottom;">' +
      '<input type="checkbox">' +
      '<label for="toggle" id="picture' + listOfFilteredAndScoredObjects[i].name + '">' +

      '<img class="qtip-img" id="picture' + listOfFilteredAndScoredObjects[i].name + '" style="vertical-align: bottom; max-height:' + document.getElementById("scaleInput").options[document.getElementById("scaleInput").selectedIndex].value * listOfFilteredAndScoredObjects[i].length + 'px;"" src="' + listOfFilteredAndScoredObjects[i].imagelink + '">' +
      '</td>' +
      '</tr>' +
      '</table>' +
      '<p class="smartphone-name">' + listOfFilteredAndScoredObjects[i].brand + ' ' + listOfFilteredAndScoredObjects[i].name + '</p>' +
      '</label>' +
      '<div class="detailwindow float" id="hiddenpicture' + listOfFilteredAndScoredObjects[i].name + '" style ="display:' + isDetailsHidden + '" >' +
      '<h3><span style="font-weight: bold;">' + listOfFilteredAndScoredObjects[i].display + '"</span><span style="float:right; font-weight: bold;" class="accentColor">' + listOfFilteredAndScoredObjects[i].price_de + '€</span></h3>' +
      '<h3>' + listOfFilteredAndScoredObjects[i].width + ' * ' + listOfFilteredAndScoredObjects[i].length + 'mm</h3>' +
      '<br>' +
      '<div style="width:20px; height:20px; float:left;"><img style="max-width:20px; max-height:20px; float:left;" src="images/ram_icon.png"></div>' +
      '<h3 style="float:left;">' + listOfFilteredAndScoredObjects[i].memory + 'GB</h3>' +

      '<div style="width:20px; height:20px; float:right;"><img style="max-width:20px; max-height:20px; float:right;" src="images/charging-battery.png"></div>' +
      '<h3 style="float:right;">' + listOfFilteredAndScoredObjects[i].batterysize + '</h3>' +
      '<div style="clear:both;"></div>' +
      '<div style="width:20px; height:20px; float:left;"><img style="max-width:20px; max-height:20px; " src="images/sd_storage.png"></div>' +
      '<h3 style="float:left;">' + listOfFilteredAndScoredObjects[i].storage + 'GB</h3>' +
      '<br>' +
      '<br>' +
      '<h3 >Design: <span style="float:right";>' + listOfFilteredAndScoredObjects[i].design + '</span></h3>' +
      '<h3 >Processor: <span style="float:right";>' + listOfFilteredAndScoredObjects[i].processor + '</span></h3>' +
      '<h3 >Software: <span style="float:right">' + listOfFilteredAndScoredObjects[i].updates + '</span></h3>' +
      '<h3 >Camera: <span style="float:right">' + listOfFilteredAndScoredObjects[i].camera + '</span></h3>' +
      '<h3 >Battery: <span style="float:right">' + listOfFilteredAndScoredObjects[i].battery + '</span></h3>' +
      '<hr>' +
      '<h3 ><span style="float:right; color: green; font-weight: bold;">' + listOfFilteredAndScoredObjects[i].totalscore + '</span></h3>' +
      '<h3 ><span style="float:right; color: white;">_______________________</span></h3>' +
      '<div id="wrapper">' +
      '<span class="a-button a-button-primary">' +
      ' <a target="_blank" href="' + listOfFilteredAndScoredObjects[i].amazon_de + '" style="text-decoration:none;">' +
      '<span class="a-button-inner">' +
      '<img src="images/Amazon-Favicon-64x64.png" class="a-icon a-icon-shop-now">' +
      '<input class="a-button-input" type="submit" value="Add to cart">' +
      '<span class="a-button-text">Shop Now</span>' +
      '</span>' +
      ' </a>' +
      '</span>' +
      '</div> ' +
      ' </div>';


    return innerHtml;
  }

  function registerEventForDetails(name) {
    document.getElementById('picture' + name).addEventListener('click', function(e) {
      if (document.getElementById('hidden' + e.target.id).style.display === "none") {
        document.getElementById('hidden' + e.target.id).style.display = "block";
      } else {
        document.getElementById('hidden' + e.target.id).style.display = "none";
      }
    });
  }

  document.getElementById("size_minimum_1").addEventListener("input", function() {
    updateTable();
  });


  //Set Scale Smartphones to true when case "length": oder case "display":
  document.getElementById("filterInput").addEventListener("input", function() {
    switch (document.getElementById("filterInput").options[document.getElementById("filterInput").selectedIndex].value) {
      case "price":
        break;
      case "length":
        document.getElementById("scaleInput").value = "2.6";
        break;
      case "display":
        document.getElementById("scaleInput").value = "2.6";
        break;
      case "totalscore":
        break;
      default:
    }
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




}