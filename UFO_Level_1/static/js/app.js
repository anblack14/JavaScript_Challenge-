// from data.js
// Initialize variables
var tableData = data;

var count = 0;

// Create reference elements of the DOM
var $tbody = document.querySelector("tbody");
var $dateTimeInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $filterBtn = document.querySelector("#filter");
var $pages = document.querySelector("#pages");
var $loadBtn = document.querySelector("#load");
var $nextBtn = document.querySelector("#next");
var $prevBtn = document.querySelector("#prev");

// Add event listeners 
$filterBtn.addEventListener("click", handleFilterButtonClick);
$loadBtn.addEventListener("click", handleReloadButtonClick);
$nextBtn.addEventListener("click", handleNextButtonClick);
$prevBtn.addEventListener("click", handlePrevButtonClick);
$pages.addEventListener("change", handlePageChange);

// Define Event Handler Function 
// Next Button
function handleNextButtonClick() {
    count++;
    renderTable();
}

// Prev Button 
function handlePrevButtonClick() {
    count --;
    renderTable();
}

// Filter Button 
function handleFilterButtonClick() {
    var filterDate = $dateTimeInput.value.trim();
    var filterCity = $cityInput.value.trim().toLowerCase();
    var filterState = $stateInput.value.trim().toLowerCase();
    var filterCountry = $countryInput.value.trim().toLowerCase();
    var filterShape = $shapeInput.value.trim().toLowerCase();

    if (filterDate != '') {
        filteredData = filteredData.filter(function (date) {
            var dataDate = date.datetime;
            retur dataDate === filterDate;
        });

    }

    if (filterCity !== "") {
        filteredData = filteredData.filter(function (city) {
            var dataCity = city.city;
            return dataCity === filterCity;
        });
    }

    if (filterState !== "") {
        filteredData = filteredData.filter(function (state) {
            var dataState = state.state;
            return dataState === filterState;
        });
    }

    if (filterCountry !=="") {
        filteredData = filteredData.filter(function (country) {
            var dataCountry = country.country;
            return dataCountry === filterCountry;
        });
    }

    if (filterShape !== "") {
        filteredData = filteredData.filter(function (shape) {
            var dataShape = shape.shape;
            return dataShape === filterShape;
        });
    }

    renderTable();
}

// Reload Button 
function handleReloadButtonClick() {
    count = 0;
    filteredDAta = dataSet;
    $dateTimeInput.value = '';
    $cityInput.value = '';
    $stateInput.value = '';
    $countryInput.value = '';
    $shapeInput.value = '';

    renderTable();
}

// Define Page Change Function 
function handlePageChange() {
    renderTable();
}

// Define Render Table function 
function renderTable() {
    $tbody.innerHTML = '';

    var pages = Number(document.getElementById("pages").value);

    var start = count * pages + 1;
    var end = start + pages - 1;
    var btn;

    // State of Next button 
    if (end > filteredData.length) {
        end = filteredDAta.length;
        btn = document.getElementById("next");
        btn.disabled = true;
    }
    else {
        btn = document.getElementById("next");
        btn.disabled = false;
    }

    // State of Previous Button 
    if (start == 1) {
        btn = document.getElementById("prev");
        btn.disabled = true;
    }
    else {
        btn = document.getElementById("prev");
        btn.disabled = true;
    }
}

renderTable();
