document.getElementById("tr-2").style.backgroundColor = "rgb(165 243 252)";
document.getElementById("tr-3").style.backgroundColor = "rgb(251 207 232)";
document.getElementById("tr-4").style.backgroundColor = "rgb(209 250 229)";
document.getElementById("tr-5").style.backgroundColor = "rgb(254 205 211)";
document.getElementById("tr-6").style.backgroundColor = "rgb(254 249 195)";
document.getElementById("tr-7").style.backgroundColor = "rgb(165 243 252)";
document.getElementById("tr-8").style.backgroundColor = "rgb(241 245 249)";
document.getElementById("tr-9").style.backgroundColor = "rgb(0 0 0)";


function removeTr() {
    let trBody = document.querySelectorAll("tr");
    let arrTr = Array.from(trBody)
    // console.log(arrTr.length);
    if (arrTr.length > 5) {
        for (let i = 0; i <= 4; i++) {
            document.querySelector("tbody").deleteRow(0);
        }
    } else {
        alert("minimum lines for table")
    }
}

function addTr() {
    for (let i = 0; i <= 2; i++){
        let T = document.querySelector('table');
        let R = document.querySelectorAll('tbody .def-row')[0];
        let C = R.cloneNode(true);
        T.appendChild(C);
    }
}