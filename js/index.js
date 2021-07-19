var items = prompt("Enter the total item(s)");
var total = parseInt(items)

var totalItems = document.getElementById("itemsLeft").innerText = " /" + total;

var start = 0;

function increment() {
    start++;
    document.getElementById("output").innerHTML = start;

    var beforeDoneString = " item(s) left";

    var remItems = document.getElementById("remItems").innerHTML = beforeDoneString;

    var beforeDone = total - start;
    document.getElementById("remaining").innerHTML = beforeDone;


    if (start === total) {
        document.getElementById("output").innerHTML = "Complete!";
        document.getElementById("itemsLeft").style.display = "none";
        document.getElementById("increm").disabled = true;
        document.getElementById("increm").style.backgroundColor = "gray";
        document.getElementById("increm").style.cursor = "not-allowed";

        alert("Task Complete!")

    }

}