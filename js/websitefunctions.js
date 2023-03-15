// create your picture storage
let pictureArray = []

// update with web storage api
function onLoad() {
    if(sessionStorage.getItem("pictureList") === null) {
        pictureArray = []
    } else {
        console.log("session loaded")
        pictureArray = JSON.parse(sessionStorage.getItem("pictureList"))
    }
}

// add a click event to all heart icons that allows to save the 
// parent element (the picture) to the web storage api
function save(){
    let saveTxt = document.querySelectorAll(".save")

    saveTxt.forEach(element => {
        element.addEventListener("click", () => {
            let pictureDiv = element.parentElement.innerHTML
            pictureArray.push(pictureDiv)

            console.log("pictureArray")
            console.log(pictureArray)
            alert(`You saved ${pictureArray.length} pictures!`)
			sessionStorage.setItem("pictureList", JSON.stringify(pictureArray))
		})
    });
}

// display your pictures on the remember webpage
function displayRemPictures() {
    let rememberContainer = document.getElementById("rememberContainer")
    if (sessionStorage.getItem("pictureList") !== null) {
        rememberContainer.innerHTML = ""
    }
    
    console.log(pictureArray)
    pictureArray.forEach((element) => {
        let rememberPicture = document.createElement("div")
        rememberPicture.innerHTML = element
        rememberPicture.className = "remPic"

        rememberContainer.appendChild(rememberPicture)
    })

    //subfunction to hide the save button
    function hideSaveBtn(){
        let remPic = document.querySelectorAll(".remPic")
    
        remPic.forEach(element => {
            element.children[1].style.display = "none"
            element.children[2].style.display = "none"
        });
    }

    hideSaveBtn()
}

// function to change color of the likeIcn after click
function likeIcn() {
    let likeIcn = document.querySelectorAll(".like")

    likeIcn.forEach(element => {
        element.addEventListener("click", () => {
            element.style.backgroundColor = "red"
		})
    })
}

// get an alert when submitting a form
function submit(){
    alert("Thank you so much for getting in touch with us!")
}

// call all function
onLoad()
save()
likeIcn()
displayRemPictures()