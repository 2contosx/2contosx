

let departureDateEntry = prompt("digite a data de partida(DD/MM/AAAA)")
console.log(departureDateEntry)

let DepartureDate = moment(departureDateEntry, "DD/MM/AAAA")

let Today = moment()

let DateDiff = Today - DepartureDate

let choseOption = prompt("escolha como gostaria de exibir o tempo de partida\n1- Segundos \n2- Minutos \n3- Horas \n4- Dias")

if (choseOption == "1"){
    let SecondsOfDeparture = Math.round(datediff / 1000)
    alert("Tempo de vôo: " + SecondsOfDeparture + "Segundos")
} else if(choseOption == "2"){
    let MinutesOfDeparture = Math.round(DateDiff / 1000 / 60)
    alert("Tempo de vôo" + MinutesOfDeparture + "Minutos")
}
 else if(choseOption == "3"){
    let HoursOfDeparture = Math.round(DateDiff / 1000 / 60 / 60)
    alert("Tempo de vôo" + HoursOfDeparture + "Horas")
}
else if(choseOption == "4"){
    let DaysOfDeparture = Math.round(DateDiff / 1000 / 360 / 24)
    alert("Tempo de vôo " + DaysOfDeparture + " Dias")
} else{
    alert("Opção invalida")
}
