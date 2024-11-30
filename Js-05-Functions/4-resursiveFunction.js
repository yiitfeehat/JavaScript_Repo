//? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* kendi kendini çağıran fonksiyon recursive fonksiyon denilir.
// bazı formülü lan matematiksel problem için kullanılabilir.

//? Verilen sayıya kadar (sayı dahil olmak şartıyla) olan sayma sayılarının toplamını bulan fonksiyon

const toplam = (n) => {
  let topla = 0;
  for (let i = 1; i <= n; i++) {
    console.log(topla);
    topla += i;
    console.log(topla);
  }
  console.log("Sayıların toplamı:", topla);
};
toplam(6);
console.clear();
//! Recursive Fonksiyonun Yapısı
// bir recursive fonksiyonun çalışması için en az iki temel bileşene ihtiyaç vardır:

//? Sonlama koşulu : Fonksiyonun kendi kendini çağırmasını durduran koşul. (Sayma sayısı olduğu için 1den küçük olursa durmalı.)

//? Özyineleme adımı: Fonksiyonun, kendisini tekrar çağırdığı adım.

//* recursive (öz yinelemeli) fonskiyon ile

const toplamlar = (n) => {
  if (n < 1) {
    return n;
  } else {
    return toplamlar(n - 1) + n;
  }
};
console.log(toplamlar(8));

// Fonksiyon toplamlar(8) olarak çağrıldığında şöyle çalışır:

// toplamlar(8) → toplamlar(7) + 8
// toplamlar(7) → toplamlar(6) + 7
// toplamlar(6) → toplamlar(5) + 6
// toplamlar(5) → toplamlar(4) + 5
// toplamlar(4) → toplamlar(3) + 4
// toplamlar(3) → toplamlar(2) + 3
// toplamlar(2) → toplamlar(1) + 2
// toplamlar(1) → toplamlar(0) + 1
// toplamlar(0) → 0 (sonlanma koşulu sağlandığı için 0 döndürülür)

//* Faktöriyel örneği

const fact = (n) => {
    if (n===1){
        return n
    } else {
        return fact(n-1) * n
    }
};
console.log(fact(4));
