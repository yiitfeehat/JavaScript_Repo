// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonu):

/* -------------------------------------------------------------------------- */

// Recursive Function (Özyinelemeli Fonksiyon)
// IIFE ( Immediately Invoked Function Expression)
// Callback Function

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
//? Bir fonksiyonun belirli bir görevi gerçekleştirmek için tasarlanmış.
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! * --------Function-Declaration----------------------------*/

// /Javascript'te function declaration (fonksiyon bildirimi), bir fonksiyonun ismini ve içerini önceden belirleyerek tanımlamanın temel yoludur.
// Function declaration, function anahtar kelimesi kullanılarak yapılır.
//? Bir fonksiyonun çalışması için çağırmak gereklidir. Çağırılmadığında işleme alınmaz. Bu çağırma işlemine invoke yada call denir.

function yazdir() {
  console.log("Merhaba Nasılsınız");
}
console.log("Fonksiyondan önceyim");
yazdir();
console.log("Fonksiyondan önceyim");

//* fonksiyonlar bir defa yaz defalarca kullan

yazdir();
yazdir();
yazdir();
yazdir();
yazdir();
yazdir();

console.clear();
// Hoisting : yukarı kaldırma
//! sadece function declerationda hoisting yapılıyor
// Hoisting: Function declaration ile tanımlanan fonksiyonlar, JavaScript tarafından kodun en başına "yükseltilir" (hoist edilir), bu nedenle fonksiyon tanımlanmadan önce bile çağrılabilir.

topla();

function topla() {
  console.log(25 + 5);
}
console.clear();
//? Parametreli fonksiyonlar
// Parametreli fonksiyonlar, belirli girdilerle işlem yapabilen fonksiyonlardır.
//? Parametreler, fonskiyon tanımlanırken parantez içinde belirtilir ve fonksiyon çağrıldığında değerler gönderilerek (argüman olarak) kullanılır.
//* Fonksiyon tanımlanırken verilen değerlere arguments denir.

function toplam(a, b, c) {
  // arguments
  // console.log(a+b+c)
  let result = a + b + c;
}
console.log(toplam(45, 67, 89)); // parametre
toplam(435345, 54654, 78758); // parametre
toplam(2343, 54654, 132); // parametre
toplam(132, 565, 232); // parametre
toplam(65756, 8098, 234); // parametre
console.clear();
/* -------------------------------------------------------------------------- */
// Fonksiyonlarda deişkenin değeri gönderilir. Değişkenin kendi gitmez.
// Başlangıç değeri, varsayılan değeri tanımlanabilir.

function selamla(ad, yas = 34, meslek = "Developer") {
  console.log(ad);
  console.log(yas);
  console.log(meslek);
}

let name = "ferhat";
let job = "işsiz";
selamla(name, job);

/* -------------------------------------------------------------------------- */
// birçok deger gönderilecekse arguments keyword faydalanılabilir.

function degerler(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments);
}
degerler(34, 5465, 2342, 14, 53, 783432, 798, 67, 6557652, 213, 8678, 345435);
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
console.clear();
//! return keyword */

function yasHesapla(isim1, tarih) {
    // console.log(`Merhaba ben ${isim1}, ben ${2024-tarih} yaşındayım.`);

    let yasBul=2024-tarih
    return yasBul
}

yasHesapla("ferhat",2002)

const yas=yasHesapla("FARADDD",2002)
console.log(yas);
if (yas>20){
    console.log("Yaşı 20den büyüktür.");
} else {
    console.log("Yaşı 20den küçüktür.");
}

//dairenin çevresini bulan fonksiyonu yazınız.

console.clear();

function daireCevresi(r){
    let cevre= 2*Math.PI*r
    return cevre;
}

console.log(daireCevresi(2));
let sonuc23= daireCevresi()
console.log(sonuc23);
// if (sonuc>30){
//     console.log("bu daire hayallerimdeki daire olamaz")
// }