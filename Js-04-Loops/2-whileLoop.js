// * ============================================
//!            WHILE LOOP
// * ============================================

// Javascript'te while döngüsü, bir koşul doğru olduğu sürece belirli bir kod bloğunu tekrar tekrar çalıştırmak için kullanılır.

// while (şart){
//     yapılacak işlemler
// }

// for sayısı belli bir döngü için idealdir
// Belli bir şarta göre sayısı sürekli devam edecekse. Kullanıcıya devam etmek ister misin sorusu gibi.

//* --------------------------------------------------------------------------
// let i = 0;
// while (i<=10){
//     console.log(i);
//     i++
// }
//* --------------------------------------------------------------------------
// Kullanıcıdan şifreyi bulana kadar sorsun.

// let password;

// while (password !== "1234."){
//     password=prompt("Şifreyi giriniz:")
// }

// let number = +prompt("Bir sayı giriniz:");
// while (0 > number || number > 100) {
//   alert("Sayı 0-100 arasında girilmedilir.");
//   number = +prompt("Girdiğiniz sayı uygun aralıkta değil. Tekrar deneyin.");
// }
// alert("Uygun aralıkta bir değer girdiniz. Devam...");

//! Tek başına karar yapıları ile tekrarlama işlemi yapılamaz.
//! Tekrar varsa döngu var demektir.
//! karar yapısı kontrol eder ve duruma gore programın akışını yönlendirir ama tekrar yaptırmaz

//* 0-100 arasında değer girilene kadar değer girilmesini isteyen kod bloğu

// let number1 = +prompt("Bir sayı giriniz:");

// while (number1 < 0 || number1 > 100) {
//   console.log("Girdiğiniz sayı 0-100 arasında olmalıdır.");
//   number1 = +prompt(
//     "0-100 arasında bir sayı girin veya çıkmak için q'ya basın."
//   );

//   if (number1 == "q") {
//     break;
//   }

//   console.log(number1);
// }

//! flag mechanism:
//? flag (bayrak) mekanizması, belirli bir durumun kontrol edilmesi gerektiğinde kullanılır. Flag, genellikle true veya false gibi boolean değerler alır ve koşulun sağlanıp sağlanmadığını belirtir. Bu mekanizma, programın akışını kontrol etmek için yaygın olarak kullanılır.

// let number2 = +prompt("Bir sayı giriniz.");
// exit = false;

// while (number2 < 0 || number2 > 100) {
//   console.log("Girdiğiniz sayı 0-100 arasında olamlıdır.");
//   number2 = prompt("Tekrar deneyin ya da q tuşuyla çıkın.");
//   if (number2 == "q") {
//     exit = true;
//     break;
//   }
// }

// exit ? console.log("Çıkış yapıldı.") : console.log(`Girilen sayı ${number2}`);

//* Flag Mekanizmasının Avantajları
//? Kodun Akışını Kolay Kontrol Etme: Flag sayesinde, kullanıcı belirli bir eylemi gerçekleştirdiğinde (örneğin, çıkmak istediğinde) programın nasıl davranacağı netleşir.
//? Esneklik Sağlama: Flag değişkeni kullanarak farklı durumlarda farklı işlemler yapılabilir. Örneğin, bir koşul sağlandığında belirli bir işlemi durdurabilir veya değiştirebilirsiniz.
//? Kodun Okunabilirliğini Artırma: Flag değişkenlerinin anlamlı isimlerle tanımlanması, kodu okuyan kişinin programın amacını daha iyi anlamasına yardımcı olur.

//! SAYI TAHMİNİ OYUNU

const RastgeleSayi=Math.trunc(Math.random()*100+1);
console.log(RastgeleSayi);
exit=false; //çıkış durumu için flag kullanımı.

while(true){
    let tahmin = prompt("1-100 arasında bir sayı girin veya çıkış için q harfine basın:")

    // kullanıcı çıktı mı diye kontrol edelim.
    if (tahmin === "q"){
        exit=true;
        break;
    }

    tahmin=Number(tahmin)

    if (isNaN(tahmin)){
        console.log("Lütfen sayı girin veya çıkış için q harfine basın.");
    }

    //sonsuz döngüye girer gibi bir şey şuan, şartlarımızı koyalım.
    //tahmini kontrol edelim yani.

    if (tahmin<RastgeleSayi){
        console.log("Daha büyük bir sayı giriniz.");
    } else if (tahmin>RastgeleSayi){
        console.log("Daha küçük bir sayı giriniz.");
    } else {
        console.log("Tebrikler, doğru tahmin ettiniz!");
        break;
    }
}
exit ? console.log("Oyundan ayrıldınız.") : console.log("Oyun sona erdi. Tebrikler.");