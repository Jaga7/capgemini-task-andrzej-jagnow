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

const createCardsListContainer = () => {
  const cardsListContainer = document.createElement("div")
  cardsListContainer.classList.add("cardsListContainer")
  document.body.append(cardsListContainer)
  return cardsListContainer
}

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

const createStudentNameContainer = (studentName, studentLastName) => {
  const studentNameContainer = document.createElement("div")
  studentNameContainer.classList.add("studentNameContainer")

  const studentNameAndSurname = document.createElement("p")
  studentNameAndSurname.innerText = `${studentName} ${studentLastName}`
  studentNameAndSurname.classList.add("studentNameAndSurname")
  studentNameContainer.appendChild(studentNameAndSurname)
  return studentNameContainer
}

const giveStudentAttendanceNumber = (studentMarks) => {
  return studentMarks.reduce(
    (previousValue, currentValue) =>
      currentValue !== null ? previousValue + 1 : previousValue,
    0
  )
}

const createAverageMark = (studentMarks, studentAttendanceNumber) => {
  const averageMarkNumber =
    studentMarks.reduce(
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
  return averageMark
}

const createStudentsLayout = (students) => {
  // 5 or less - red
  const cardsListContainer = createCardsListContainer()

  for (let student of students) {
    const card = createCard()

    cardsListContainer.appendChild(card)

    const studentNameContainer = createStudentNameContainer(
      student.name,
      student.lastName
    )
    card.appendChild(studentNameContainer)

    const studentAttendanceNumber = giveStudentAttendanceNumber(student.marks)
    const studentAttendance = document.createElement("p")
    studentAttendance.innerText = `visited lectures: ${studentAttendanceNumber}`
    card.appendChild(studentAttendance)

    const averageMark = createAverageMark(
      student.marks,
      studentAttendanceNumber
    )

    card.appendChild(averageMark)
  }
}

createStudentsLayout(students)
