function forInConst(arr) {
    for (const arr_item in arr) {
        let ul = document.getElementById("forInConst");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(arr_item));
        ul.appendChild(li);
        console.log(arr);
    }
}

function forInVar(arr) {
    for (var arr_item in arr) {
        let ul = document.getElementById("forInVar");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(arr_item));
        ul.appendChild(li);
        console.log(arr);
    }
}

function forInLet(arr) {
    for (let arr_item in arr) {
        let ul = document.getElementById("forInLet");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(arr_item));
        ul.appendChild(li);
        console.log(arr);
    }
}

function forOfConst(arr) {
    for (const arr_item of arr) {
        let ul = document.getElementById("forOfConst");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(arr_item));
        ul.appendChild(li);
        console.log(arr);
    }
}

function forOfVar(arr) {
    for (var arr_item of arr) {
        let ul = document.getElementById("forOfVar");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(arr_item));
        ul.appendChild(li);
        console.log(arr);
    }
}

function forOfLet(arr) {
    for (let arr_item of arr) {
        let ul = document.getElementById("forOfLet");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(arr_item));
        ul.appendChild(li);
        console.log(arr);
    }
}

function DemoBug() {
    let array = ["a", "b", "c"];
    try {
        forInConst(array);
    }
    catch (error) {
        console.error(error);
    }
    try {
        forInVar(array);
    }
    catch (error) {
        console.error(error);
    }
    try {
        forInLet(array);
    }
    catch (error) {
        console.error(error);
    }
    try {
        forOfConst(array);
    }
    catch (error) {
        console.error(error);
    }
    try {
        forOfVar(array);
    }
    catch (error) {
        console.error(error);
    }
    try {
        forOfLet(array);
    }
    catch (error) {
        console.error(error);
    }
}

DemoBug();