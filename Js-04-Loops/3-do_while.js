// * ============================================
// *            DONGULER(LOOPS)- DO-WHILE
// * ============================================

console.log("****** DO-WHILE *******");

// do {
//     yapılacak işlemler (her türlü bi kere yapılcak bu kaçarı yok.)
//     her türlü döngüye giriyor bu do 'da.

// }while ()

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);

console.clear();
/* -------------------------------------------------------------------------- */
// kullanıcıdan vize ve final notları alıp bunları hesaplayan program

let devam = "";

do {
  let ders = prompt("Ders adı ?");
  let vize = +prompt("Vize notunuz.");
  let final = +prompt("final notunuz.");
  let ortalama = vize * 0.4 + final * 0.6;

  let sonuc =
    final < 50
      ? `${ders} adlı dersten ${final} notunuz 50nin altında olduğundan dolayı geçemediniz.`
      : ortalama >= 50
      ? `${ders} dersinden ${ortalama} ile geçtiniz`
      : `${ders} dersinden ${ortalama} ile kaldınız.`;

  console.log(sonuc);

  devam = prompt("Tekrar hesaplama yapmak istiyorsanız E tuşuna basınız.");
} while (devam === "E");
