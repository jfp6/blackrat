const tableBody = document.getElementById('table-body')

let flights = [
    {
        time:"8:11:",
        destination:"oman",
        flight:"DL3567",
        gate:"A21",
        remarks:"on time"
    }
]

function populationTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr")

        for (const flightDetail in flight){
            const tableCell = document.createElement("td")
            console.log('flightDetail',flightDetail)
        }
    tableBody.append(tableRow)
    }
}

populationTable()