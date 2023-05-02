const std = document.getElementById("std")

const tableData = document.createElement("table")
tableData.setAttribute("border", "1px")
tableData.setAttribute("style", "position : relative")

tableData.innerHTML = `
<tr>
    <td>standard value</td>
    <td>measurement value</td>
</tr>
<tr>
    <td>AC195~215V</td>
    <td><input id="stdValue" type="number" style="width:95%;"></td>
</tr>
`
const overData = document.createElement("div")
overData.setAttribute("style", `
    width : 150px;
    height : 80px;
    background : red;
    position : absolute;
    top : 20px;
    left : 290px;
    border-radius : 10px;
    display : none; //debug here ==> default none
`)
const overTxt = document.createElement("div")
overTxt.innerHTML = "ค่าที่วัดได้ต้องอยู่ระหว่าง 195V ~ 215V"
overTxt.style.color = "white"

// const approveBy = document.createElement("button")
// approveBy.innerHTML = "ยอมรับได้"
// approveBy.style.display = "block" //debug here ==> default none

const approveSign = document.createElement("input")
// approveSign.style.display = "none"
const signDone = document.createElement("p")
// signDone.innerHTML = "this is data"
signDone.style.display = "none"


const textStd = document.createElement("p")
textStd.innerHTML = "Popup over standard"

// overTxt.appendChild(approveBy)
overTxt.appendChild(approveSign)
overTxt.appendChild(signDone)

overData.appendChild(overTxt)
tableData.appendChild(overData)
std.appendChild(textStd)
std.appendChild(tableData)

let stdValue = document.getElementById("stdValue")
std.addEventListener("change", () => {
    if (stdValue.value < 195 || stdValue.value > 215 && stdValue.value!="") {
        overData.style.display = "block"
        stdValue.style.background = "red"
        stdValue.style.color = "white"
    } else {
        overData.style.display = "none"
        stdValue.style.background = "none"
        stdValue.style.color = "black"
    }
})

approveSign.addEventListener("change",()=>{
    signDone.innerHTML = approveSign.value
    signDone.style.display = "block"
    approveSign.style.display = "none"
})