// from data.js
// Initialize variables
var tableData = data;

// Create reference elements of the DOM
var $tbody = document.querySelector("tbody");
var $dateTimeInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#filter-btn");
var $searchBtn1 = document.querySelector("#search1");
var $searchBtn2 = document.querySelector("#search2");
var $searchBtn3 = document.querySelector("#search3");
var $searchBtn4 = document.querySelector("#search4");

// Add search button event listener
$searchBtn.addEventListener("click", handleFilterButtonClick);

// renderTable function
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < tableData.length; i++) {

        var ufo = tableData[i];
        var observations = Object.keys(ufo);

        var $row = $tbody.insertRow(i);

        for (var j = 0; j < observations.length; j++) {

            var observation = observations[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = ufo[observation];
        }
    }
}

// Search Button Function 
function handleSearchButtonClick() {
    var date = $dateInput.value.trim();

    tableData = dataSet.filter(function(ufo) {
        var formatDate = ufo.dateTime.toLowerCase();

        return formatDate === date;
    });

    $(document).ready(function () {
        var firstObservation = 0;
        var rowSize = 50;
        var tableRows = $("#pagetable tbody tr");
            e.preventDefault();
            if ($(this).attr("id") == "next") {
                if (firstObservation + rowSize <= tableRows.length) {
                    firstObservation += rowSize;)
                } else {
                if (firstObservation -= rowSize;)
                }
            paginate(firstObservation, rowSize);
        }
    });

    var paginate = function(startAt, rowSize) {
        var endAt = startAt + rowSize -1;
            $(tableRows).each(function(index) {
                if(index >+ startAt && index <= endAt) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
        paginate(firstRecord, rowSize);
    });

    renderTable();
}

function handleSearchButton1Click() {
    var city = $cityInput.value.trim();

    tableData = dataSet.filter(function(ufo) {
        var formatCity = ufo.city.toLowerCase();

        return formatCity === city;
    });

    $(document).ready(function () {
        var firstObservation = 0;
        var rowSize = 50;
        var tableRows = $("#pagetable tbody tr");
            e.preventDefault();
            if ($(this).attr("id") == "next") {
                if (firstObservation + rowSize <= tableRows.length) {
                    firstObservation += rowSize;)
                } else {
                if (firstObservation -= rowSize;)
                }
            paginate(firstObservation, rowSize);
        }
    });

    var paginate = function(startAt, rowSize) {
        var endAt = startAt + rowSize -1;
            $(tableRows).each(function(index) {
                if(index >+ startAt && index <= endAt) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
        paginate(firstRecord, rowSize);
    });

    renderTable();
}


function handleSearchButton2Click() {
    var state = $stateInput.value.trim();

    tableData = dataSet.filter(function(ufo) {
        var formatState = ufo.state.toLowerCase();

        return formatState === state;
    });

    $(document).ready(function () {
        var firstObservation = 0;
        var rowSize = 50;
        var tableRows = $("#pagetable tbody tr");
            e.preventDefault();
            if ($(this).attr("id") == "next") {
                if (firstObservation + rowSize <= tableRows.length) {
                    firstObservation += rowSize;)
                } else {
                if (firstObservation -= rowSize;)
                }
            paginate(firstObservation, rowSize);
        }
    });

    var paginate = function(startAt, rowSize) {
        var endAt = startAt + rowSize -1;
            $(tableRows).each(function(index) {
                if(index >+ startAt && index <= endAt) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
        paginate(firstRecord, rowSize);
    });

    renderTable();
}


function handleSearchButton3Click() {
    var country = $countryInput.value.trim();

    tableData = dataSet.filter(function(ufo) {
        var formatCountry = ufo.country.toLowerCase();

        return formatCountry === country;
    });

    $(document).ready(function () {
        var firstObservation = 0;
        var rowSize = 50;
        var tableRows = $("#pagetable tbody tr");
            e.preventDefault();
            if ($(this).attr("id") == "next") {
                if (firstObservation + rowSize <= tableRows.length) {
                    firstObservation += rowSize;)
                } else {
                if (firstObservation -= rowSize;)
                }
            paginate(firstObservation, rowSize);
        }
    });

    var paginate = function(startAt, rowSize) {
        var endAt = startAt + rowSize -1;
            $(tableRows).each(function(index) {
                if(index >+ startAt && index <= endAt) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
        paginate(firstRecord, rowSize);
    });

    renderTable();
}


function handleSearchButton4Click() {
    var shape = $shapeInput.value.trim();

    tableData = dataSet.filter(function(ufo) {
        var formatShape = ufo.shape.toLowerCase();

        return formatShape === shape;
    });

    $(document).ready(function () {
        var firstObservation = 0;
        var rowSize = 50;
        var tableRows = $("#pagetable tbody tr");
            e.preventDefault();
            if ($(this).attr("id") == "next") {
                if (firstObservation + rowSize <= tableRows.length) {
                    firstObservation += rowSize;)
                } else {
                if (firstObservation -= rowSize;)
                }
            paginate(firstObservation, rowSize);
        }
    });

    var paginate = function(startAt, rowSize) {
        var endAt = startAt + rowSize -1;
            $(tableRows).each(function(index) {
                if(index >+ startAt && index <= endAt) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
        paginate(firstRecord, rowSize);
    });

    renderTable();
}

renderTable();