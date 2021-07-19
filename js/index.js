var items = prompt("Enter the total item(s)");
var total = parseInt(items)

var totalItems = document.getElementById("items").innerText = " /" + total;

var start = 0;

function increment() {
    start++;
    document.getElementById("output").innerHTML = start;

    var beforeDone = total - start;
    document.getElementById("remaining").innerHTML = beforeDone + "  item(s) left";

    if (start === total) {
        document.getElementById("output").innerHTML = "Complete!";
        document.getElementById("items").style.display = "none";
        document.getElementById("increm").disabled = true;
        document.getElementById("increm").style.backgroundColor = "gray";
        document.getElementById("increm").style.cursor = "not-allowed";

    }

}