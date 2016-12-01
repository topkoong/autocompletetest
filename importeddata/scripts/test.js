var xmlhttp = new XMLHttpRequest();
var url = "file://Users/toppy/Downloads/topkoong.github.io/importeddata/scripts/vocablistfull.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status === 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(data) {
    //var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
      tr = $("<tr/>");
      tr.append("<td>" + data[i].id+ "</td>");
      tr.append("<td>" + data[i].latin + "</td>");
      tr.append("<td>" + data[i].lesson + "</td>");
      tr.append("<td>" + data[i].type + "</td>");
      tr.append("<td>" + data[i].derivative + "</td>");
      tr.append("<td>" + data[i].tense + "</td>");
      $('table').append(tr);
    }
    document.getElementById("id01").innerHTML = out;
}
