// ?==============================================
// ?            DIZI ERISIM METOTLARI
// ?==============================================
//Array Property
/* -------------------------------------------------------------------------- */
/*                                   length                                   */
/* -------------------------------------------------------------------------- */
const number = [3, 5, 2, "4", "bes", "dort", 3, 6, "bes", 5,56]

console.log( `Number Arrayı ${number.length} eleman sayısına sahiptir`)

/* -------------------------------------------------------------------------- */
//!                                  INCLUDES()                                */
/* -------------------------------------------------------------------------- */
//* Bir elemanın dizide bulunup bulunmadığını true veya false olarak döndürür.

console.log(number.includes(5));
console.log(number.includes(9))

// const userList=["neolursangel","sivasli19","kelalaka","guldurmebeni","excalibur17","pardone"]
// const guest = prompt("kullanıcı adı gir.")

// userList.includes(guest) ? console.log("Bu kullanıcı hali hazırda var") : console.log("Kayıt olunuz.");
console.clear()
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//!                          indexOf(), lastIndexOf()                         */
/* -------------------------------------------------------------------------- */

console.log(number);

console.log(number.indexOf("bes"));
console.log(number.indexOf("yedi"));


if (number.indexOf("bes")<0){
    console.log("Bu öğe bulunamadı.");
    
} else {
    console.log(`Aradığınız öğenin indeks numarası ${number.indexOf("bes")}'tir.`);
}

// LastIndexOf()
// Sondan başlayarak bakar ilk görüdğü indeks numarasını verir.

/* -------------------------------------------------------------------------- */
//!                          join                                             */
/* -------------------------------------------------------------------------- */

//* Dizideki tüm elemanları belirtilen bir ayraç ile birleştirerek? bir string değer döndürür.

//* Join bir işaret yada bilgi parametresi verilmezse default değer olarak array'deki değerlerin arasına , koyarak birleştirir.

const statement=["oku","da","adam","ol"]

// ama kendimiz parantez içine hangi değeri koyarsak onu aralarına ekleyecektir.

console.log(statement.join("🎈"))
console.log(statement);
const newStr = statement.join("🎈")
console.log(newStr);
console.log(statement);

/* -------------------------------------------------------------------------- */
//!                        slice()                                           */
/* -------------------------------------------------------------------------- */

// slice(start,end) son değer dahil değil.
// end verilmezse sonuna kadar olanı alır.

console.log(statement);
console.log(statement.slice(0,3));
console.log(statement)
