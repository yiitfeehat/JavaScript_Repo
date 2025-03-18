// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

//* JavaScript'te array (dizi), birden fazla değeri tek bir değişken içinde depolammaızı sağlayan bir veri yapısıdır.
//* Diziler, farklı türde verileri( sayılar, stringler, booleanlar vb.) aynı anda tutabilir ve indeks numaralarıyla erişilebilirler.

console.log("*****ARRAYS*****");
//* Dizi tanımlama
//*-------------------------
//! 1- Square bracker (Array Literal) Yöntemi ile dizi tanımalam
//! En çok tercih edilen yöntem.
 
//* Boş array.

const numbers = [];
//! ARRAYLER İÇİNDE BİR ÇOK TÜR DEĞİŞKEN OLABİLİR
    
const school = "Cumhuriyet ilkokulu";
const names = ["Ahmet", "Berk", 34, true, null, undefined, [1, 2], NaN, school];

//* Diziden veri okuma yazma (indisleme)
//* -----------------------------

//?Dizi elemanlarına indeks numarası ile erişilir
//? Dizilerin indeksleri sıfırdan başlar, yani ilk eleman 0 indeksine sahiptir.
//? OKUMA

console.log(names);
console.log(names[2]);
console.log(`Sonuncu eleman:  : ${names[names.length - 1]}`);

names[0] = names[0].toUpperCase()
console.log(names[0]);
console.log(names[1].toUpperCase());
console.log(names[1]);

//! 2. yöntem (Object Constructor)
const newArray = new Array("Js", "HTML", "React")
console.log(newArray);

//! 3. Yöntem (array.of)
const sayilar = Array.of(4, 2, "sega")
console.log(sayilar);
// console.clear()

//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================

const cars = ["BMW", "Audi", "Mercedes", "Scoda", "Porche", "Tesla"]
console.log(cars)
console.log(cars[4])

/* -------------------------------------------------------------------------- */
//!                                 PUSH METODU                               */
/* -------------------------------------------------------------------------- */

//* push() dizinin sonuna eleman ekler. ( Çok kullanılır.)
//* Yeni eleman eklenmiş halini döndürür. !! 
//* Yeni eklenmiş eleman ile birlikte eleman sayısını döndürür.

const newCars = cars.push("Jeep")
console.log(cars);
console.log(newCars);

/* -------------------------------------------------------------------------- */
//!                                 POP METODU                                */
/* -------------------------------------------------------------------------- */

//* pop() fonksiyonu son elemani siler ve sildiği elemanı döndürür.

const deletedCar = cars.pop()
console.log(cars);
console.log(deletedCar);

/* -------------------------------------------------------------------------- */
//!                                 UNSHIFT METODU                            */
/* -------------------------------------------------------------------------- */

//* unshift dizinin 0. indeksine eleman ekler (en başa) ve diziin son eleman sayisini dondurur.

const ElemanEkle = cars.unshift("Tofaş")
console.log(cars);
console.log(ElemanEkle);

/* -------------------------------------------------------------------------- */
//!                                 SHIFT METODU                              */
/* -------------------------------------------------------------------------- */

//* shift, dizinin 0. indeks elemanini siler ve silinen elemanı dondurur.

console.clear();
const elemanSilinen = cars.shift()
console.log(cars);
console.log(elemanSilinen);
/* -------------------------------------------------------------------------- */
//!                                   SPLICE                                  */
/* -------------------------------------------------------------------------- */

//* bir array içinde arada bir noktaya ekleme yapmak için kullanılır.
//? 1. parametre: eklenecek indis numarası
//? 2. parametre: 0 ise araya ekleme, 1 ise uzerine yazma (yerine yazma)
//? 3. parametre: yeni eklenecek veri

cars.splice(2, 0, "Serçe", "Seat", "Leon", "Bugatti")
console.log(cars);

cars.splice(5, 1, "Togg")
console.log(cars)

cars.splice(3, 1)
console.log(cars);

cars.splice(3, 0, "Fiat")
console.log(cars)

// cars.splice(3)
// console.log(cars)
console.clear()

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//!                                   REVERSE                                 */
/* -------------------------------------------------------------------------- */

//* Diziyi tersine çevirir.
console.log(cars);
cars.reverse()
console.log(cars);
console.log(cars[3]);

/* -------------------------------------------------------------------------- */
//!                                    SORT                                   */
/* -------------------------------------------------------------------------- */
//! sort metodu diziyi iterasyona ugratir ve ascii karaktere göre sıralama yapar.
//! Dolayısıyla string'le doğru şekilde sıralama yapabilir.

cars.sort()
console.log(cars)


// Sort metodu sayılarıda stringmiş gibi bir sıralamaya sokar. Bu nedenle sayısal oalrak hatalı bir sıralama oluşur. 

const numbers1 = [3, 556, 243, 133, 6, 78, 98]
// Bunu engellemek bir karşılaştırma algoritması ile çalıştırmak gerekir.
console.log(numbers1)
// Küçükten büyüğe sıralama
numbers1.sort((a, b) => a - b)

console.log(numbers1)
//* Büyükten küçüğe sıralama
numbers1.sort((a, b) => b - a)
console.log(numbers1)