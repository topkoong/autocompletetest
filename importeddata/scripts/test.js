$(document).ready(function() {

            // $("#driver").click(function(event){
            //    $.getJSON('scripts/test.json', function(jd) {
            //       $('#stage').html('<p> Name: ' + jd.name + '</p>');
            //       $('#stage').append('<p>Age : ' + jd.age+ '</p>');
            //       $('#stage').append('<p> Sex: ' + jd.sex+ '</p>');
            //    });
            // });

              $.getJSON('scripts/vocablistfull.json', function(data) {
                              // Loop through data.report instead of data
                for (var i = 0; i < data.length; i++) {
                  var tr = $('<tr/>');
                  $(tr).append("<td>" + data[i].id + "</td>");
                  $(tr).append("<td>" + data[i].latin + "</td>");
                  $(tr).append("<td>" + data[i].lesson + "</td>");
                  $(tr).append("<td>" + data[i].type + "</td>");
                  $(tr).append("<td>" + data[i].english+ "</td>");
                  $(tr).append("<td>" + data[i].derivative + "</td>");
                  $(tr).append("<td>" + data[i].sentence + "</td>");
                  $(tr).append("<td>" + data[i].tense + "</td>");
                  $('.rwd-table').append(tr);
                }
              });

}); // end of ready function
//
// $(document).ready(function() {
//   // Using the JSON format from your question
//   // var data = {
//   //   "report": [{
//   //       "Mes": "Abril",
//   //       "Dia": "13",
//   //       "Local": "Lisboa",
//
//   $.getJSON('result.json', function(jd) {
//                  $('#stage').html('<p> Name: ' + jd.name + '</p>');
//                  $('#stage').append('<p>Age : ' + jd.age+ '</p>');
//                  $('#stage').append('<p> Sex: ' + jd.sex+ '</p>');
//   });
//   //
//   //   }]
//   $.getJSON("vocablistfull.json", function(data) {
//                   // Loop through data.report instead of data
//                   for (var i = 0; i < data.length; i++) {
//                     var tr = $('<tr/>');
//                     // Indexing into data.report for each td element
//                     $(tr).append("<td>" + data.report[i].id + "</td>");
//                     $(tr).append("<td>" + data.report[i].latin + "</td>");
//                     $(tr).append("<td>" + data.report[i].lesson + "</td>");
//                     $('.table1').append(tr);
//                   }
//   });
//   //};
//
// });
//
//
//
//
//         // var tr = $("<tr/>");
//         // tr.append("<td>" + data[i].id+ "</td>");
//         // tr.append("<td>" + data[i].latin + "</td>");
//         // tr.append("<td>" + data[i].lesson + "</td>");
//         // tr.append("<td>" + data[i].type + "</td>");
//         // tr.append("<td>" + data[i].derivative + "</td>");
//         // tr.append("<td>" + data[i].tense + "</td>");
//         // $('.id01').append(tr);
