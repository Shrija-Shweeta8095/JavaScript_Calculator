function keypress() {
    const key = document.getElementsByClassName("keys");
    for (i = 0; i < key.length; i++) {
        key[i].addEventListener("click", function() {
            keyvalue = this.innerText;
            const input = document.getElementById("input");
            inputvalue = input.value;
            if (input.value == "0") {
                input.value = keyvalue;
            } else {
                input.value += keyvalue;
            }
        });
    }
}
keypress();

function lengthofarray() {
    const history = localStorage.getItem("History");
    if (history) {
        let object = JSON.parse(history);
        let i = 0;
        object.forEach(function(result) {
            i = i + 1;
        });
        return i;
    }
}

function createhistory(inputbyuser, result) {
    const history = localStorage.getItem("History");
    if (history) {
        if (lengthofarray() < 10) {
            const items = document.getElementById("history-items");
            items.innerHTML += "<li class='list-show'>" + inputbyuser + " = " + result + "</li>";
            const databystorage = JSON.parse(history);
            const store = { Input: inputbyuser, Output: result };
            databystorage.push(store);
            localStorage.setItem("History", JSON.stringify(databystorage));
        } else {
            const items = document.getElementById("history-items");
            const list = document.getElementsByClassName("list-show");
            list[0].remove();
            items.innerHTML += "<li class='list-show'>" + inputbyuser + " = " + result + "</li>";
            const databystorage = JSON.parse(history);
            databystorage.splice(0, 1);
            const store = { Input: inputbyuser, Output: result };
            databystorage.push(store);
            localStorage.setItem("History", JSON.stringify(databystorage));
        }
    } else {
        const items = document.getElementById("history-items");
        items.innerHTML = "<li class='list-show'>" + inputbyuser + " = " + result + "</li>";
        const store = [{ Input: inputbyuser, Output: result }];
        localStorage.setItem("History", JSON.stringify(store));
    }
}

function clearall() {
    document.getElementById("input").value = "0";
}



const history = localStorage.getItem("History");
if (history != null) {
    let object = JSON.parse(history);
    const items = document.getElementById("history-items");
    object.forEach(function(result) {
        items.innerHTML += "<li class='list-show'>" + result.Input + " = " + result.Output + "</li>"
    });
}

function historyofinput() {
    const hist = document.getElementsByClassName("list-show");
    for (i = 0; i < hist.length; i++) {
        hist[i].addEventListener("click", function() {
            let value = this.innerText;
            let input = document.getElementById("input");
            inputs.value = value;
        });
    }
}

function findresult() {
    const input = document.getElementById("input");
    const inputbyuser = input.value;
    const result = eval(input.value);
    input.value = result;
    createhistory(inputbyuser, result);
}