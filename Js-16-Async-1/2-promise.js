//* ======================================================================
//*                          2- Promises
//* =======================================================================

//? Promise, asenkron bir işlemin basariyla ve basarızlıkla bittigini gosterin
//? ve aynı zamanda basarıyla bıttıgınde sonuc verilerşni temsil eden bir nesne yapısıdır.


//? SYTNAX
//?-----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyon verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginde, reject ise
//*    basarisizlikla bittiginde calıstırılırlar.

// new Promise(
//     /* Executor */
//     function(resolve,reject){

//     }
// )

//? Bir Promise asagidaki state(durumlarini) iceebilir.
//* pending: ilk state, fulfilled veya rejected olmayan, bekliyor
//* fulfilled:islemin basariyla tamamlandigini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise le degerler tanımlanabilir yada bir sebeple (hata gibi) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalabilir.

//? then() ve catch() metotlari promise dondururler.
//? Zincirlemme (chain) olarak kullanabilirler.

const person = { name: "kağan", surnam: "bilir" };

new Promise((resolve, reject) => {
    // if(databaseden veriler düzgün geldiyse)
    //   if (true) {
    if (false) {
        resolve(person); //person yerinde database in url si olur
    } else {
        reject(new Error("promise başarısız"));
    }
})
    .then((response) => console.log(response))
    .catch((error) => console.log(error));