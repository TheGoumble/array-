let studentNames = ["Dave", "Bruh", "Some Guy", "Cool Name"]
let teachers = [
  { name: "Damian", teaches: "arrays, javascript, mongodb" },
  { name: "jonathan", subjects: "array, javascript" },
]

// .sort() does not sort the array but returns a sorted array
const sortedStudentsNames = studentNames.sort()
console.log(sortedStudentsNames)

// .filter()
// const ages = [11, 17, 20, 42, 45]
// const adults = ages.filter(age => age >= 18)
// [20, 42, 45]

const filteredStudentNames = studentNames.filter(
  // function (student){
  //     return student === "Bruh"
  // }
  // (student) => {
  //     return student === "Bruh"
  // }
  //(student) => student === "Bruh"

  (student) => true // don't do this
)
console.log(filteredStudentNames)

// const StudentNames = studentNames.filter((student) => true)

// .find() Returns the first element matching criteria
const Bruh = studentNames.find((student) => student === "Bruh")

console.log(Bruh)

// .some() Returns true if some element matches criteria
const someBruh = studentNames.some((student) => student === "Bruh")
console.log("Some Bruhs?", someBruh)

// .every() Returns true if every elemnt matches criteria
const everyBruh = studentNames.every((student) => student === "Bruh")
console.log("Everyone's a Bruhs?", everyBruh)

// .forEach() Iterates over each element
studentNames.forEach((student) => {
  console.log(student)
})

// .map() Transforms an array to a new form
const justTheNames = teachers.map((teacher) => {
  return teacher.name
})
console.log(justTheNames)

// .reduce() able to combine array into single value

let age = [11, 17, 42, 45, 30]
let elderst = ages.reduce((aggregator, age) => {
  return age > aggregator ? age : aggregator
}, 0)

let total = 0
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i]
}
// this does the same at the code above
total = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber,
  0
)
console.log(total)
