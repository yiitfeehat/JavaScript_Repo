/* -------------------------------------------------------------------------- */
//!                                 FOR LOOP                                  */
/* -------------------------------------------------------------------------- */

// for (başlangıç; koşul; değişim) {
//     döngü bloğu
// }

//* Başlangıç : Döngünün başlangıcınında yapılacak işlem. Bu genellikle bir sayaç değişkeni tanımlar.
//? Koşul : Döngünün çalışmaya devam etmesi için gereken koşuldur. Koşul sağlanmadığında döngü sona erer. Koşul true dönmeli.
//* Artış: Her döngü sonunda sayaç değişkeninin nasıl değişeceğini belirler.

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.clear();
// /* -------------------------------------------------------------------------- */
//? 3 kişinin iki notunu alan ve ortalmasını(herbirinin ve hepsinin) bulan programı yazın.

// let sum=0;
// for (let t=1; t<=3; t++) {
//     const no1=+prompt("1. notu giriniz.")
//     const no2=+prompt("2. notu giriniz.")
//     let ort=(no1+no2)/2
//     console.log(`${t}. öğrencinin ortalaması ${ort}`);
//     sum=sum+ort
// }
// console.log(`Genel ortalama ${sum/3}`);
/* -------------------------------------------------------------------------- */

//! YAPMAMIZ GEREKEN DURUMLAR !
//* 1. Döngünün çalışmaması örneği.
//? Bir döngünün çalışmamasına neden olan durumlardan biri başlangıç koşulunun koşulu sağlamamasıdır:

// for (let i = 1; i === 50; i++) {
//   console.log(i);
// }

//* 2. Sonsuz döngü örneği
//? Bir döngü, koşul sağlanmaya devam ettikçe çalışır. Eğer koşul hep sağlanırsa, döngü sonsuz döngüye girer ve program donabilir.

// for (let i = 1; i!=50; i=i*2){
//     console.log(i);
// }

//* BREAK ve CONTINUE keywordleri kullanımı
// console.clear();
// for (let i = 0; i <= 10; i++) {
//   if (i % 3) {
//     continue;
//   }
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
// }

//! Loop içinde olmayan if de continue ve break çalışmaz. Yalnızca if varken olmaz bu if bir loop'a dahil olmalı çalışması için.
//* Örnek hatalı kullanım

// let number =5;

// if (number === 5) {
//     break;
// }

// if (number % 2 === 0) {
//     continue;  // Hata verir çünkü continue sadece döngülerde kullanılabilir.
// }

//! Uncaught SyntaxError: Illegal break statement
