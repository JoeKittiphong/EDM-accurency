const myApprove = document.getElementById("approve")
myApprove.setAttribute("style",`
    width : 400px;
    height  : 200px;
    display : flex;
    // background : red;
`)

const inputList = document.createElement("div")
inputList.setAttribute("style",`
    display : flex;
    flex-direction : column;
`)
for(let i=0;i<6;i++){
    const listData = document.createElement("input")
    listData.setAttribute("id",`approve${i}`)
    listData.addEventListener("change",()=>{
        nextIput()
    })
    inputList.appendChild(listData)
}
let assignData = ['','','','','','']
const nextIput=()=>{
    const myFocus = document.activeElement
    if(!myFocus.previousElementSibling){
        myFocus.nextElementSibling.focus()
    }else{
        myFocus.previousElementSibling.focus()
    }
    const myId = `approve${(myFocus.id).slice(-1)}`
    assignData[parseInt((myFocus.id).slice(-1))] = myFocus.value
    // console.log(assignData);
    // console.log(myId);
    // console.log((myFocus.id).slice(-1));
}

const getValue=(id)=>{
    const target = document.getElementById(id)
    return target.value
}

const signPanel = document.createElement("div")
signPanel.setAttribute("style",`
    width : 200px;
    height : 155px;
    border : 1px solid;
`)

const signBy = document.createElement("p")
signBy.innerHTML = "ลงชื่อยืนยัน"
const signBTN = document.createElement("input")
signBTN.setAttribute("style",`
    width : 95%;
    display : block;
`)
signBTN.addEventListener("change",()=>{
    for(let i in assignData){
        if(assignData[i] == ""){
            // console.log("can not assign");
            signBy.innerHTML = "กรุณาลงข้อมูลให้ครบทุกช่อง"
        }
        else{
            signBy.innerHTML = `ตรวจสอบแล้ว โดย ${signBTN.value}`
            signBTN.style.display = "none"
            break
        }
    }
})

signPanel.appendChild(signBy)
signPanel.appendChild(signBTN)

myApprove.appendChild(inputList)
myApprove.appendChild(signPanel)


// console.log(inputList.children[2].value);