//reference to element id 'app' in index.html file
const app = document.querySelector("#app")
//import data from data.json file store at data variable
import data from "../data.json" assert {type : "json"}
//import data from structure.json file store at structure variable
import structure from "../structure.json" assert {type : "json"}

let selectedMC = ''
//instance create templete for render data into html element
const comp=(name)=>{
    const machine = document.createElement("div")
    machine.setAttribute("style", `
        width:60px;
        height:70px;
        background:red;
        margin:2px;
    `)
    const nameTag = document.createElement("p")
    nameTag.innerHTML = String(name)
    nameTag.setAttribute("style", `
        color : white;
        font-weight : bold;
        text-align : center;
    `)

    const openBTN = document.createElement("button")
    openBTN.innerHTML = "open"

    const deleteBTN = document.createElement("button")
    deleteBTN.innerHTML = "delete"
    deleteBTN.addEventListener("click",()=>{
        deleteElement(data,name)
        saveJson(data)
    })

    machine.appendChild(nameTag)
    machine.appendChild(openBTN)
    machine.appendChild(deleteBTN)
    machine.addEventListener("click",()=>{
        selectedMC = name;
        console.log(data[selectedMC]);
        localStorage.setItem("selectedMC", selectedMC)
        location.href = "../page/index.html"
    })
    return machine
}

const deleteElement =(obj, key)=>{
    delete obj[key]
}
//save create new machine data templete to json file
const saveJson = (data) => {
    //converse any data to string
    const dataString = JSON.stringify(data)

    //set file into Blob object before writing to json
    const file = new Blob([dataString], { type: "text" })
    const aTag = document.createElement("a")
    aTag.href = URL.createObjectURL(file)
    aTag.download = "data.json"
    //set trigger for click this element
    aTag.click()
}
// const NO4 = structure
// console.log(typeof(data));
// console.log(Object.keys(data).length);

const addJsonData=(key)=>{  
    let objData = {}
    objData[key] = structure
    Object.assign(data, objData)
}

const newTemplete = document.createElement("div")
newTemplete.setAttribute("style",`
    width:100px;
    height:50px;
    border:1px solid green;
    background : green;
    position : absolute;
    top:0;
    display : none;
    `)
const templeteInput = document.createElement("input")
templeteInput.setAttribute("id","elementNameInput")
templeteInput.setAttribute("style","width:95%")
newTemplete.appendChild(templeteInput)

const createElementBTN = document.createElement("button")
createElementBTN.innerHTML = "create"
createElementBTN.addEventListener("click",()=>{
    const createByName = document.getElementById("elementNameInput").value
    if(!createByName){
        alert("plese fill name")
        return
    }
    addJsonData(`${createByName}`)
    saveJson(data)
    newTemplete.style.display = "none";
})
newTemplete.appendChild(createElementBTN)

const addNewMC = document.createElement("div")
addNewMC.setAttribute("style", `
    width:50px;
    height:50px;
    background:blue;
    margin:2px;
    position:relative;
`)
addNewMC.innerHTML = "+"
addNewMC.addEventListener("click",()=>{
    // addJsonData(`Data${Object.keys(data).length}`)
    // saveJson(data)
    newTemplete.style.display = "block";
    // console.log("clicked");
})
addNewMC.appendChild(newTemplete)


for(let i in data){
    // console.log(data[i]);
    const component = comp(i)
    app.appendChild(component)
}
app.appendChild(addNewMC)

// const inputPage = document.getElementById("inputData")
// inputPage.innerHTML = selectedMC