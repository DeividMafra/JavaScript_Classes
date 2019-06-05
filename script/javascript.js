function msg() {
    alert("Hello Javatpoint");
}

function Math() {
    var a = 10;
    var b = 20;
    var c = a + b;
    // document.write(c);
    document.getElementById("test").innerHTML = c;
}

// console.log(primerNumber(37));
function primerNumber() {

    var answer, x;
    num = document.getElementById("number").value;
    if (isNaN(num) || num == "") {
        answer = "It is not a number or it is empty";
    } else if (num == 1) {
        answer = "Not primer";
    } else if (num == 2) {
        answer = "Primer";
    } else {
        for (x = 2; x < num; x++) {
            if (num % x == 0) {
                answer = "Not primer!";
                break;
            } else
                answer = "Primer!";
        }
    }
    document.getElementById("primeNumber").innerHTML = answer;
}

function UpperFirst() {
    num = document.getElementById("number").value;
    newString = num.split(" ");
    for (let i = 0; i < newString.length; i++) {
        newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].substring(1);
    }
    newString = newString.join(' ');
    document.getElementById("primeNumber").innerHTML = newString;
}

function AlphOrd() {
    num = document.getElementById("number").value;
    newString = num.split("");
    newString = newString.sort();
    newString = newString.join('');
    document.getElementById("primeNumber").innerHTML = newString;
}
function multiplication() {
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;

    var resultM = num1 * num2;

    document.getElementById("result").innerHTML = resultM;
}

function division() {
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;

    var resultD = num1 / num2;

    document.getElementById("result").innerHTML = resultD;
}
function nValidate() {
    num = document.getElementById("numberValidate").value;
    if (!isNaN(num) && num >= 1 && num <= 10) {
        alert("It is a number between 1 and 10");
    } else {
        alert("It is not a number between 1 and 10");
    }
}
function calcRadius() {
    radius = document.getElementById("radius").value;
    //alert(radius);
    Volume = 4.19 * (Math.pow(radius, 3));
    // volume = 4.19 x radius³;

    document.getElementById("volume").value = Volume;
    // document.querySelector("#volume").textContent = Volume;
}
function removeColor() {
    colorElement = document.getElementById("colorSelect");
    colorElement.options[colorElement.selectedIndex].remove();
}

function AddingRow() {
    colQty = document.getElementById("numOfCol").value;
    tableElement = document.getElementById("tableSelect");

    numberOfRows = document.getElementById("tableSelect").rows.length;
    //rows
    if (numberOfRows < 10) {
        newRow = tableElement.insertRow(0);

        //columns
        for (let index = 1; index <= colQty; index++) {
            newCol = newRow.insertCell(0);
            newCol.innerHTML = " ";
        }
    } else
        alert("The maximum of rows should be 10!");
}

function DeletingRow() {
    numberOfRows = document.getElementById("tableSelect").rows.length;
    if (numberOfRows > 0) {
        document.getElementById("tableSelect").deleteRow(0);
    } else
        alert("There is no row to be deleted!");
}