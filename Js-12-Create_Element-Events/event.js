//* ==============================================
//*                  EVENTS
//* ===============================================
console.log("****** EVENTS *******")


//? Selectors
const h2 = document.querySelector("h2")
const body = document.querySelector("body")
const myInput = document.getElementById("input")
const addBtn = document.getElementById("btn")
const ul = document.querySelector("ul")
const form = document.querySelector("form")


//? Event tanımlamanaları 

//* mouse h2 elementinin üzerine geldiğinde tetiklenir
h2.onmouseover = function (){
    // h2.style.color="red"
    h2.classList.add("red", "center")
}

//* mouse h2 elementinin üzerinden ayrıldıgında tetiklenir
h2.onmouseout= () =>  {
    h2.classList.remove("red", "center")
}

//* DOM İçeriklerinin tamamı yüklendikten sonra tetiklenen  event (onload)
body.onload = function(){
    myInput.focus()
}
commit
//? DOMContentLoaded (metin v.b içerikler yüklenince tetiklenir. Resim, link gibi işçeriklerin yüklenmesini beklemez.)

// document.addEventListener("DOMContentLoaded", (e)=>{
//     alert("çalıştım")
// })

addBtn.addEventListener("click", function(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);

    myInput.focus()

    if(!myInput.value){
        alert("Lütfen boş değer girmeyiniz.")
        return
    }

    const li = document.createElement("li")
    li.textContent = myInput.value
    ul.appendChild(li)
    myInput.value = ""

})

//? form içerisindeki submit buttonuna her basıldığında bu onSubmit event'i tetiklenir.
//? submit eventi olarak enter tuşunun kullanımını sağlar.

// form.onsubmit = function(e) {
//     e.preventDefault()
// }

// myInput.onkeydown = function(e){
//     // console.log(e.key)
//     if (e.key === "Enter") {
//         addBtn.click()
//     }
// }


myInput.addEventListener("keydown", (e)=> {
    console.log(e.code);
    if(e.key==="Enter"){
        addBtn.click()
    }
})