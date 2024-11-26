//!  ************  TERNARY OPERATOR ************
// Şarta bağlı durumlar yazmak için başka ve daha kısa bir yöntem de ternary operator
// ES6 ile gelen bir özellik

let yas = 30;

if (yas >= 18) {
  console.log("Oy kullanabilirsin.");
} else {
  console.log("Oy kullanamazsın.");
}

// 1.kullanım

yas >= 18
  ? console.log("Oy Kullanabilirsin.")
  : console.log("Oy kullanamazsın.");

yas > 18 ? console.log("Oy kullanabilir") : null;

//2.kullanım  (daha yaygın)
console.clear();
let message = yas > 18 ? "Oy kullanabilir" : "Oy kullanamaz.";
console.log(message);

/* -------------------------------------------------------------------------- */
let age = 20;
let gender = "erkek";
let health = true;

if (age >= 18 && gender == "erkek" && health == true) {
  console.log("Askerliğe elverişlisiniz.");
} else {
  console.log("Askerliğe elverişli değilsiniz.");
}
console.clear();

const sonuc =
  age >= 18 && gender == "erkek" && health == true
    ? "Askerliğe elverişli "
    : "Askerliğe elşverişssiz.";
console.log(sonuc);

/* -------------------------------------------------------------------------- */
// verilen sayı tek mi çift mi kontrol eden ternary ifade
// let sayi = +prompt("Bir sayı giriniz:") 
// console.log(sayi)
// let result = sayi%2===0 ? "çifttir" :"tektir"
// console.log(result)


//? Hızı 120den büyükse hızlı, 90dan büyükse normal, 90 altıyse yavaş yazan ternary ifade

let speed=75

if (speed >= 120){
    console.log("hızlı");
}
else if (speed >= 90){
    console.log("normal");
}
else {
    console.log("yavaş");
}

// nested ternary

let spdy=speed>120 ? "hızlı" : speed>90 ? "normal" : "yavas";
console.log(spdy);

// verilen gün cumartesi yada pazar ise haftasonu yazsın değilse haftaiçi
// ternary ile yapalım

let gun = prompt("HANGİ GÜN")

let check=gun==="cumartesi" || gun==="pazar" ? "haftasonu" : "haftaici";
console.log(check);