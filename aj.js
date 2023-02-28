const a = document.querySelector("button");
function xd(){
    const b = document.querySelector("select").value;
    console.log(b)
    const x = document.querySelector("#first").checked;
    const y = document.querySelector("#second").checked;
    const z = document.querySelector("#third").checked;
    console.log(x, y, z);
    console.log(document.querySelector("#a42"))
    let c = null
    if(b == "one"){
        c = 1
    }else if(b == "two"){
        c = 2
    }else if(b == "three"){
        c = 3
    }else if(b == "four")
        c = 4
    console.log(c)
    }

a.addEventListener("click", xd)
    