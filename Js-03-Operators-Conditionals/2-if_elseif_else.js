/* -------------------------------------------------------------------------- */
//!                                CONDITONALS                             */
/* -------------------------------------------------------------------------- */
//! ******* IF -  ELSE
//* if (şart)
/*{
    şart durumu doğru ise (true ise)    
}
else{
    şart durumu yanlış yani false ise bu blok çalıştırılır.
}
*/

//? Kullanıcıdan alınan sayının tek mi çift mi olduğuna kadar veren kod bloğu
// let sayi=+prompt("Bir sayı girininiz:")

// let kalan=sayi%2

// if (kalan===0){
//     console.log("Sayı çifttir.");
// }
// else{
//     console.log("Sayı tektir.");
// }

//! ******* IF - ELSE IF - ELSE
/* if ( şart1 )
{ 
    şart1 durumu doğru ise bu blok çalıştırılır
} 

else if (şart2 ){
    şart1 durumu doğru değil şart2 durumu doğru ise bu blok çalıştırılır
}

else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

/* -------------------------------------------------------------------------- */

//? Kullanıcıdan alınan iki sayı ve bir operator bilgisine göre işlem yapan programı yazınız.

let sayiGirdisi1 = +prompt("Birinci sayıyı giriniz.");
let sayiGirdisi2 = +prompt("İkinci sayıyı giriniz.");
let operator = prompt("Operatör (+,-,*,/) giriniz.");
let sonuc;

if (operator == "+") {
  sonuc = sayiGirdisi1 + sayiGirdisi2;
} else if (operator == "-") {
  sonuc = sayiGirdisi1 - sayiGirdisi2;
} else if (operator == "*") {
  sonuc = sayiGirdisi1 * sayiGirdisi2;
} else if (operator == "/") {
  // nested if yapısı ( iç içe if )
  if (sayiGirdisi2 != 0) {
    sonuc = sayiGirdisi1 / sayiGirdisi2;
  } else {
    sonuc = "Tanımsız.";
  }
} else {
  console.log("Belirtilenlerin dışında operatör girişi yaptınız.");
}

//* 1. Kısayol
// if (sonuc) {
//   console.log(sonuc);
// } else {
//   alert("Belirtilenlerin dışında işlem yapıldığı için hesaplanamadı.");
// }
//* 2.Kısayol
// && ve ||

console.log(
  sonuc || "Belirtilenlerin dışında işlem yapıldığı için hesaplanamadı."
);
