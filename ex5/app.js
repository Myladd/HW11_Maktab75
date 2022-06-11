function getAdd() {
    let value1 = document.getElementById("val1").value;
    let value2 = document.getElementById("val2").value;
    let result = +value1 + +value2;
    if (result % 2 === 0) {
        document.getElementById("result").innerHTML = result
        document.getElementById("result").style.color = "blue";
    }
    else if (result % 2 === 1) {
        document.getElementById("result").innerHTML = result
        document.getElementById("result").style.color = "red";
    }
}