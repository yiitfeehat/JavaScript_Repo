console.log("**** CREATE NODE ****");

//? 1- Yeni bir li elementi oluşturulur.
const newLi = document.createElement("li")

//? 2- Eğer text tabanlı bir element ise text düğümü oluşturlur. (Node = düğüm demek.)
const textLi = document.createTextNode("Text Node ile bir yazı oluşturdum.")

//? 3- Oluşturulan text node'u (yazı düğümünü) yeni oluşturduğumuz elemente bağlayalım (append = eklemek.)
newLi.appendChild(textLi)

//? 4- Bağlama işleminden sonra artık hava duran bu bilgiyi bi konuma yerleştirmeliyiz. DOM Tree'ye ekleyelim.
document.querySelector("ul").appendChild(newLi)

//! İkinci bir li oluşturalım 

const newLi2 = document.createElement("li")
newLi2.textContent = "TextContent ile bir değer giriyorum."

//? Element.before() veya element.after() ile bir elementi istediğimiz elementin onune veya devamına eklemek mümkündür.

const react = document.querySelector("ul li:nth-child(4)")

console.log(react);

react.appendChild(newLi2)
react.before(newLi, newLi2)

// document.querySelector("ul li:nth-child(1)").after(newLi2)

//! ------- ID, CLASS GIBI OZELLIKLERI ATAMA ------

//? 1- element.attribute = "yeni deger"
//*  yazma

newLi.className = "list red bold bg-warning text-center"
// newLi.className = " selam"  //* bu komutlar bütüncüldür diğerini etkisiz kılar.

newLi.id = "new-li"
newLi.title = "merhaba"

//* okuma
console.log(newLi.title);

//? 2- setAttribute(özellik, "değer") getAttribute("atr")

newLi2.setAttribute("class", "list border border-danger border-4")
newLi2.setAttribute("id", "new-li2")
console.log(newLi2);

console.log(newLi2.getAttribute("id"));
console.log(newLi2.getAttribute("class"));

//? 3- Yöntem (classlist)

newLi.classList.add("border", "border-success", "border-5")

newLi.classList.remove("bold")

console.log(newLi.classList.contains("bold"));

newLi.classList.toggle("border-success")
newLi.classList.toggle("border-success")

//* ------- YENI BIR ELEMENT OLUSTURMA (InnerHTML)------

document.querySelector("main").innerHTML += `

<div>
    <input type="text" class="my-input"/>
    <button class="btn btn-danger">Submit</button>
</div>

<div class="card mt-5" style="width: 13rem;">
  <img src="https://cdn.pixabay.com/photo/2024/02/22/00/27/iguana-8588842_1280.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`;

