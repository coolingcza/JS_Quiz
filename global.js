var question_obj = {q1:
  {"a1":1, "a2":0, "a3":0}
};

var points = 0

for (var q in question_obj) {
  var answer_strings = []
  for (var a in question_obj[q]) {
    answer_strings.push(a);
  } 
  full_answer_string = answer_strings.join("\n");
  // alert(q + "?\n" + full_answer_string);
  var user_answer = prompt(q + "?\n" + full_answer_string)

  points += question_obj[q][user_answer]

}

console.log(points)
// for (var key in p) {
//   if (p.hasOwnProperty(key)) {
//     alert(key + " -> " + p[key]);
//   }
// }