let display = document.querySelector("#display")
let buttons = document.querySelector(".button_container")


buttons.addEventListener("click", tip)


function tip(e) {
   if(e.target.tagName ==="BUTTON"){
    let val = e.target.value
    let dis = display.value
    let simbols = (val==="+" || val==="-" || val==="/" || val==="*")  // nota mental esto es un boolean peji
    if (val === "X") {
        display.value = dis.slice(0, dis.length - 1)
        return
    }
    if (val==="=") {
    let res = eval(display.value)
    display.value = res
    return   
    }
    if (val==="AC") {
        display.value=""
        return
    }
    if(simbols && dis===""){
        return
    }
    if (simbols && (dis.slice(-1)==="+" || dis.slice(-1)==="-" ||
     dis.slice(-1)==="*" || dis.slice(-1)==="/" )   ) {
     display.value = dis.slice(0,dis.length-1)
     }
    display.value += val
    }
}
