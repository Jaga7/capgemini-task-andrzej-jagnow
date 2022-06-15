const students = [
  {
    name: "Martin",

    lastName: "Lant",

    marks: [9, 8, null, 7, 5],
  },

  {
    name: "Francesco",

    lastName: "Portus",

    marks: [5, 4, 2, 3, 2],
  },

  {
    name: "Bill",

    lastName: "Merdoc",

    marks: [10, null, null, null, 10],
  },

  {
    name: "John",

    lastName: "Entman",

    marks: [9, 8, 9, 7, 5],
  },
]

// 5 or less - red
const cardsListContainer = document.createElement("div")
cardsListContainer.classList.add("cardsListContainer")
document.body.append(cardsListContainer)

const createCard = () => {
  const card = document.createElement("div")
  card.classList.add("card")
  card.addEventListener("click", function () {
    card.focus()
    if (document.querySelector(".focus")) {
      document.querySelector(".focus").classList.remove("focus")
    }
    card.classList.add("focus")
  })
  return card
}

for (let student of students) {
  const card = createCard()

  cardsListContainer.appendChild(card)

  const studentNameContainer = document.createElement("div")
  studentNameContainer.classList.add("studentNameContainer")

  const studentNameAndSurname = document.createElement("p")
  studentNameAndSurname.innerText = `${student.name} ${student.lastName}`
  studentNameAndSurname.classList.add("studentNameAndSurname")
  studentNameContainer.appendChild(studentNameAndSurname)
  card.appendChild(studentNameContainer)

  const studentAttendanceNumber = student.marks.reduce(
    (previousValue, currentValue) =>
      currentValue !== null ? previousValue + 1 : previousValue,
    0
  )

  const studentAttendance = document.createElement("p")
  studentAttendance.innerText = `visited lectures: ${studentAttendanceNumber}`
  card.appendChild(studentAttendance)

  const averageMarkNumber =
    student.marks.reduce(
      (previousValue, currentValue) => currentValue + previousValue,
      0
    ) / studentAttendanceNumber

  const averageMark = document.createElement("p")
  averageMark.innerText = `average mark: ${averageMarkNumber}`
  if (averageMarkNumber <= 5) {
    averageMark.style.border = `2px solid red`
  } else {
    averageMark.style.border = `2px solid green`
  }
  card.appendChild(averageMark)
}
