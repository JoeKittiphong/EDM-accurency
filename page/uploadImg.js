const upImg = document.getElementById("upImage")

const path = document.createElement("input")
path.setAttribute("type","file")
path.setAttribute("accept","image/png, image/jpg")
path.setAttribute("style",`
    width : 300px;
`)

const displayImg = document.createElement("div")
displayImg.setAttribute("style",`
    width : 300px;
    height : 200px;
    border : 1px solid;
`)

upImg.appendChild(path)
upImg.appendChild(displayImg)