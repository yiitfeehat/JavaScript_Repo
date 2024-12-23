console.log("**** TRAVERSING DOM ****")

//*===========================================
//*            TRAVERSING DOM
//*===========================================

//? Bir HTML elementi üzerinden baska elementleri seçmeye 
// ? DOM Traversing denilir. Özellikle dinamik olarak değişen (silme ve yeni ekleme gibi) HTML elemnalarini seçerken gerekli olabilir.


//! Seçme işlemi 3 yönlü yapılabilir.
//? 1- Yukarı yönde (parent)
//? 2- Aşağı yönde (children)
//? 3- Yatay yönde (sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode

const h2 = document.getElementById("add-new-item")
console.log(h2);

console.log(h2.parentNode); //section.add-item (documente kadar çıkabilir)
console.log((h2.parentElement.parentElement.parentElement.parentElement)); //htmlye kadar çıkabilir

//? Bulundupuumuz yer

const htmlLi = document.querySelector("ul li:nth-child(1)")
console.log(htmlLi);
console.log(htmlLi.parentNode.parentNode.parentNode) //? section.item-list

console.log(htmlLi.closest("section.item-list"));
console.log(htmlLi.closest("#new-sec"));
console.log(htmlLi.closest("section > section"));
console.log(htmlLi.closest("main > section > :not(.item-list)"))


console.log(htmlLi.closest("main").querySelector("section.add-item")) //? section.add-item

//* 2- Asagi Yonde traverse
//*----------------------------------------------
//? children, first elementChild, LastElementChild

const section = document.querySelector("section.add-item")
console.log(section);

console.log(section.firstElementChild); //h2
console.log(section.firstChild);

console.log(section.lastElementChild) // text yazı içeren html elementlerinin yazısına erişir

console.log(section.children) //? tum cocuklarını HTML Collectio olarak doner
//? HTMLCollection(3) [h2#add-new-item, input#input, input#btn, add-new-item: h2#add-new-item, input: input#input, btn: input#btn]


//* 3- Yatay Yonde traverse
//*----------------------------------------------^
//! nextElementSibling, previousElementSibling

console.log(htmlLi.nextElementSibling.innerText);
console.log(htmlLi.nextElementSibling.nextElementSibling.innerText);
console.log(htmlLi.nextElementSibling.nextElementSibling.previousElementSibling.innerText);







