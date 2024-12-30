//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve asenkron programlama dildir.

//? Asenkron Programlama
//? -------------------------------------------
//? Asenkron programlama, bir alt gorevin uygulamanın asıl threadinden
//? bagımsız olarak arkaplanda calıstırılmasına ızın veren paralel programalama
//? teknigidir. Bu alt gorev tamamlandıgında (basarıyla veya basarıszlıkla)
//? asıl thread bu konuda bilgilendilir. Asenkron programlama, uygulamaların 
//? performansının arttırılmasına ve daha iyi kullanıcı deneyimine katkı saglamaktadır.

//? Ozellikle bir API'den veya beritabanından veri cekme, giris/cıkıs islemleri,
//? Dosya okuma-yazma islemleri gibi zaman tuketen kodlarda async programlama
//? kullanılması cok onemlidir.

//* Asenkron (1 seferlik çalışan) setTimeOut

setTimeout(() => {
    console.log("selamun hello");
}, 3000)

console.log("selamun aleyküm");

setTimeout(() => {
    console.log("naber");
}, 2000)

//!selamun aleyküm- naber- selamun hello sırasıyla çalışır.3. nün süresi 1.den azsa, 2-3-1 sırasında çalışır
//!settimeout müsait zamanda ortaya çıkar, onun sırası geçtiğinde alttaki işlemler bitince çalışır


//* Asenkron (setInterval, clearInterval) belli arallıklarla durulana kadar devam eder. Mesela 1 dakikada bir döviz kurunu güncellemek için kullanılır.
//* ********************* 

let sayac = 0;

const interval1 = setInterval(() => {
    console.log((++sayac));
    if (sayac == 7) {
        clearInterval(interval1)
    }
}, 1000)
