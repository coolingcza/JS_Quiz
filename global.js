
var question_obj = {
  "Which spice is extremely poisonous if injected intraveniously?": {
                   "nutmeg": 1,
                   "cardamon": 0,
                   "cinnamon": 0,
                   "allspice": 0 }, 
     
  "What percentage of pumpkins are used for jack-o-lanterns in the US?": {
                   "40%": 0,
                   "60%": 0,
                   "75%": 0,
                   "99%": 1 },

  "What is the alcohol content of absinthe?": {
                   "18%": 0,
                   "68%": 1,
                   "38%": 0,
                   "8%": 0 },
                  
  "Where does banana oil come from?": {
                   "bananas": 0,
                   "Hawaii": 0,
                   "petroleum": 1,
                   "monkey poo": 0 },               

  "One ragweed plant can release how many grains of pollen?": {
                   "1 billion": 1,
                   "1 million": 0,
                   "100,000": 0,
                   "10,000": 0 }
};           


var points = 0

for (var q in question_obj) {
  var answer_strings = []
  for (var a in question_obj[q]) {
    answer_strings.push(a);
  } 
  full_answer_string = answer_strings.join("\n");
 
  var user_answer = prompt(q + "?\n" + full_answer_string)

  points += question_obj[q][user_answer]

}

console.log(points)

