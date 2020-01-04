// Use D3 to select the table body
<table class="table">

</table>
// Use D3 to select the table

// Use D3 to set the table class to `table table-striped`
<table class="table table-striped">


</table>
// Loop through an array of grades and build the entire table body from scratch
var grades = [["Malcolm", 80], ["Zoe", 85], ["Kaylee", 99], ["Simon", 99], ["Wash", 79]];
var data = table.find('tr')

for (var i = 0; i <= data.size() - 1; i = i + 1) {
    dataArray.push(data[i].textContent, data[i + 1}.textContent, data[i + 2].textContent);
}