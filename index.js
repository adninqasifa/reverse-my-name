// Reverse my Name
// Exercise in Tech Interview Glints Academy

function reverseMyName(str) {
  // put your code here
  const reverseName = str.split('').reverse().join('');
  return reverseName;
}

const Test = (fun, result) => console.log(reverseMyName(fun) === result)

Test("A", "A")
Test("Michael Jackson","noskcaJ leahciM")
Test("Alvian Zachry Faturrahman", "namharrutaF yrhcaZ naivlA")
Test("", "")

//console.log(reverseMyName("Michael Jackson"));
//console.log(reverseMyName("Alvian Zachry Faturrahman"));

// DONE
