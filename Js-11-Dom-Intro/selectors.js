console.log("***** SELECTORS *****");

document.title = "Merhaba c-18"

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

console.log(document.getElementById("add-new-item"));

//? id'si add-new-item olan elementi seçer
const headerText = document.getElementById("add-new-item")

//! seçilen elementin style propertysini manipüle ettik.
//? her şey key-value şeklinde yazılır.

headerText.style.color = "blue"
headerText.style.backgroundColor = "yellow"
headerText.style.border = "2px solid red"

//! NOTE: property'ler de kebap-case değil camelCase notasyonunu kullanılır.

const addBtn = document.getElementById("btn")
console.log(addBtn);

// headerText.style = "font-family: tahoma; font-size: 40px" //? CSS vari erişim.

//? HTML elementlerinin içerikleriin okuma ve değiştirme
//?----------------------------------------

const htmlLi = document.getElementById("html-li")
console.log(htmlLi);
htmlLi.style.color = "red"

//? bir text elementinin içeriği aşağıdaki attribute'ler ile değiştirilebilirler.
//! textContent, innerText, innerHTML

console.log(htmlLi.textContent);

htmlLi.textContent = "HTML5"
document.getElementById("js-li").innerText = "JS"
document.getElementById("react-li").innerHTML = "<h2 style='color:red;'>React JS</h2>"

//! input'ların degerinin okunası/yazılması
const myInput = document.getElementById("input")
console.log(myInput.value);

// myInput.addEventListener("click", (e)=>{
//     console.log(e.target.value);
// })


addBtn.value = "Submit"

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const allLi = document.getElementsByTagName("li")
console.log(allLi) // HTMLCollect;

console.log(allLi[0].textContent);
allLi[2].textContent = "javascript"

//! Array-like grubunda direk array metotları kullanılamaz. 
// allLi.forEach((li) => console.log(li) );

//? Toplu bir şekilde erişim için For of yapısı da kullanılabilir.

for (let i of allLi){
    console.log(i.innerText);
}

//? Çözüm olarak array-like grubu array'e çevirebiliriz.
//* 1-Spread (New Generation Operator'den türkçesi dökme falan olan serpiştirmek falan.)

const arrAllli = [...allLi]
console.log(arrAllli);

arrAllli.forEach((x)=> x.style.color="fuchsia")

//* 2- Array.from()
console.log(Array.from(allLi));
Array.from((allLi)).map((li)=> li.style.backgroundColor="skyblue")


//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const myList = document.getElementsByClassName("list")
console.log(myList);

myList[0].innerText = "HTML DERSLERİ"

//* ==========================================
//*              QUERYSELECTOR()
//* ==========================================

//! Query selector ile id, tag, class seçilbilir.
//! bu seçici akışta gördüğü ilk elementi seçer.

//? id ile seçmek için
console.log(document.querySelector("#btn"));

//? class ile seçmek için
console.log(document.querySelector(".item-list"));

//? tag ile seçmek için
console.log(document.querySelector("li"));

//? CSS Selectorleri querySelector ile kullanılabilir.
const myH3 = document.querySelector("main section.item-list h3")
console.log(myH3);

myH3.innerHTML = " Selamlar bro"

const myGrayLi = document.querySelector(".item-list ul li:nth-child(3)")
console.log(myGrayLi);
myGrayLi.style.backgroundColor = "gray"

//* ==========================================
//*              QUERYSELECTORALL()
//* ==========================================

const liste = document.querySelectorAll(".item-list .list")
console.log(liste);
// querySelectorAll bir nodelist döndürür. Nodelist dahili olarak forEach metodunu barındırır.
// Ama istenirse spread veya array.from() ile yine array'e dönüşüm yapılabilir.

liste.forEach((li)=> console.log(li.innerText))

const newList = [...liste]
console.log(newList.map((x) => x.style.backgroundColor="orange"));