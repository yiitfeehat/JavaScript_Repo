//* =======================================
//*          ARRAY ITERATIONS
//* =======================================

//? Array iteration: bir arayın içindeki her bir elemana tek tek ulaşıp  grekli işlemlerin, karşılaştırmaların, filtlerin gibi işlemlerin yapılmasıdır.

//! forEach
//! map
//! filter
//! reduce
//! every
//! some
//! find
 
//* =======================================
//*           FOREACH METHOD
//* =======================================

//! forEach, bir dizinin elemanlarını teker teker işlemek veya belirli bir işlemden geçirmek için oldukça kullanışlıdır.

//? 1- Void bir metoddur: Herhangi bir değer döndürmez. ( İşlemin sonucu undefined olur.)
//? 2- Diziyi değiştirmez: Orijinal dizi üzerinde değişiklik yapmaz, yalnızca her bir eleman üzerinde işlem yapar.
//? 3- Callback fonksiyonu alır: Dizinin her bir öğesi için çalıştırılacak bir foksiyon alır.

const sayilar = [675, 89, 234, 12, 67, 34, 89];
for (let sayi of sayilar) {
    console.log(sayi);
}

// forEach ile

sayilar.forEach((x) => console.log(x)); // inline arrow func
const fruits = ["Elma", "Armut", "Çilek"];

//! Tek satırlı işlemlerde { } gerek yoktur
fruits.forEach((item) => console.log(item.toUpperCase()));

console.clear();

let yas = [45, 78, 12, 56, 16, 17];
yas.forEach((item) => {
    if (item >= 18) {
        console.log("Yetişkin");
    } else {
        console.log("Çocuk");
    }
});

yas.forEach((item) =>
    item >= 18 ? console.log("Yetişkin") : console.log("Çocuk")
);
console.clear();
/* ----------------*/
// fonksiyon ile kullanımının ikinci yolu

yas.forEach(yasYazdir);
function yasYazdir(x) {
    console.log(x);
}

// fonksiyon ile kullanımının üçüncü yolu
yas.forEach(function (x) {
    console.log(x);
});
console.clear();
/* -------------------------------------------------------------------------- */
//! ForEach 3 parametre alır. 1.zorunlu gibi diğerleri ihtiyaç olduğunda kullanılabilir

//? ikinci parametresi index dir.
const sebzeler = ["pırasa", "havuç", "ıspanak", "lahana", "kabak"];
sebzeler.forEach((sebze, index) =>
    console.log(`${index + 1} numaraları sebze ${sebze}`)
);

//? üç parametreli
//3.parametre Döngü yapılan orijinal diziyi (örneğin, array) temsil eder.
sebzeler.forEach((item, index, arr) =>
    console.log(`${arr} içindeki ${index}.indexe sahip sebze ${item}`)
);

sebzeler.forEach((item, i, arr) => (i % 2 === 0 ? console.log(item) : null));
//! --- HAYATİ ÖNEME SAHİP BİLGİ ---
//! forEach return yapmaz.(VOID FUNCTION)
// const numbers = [45, 243, 123, 78, 23, 56];
// let kare = [];
// console.log(kare);
// kare = numbers.forEach((num) => num * num);
// console.log(kare);
console.clear();

//? ÖRNEK

// 1-Sıcaklıkların Ortalamasını Hesapla
// 2- 22°C'yi aşan günlerin sayısını bul.
// 3-Sıcaklıklar arasındaki farkları hesapla. Örneğin, bir önceki gün ile bir sonraki gün arasındaki farkın mutlak değerini alarak, toplam sıcaklık farkını hesapla.

const sicakliklar = [23, 25, 22, 24, 20, 19, 18, 21, 24, 26, 22];
let toplamSicaklik = 0;
let sicakGunler = 0;
let farkToplami = 0;

let sonuc= sicakliklar.forEach((sicaklik,index,arr) => {
    toplamSicaklik += sicaklik;
    sicaklik > 22 ? sicakGunler++ : null;
    if (index < arr.length -1) {
        const fark = Math.abs(arr[index + 1] - sicaklik);
        console.log(fark);
        farkToplami += fark;
    }
})


let ort = toplamSicaklik / sicakliklar.length;
console.log(`Sıcaklıkların ortalaması: ${ort.toFixed(2)}`);
console.log(`Sıcak günlerin sayısı ${sicakGunler}`);
console.log(`Toplam sıcaklık farkı:${farkToplami}`);
console.log(`Sonuc:${sonuc} - undefined çünkü değer döndermez`)
