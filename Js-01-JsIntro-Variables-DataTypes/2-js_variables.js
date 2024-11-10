// *** JAVASCRIPT DEĞİŞKENLER *****

// Değişken bir değer tutar ve çağırıldığı her yerde o değer işleme girer.

const degiskenAdi="JavaScript"
let sayi=10
var isFalse=true

console.log("--------------");
console.log(degiskenAdi);
console.log(sayi);
console.log(isFalse);

// ****** GLOBAL SCOPE VE LOCAL SCOPE ******

// Global Scope: Program içerisinde fonksiyonların dışında tanımlanan ve her yerden erişlebilen scope tipidir.

// Kodu yamaya bağladığımızda global scope yazarız. Sadece tek global scope var.

const x="Bu global alanda oluşturuldu."
console.log(x);

// Local scope : Bir block içi (Fonksiyon, if bloğu gibi alanlar) scope türüdür.

let ad="Ferhat"

{
    console.log("Bu kısım local alandır");
    console.log(ad);
}

{
    console.log("Bu ikinci local alandır.");
    console.log(ad);
}

//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

//Değişken tanımlamak için 3 değişken tanımlama keywordü kullanılır.

// let, const, var

// Const ve let, ecmascript6 ile gelmiştir. Var eski versiyonlardan beri bulunmaktadır yalnız artık demode denilebilir.

// ===================  CONST  ======================

// const ve let modern JS ile gelmiş yeni değişken tanımlama keywordlerindendir.

// ! CONST: Sadece başlangıçta değer atanabilir, değiştirelemez.

// ! (constant = sabit, devamlı) (non-primitive'ler (array..) hariç).

console.clear()
const pi=3.14
const ad1="Ferhat"
console.log(ad1);
{
    console.log(ad1);
}

// ======================  LET  ========================

// lET de const gibi yaygın kullanılan değişken tanımlama yönteminidr.

//! constdan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.

// CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) let kullanmalıyız.

let lang="Javascript"
console.log(lang);

lang="Php"
console.log(lang);

let num=300
console.log(num);

{
    console.log(num);
    num=320
}
console.log(num);
// let num=200 ---> tekrar aynı değişkeni let ile çağıramazsın. 


// ============  VAR VERİ TİPİ ================

// Var ile bir değişken tanımlandığında let de olduğu gibi değeri sonradan değiştirilebilir.

// Eğer, değişken fonksiyonların dışında tanımlandı ise tüm her yerden erişilebilir. (Global-Scoped)

//! Günümüzde programcılar global değişken gerekmedikçe VAR ile değişken tanımlamayı seçmemektedir.


var kimlikNo="2423432"
console.log(kimlikNo);
kimlikNo="423232323"

var kimlikNo="12421424"
// var değişkeni tekrar tekrar çağırılabilir.



// hoisting önce kullan sonra ödersin(tanımlarsın)
console.log(y);
var y=5;
console.log(y);
// Js hoisting destekleyen bir dildir.

var kimlikNo=324323
let isTrue=true

let bos;
console.log(typeof kimlikNo);
console.log(typeof isTrue);
console.log(typeof bos);