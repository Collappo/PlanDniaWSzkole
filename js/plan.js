plan = {
    poniedzialek: [
        "",
        "Pracownia apl. int.",
        "Pracownia apl. int.",
        "Biologia",
        "Fizyka",
        "Język polski",
        "Historia",
        "Język niemiecki",
        "Wf"
    ],        
    wtorek: [
        "Religia",
        "Religia",
        "Biznes i zarządzanie",
        "Wf",
        "Wf",
        "Podstawy programowania",
        "Matma",
        "Historia i teraz.",
        ""
    ],
    sroda: [
        "Informatyka",
        "Pracownia proj. oprog.",
        "Język angielski",
        "Matematyka",
        "Język polski",
        "Biologia",
        "Programowanie apl. int.",
        "Pracownia baz danych",
        ""
    ],
    
    czwartek: [
        "",
        "Język polski",
        "Podstawy programowania",
        "Historia",
        "Program. apl. int.",
        "Projekt. i admin. baz. dan.",
        "Historia",
        "Fizyka",
        "Zajęcia z wychowawcą"
    ],
    
    piatek: [
        "Projektowanie. oprog.",
        "Projekowanie. oprog.",
        "Pracownia podst. prog.",
        "Pracownia podst. prog.",
        "Język niemiecki",
        "Język angielski",
        "Matematyka użyteczna",
        "",
        ""
    ]
}

const lessionNameBoxes = document.getElementsByClassName("lession-name")

let weekday = new Date().getDay() - 1
function updateTimetable() {
    for (let i = 0; i < parseInt(lessionNameBoxes.length); i++){
        lessionNameBoxes[i].innerHTML = plan[weekday][i]
    }
}

updateTimetable()
