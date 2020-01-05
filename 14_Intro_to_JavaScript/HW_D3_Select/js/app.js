// Use D3 to select the table body

var tbody = d3.select("tbody");

// Use D3 to select the table

var table = d3.select("data-table");

// Use D3 to set the table class to `table table-striped`

table.attr("class", "table table-striped");

// Loop through an array of grades and build the entire table body from scratch
var grades = [
    { name: "Malcolm", score: 80 }, 
    { name: "Zoe", score: 85 }, 
    { name: "Kaylee", score: 99 }, 
    { name: "Simon", score: 99 }, 
    { name: "Wash", score: 79 }
];

for(var i = 0; i < grades.length; i++) {

    var student = grades.name;
    row = tbody.append("tr")
    row.append("td").text(student)

        
    for(var j = 0; j < grades.length; j++) {

        var score = grades.score;
        row = tbody.append("tr");
        row.append("td").text(score)
    }
}

// var row = tbody.append("tr");
// var row_2 = tbody.append("tr");
// var row_3 = tbody.append("tr");
// var row_4 = tbody.append("tr");
// var row_5 = tbody.append("tr");
// row.append("td").text(grades[0][0]);
// row.append("td").text(grades[0][1]);
// row_2.append("td").text(grades[1][0]);
// row_2.append("td").text(grades[1][1]);
// row_3.append("td").text(grades[2][0]);
// row_3.append("td").text(grades[2][1]);
// row_4.append("td").text(grades[3][0]);
// row_4.append("td").text(grades[3][1]);
// row_5.append("td").text(grades[4][0]);
// row_5.append("td").text(grades[4][1]);

