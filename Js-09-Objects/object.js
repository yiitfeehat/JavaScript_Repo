/* -------------------------------------------------------------------------- */
/*                                   OBJECTS                                  */
/* -------------------------------------------------------------------------- */

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için object kullanılır.

//! Objectlerde key-value değerleri (property-value) değerleri vardır. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için property (key) adı kullanılır.

const isim = ["Ali", "Veli", "Sema"]
const soyad = ["güven", "güvenme", "doğrusöz"]

console.log(`${isim[1]} ${soyad[1]}`);

const ogr = { ad: "Ali", soyad: "Güven" }
console.log(ogr.ad, ogr.soyad);

/* -------------------------------------------------------------------------- */
//* --------------------------------------------------------------*/
//*               Object Oluşturma Yöntemleri                    */
//* --------------------------------------------------------------*/

//! 3 farklı yöntem ile object oluşturulabilir.
//? 1. object() ile class'ından türetme
// Bu yöntem, js'deki object sınıfını kullanarak bir nesne oluşturmayı içerir.
// Bunun için new object() yazılır ve sonradan neseneye özellikler atanır.

const car = new Object()

car.marka = "BMW"
car.model = 2010
car.horsePower = 180
console.log(car);

const car1 = new Object()
car1.marka = "Scoda"
car1.model = 2024
car1.horsePower = 200
console.log(car1)
/* -------------------------------------------------------------------------- */

//? 2. Constructor metodu ile Object oluşturma
//! OOP(Object Oriented Programming)

function PersonelList(id, ad, maas) {
    this.id = id;
    this.ad = ad;
    this.maas = maas;
}

const personel1 = new PersonelList(1000, "Ali", 50000)
console.log(personel1);

const personel2 = new PersonelList(1001, "Seda", 45000)
console.log(personel2);

//! her nesne için ayrı bir kopya oluşturulan metodlar, bellek kullanımını arttırabilir
/* -------------------------------------------------------------------------- */
//? 3. Object Literal (en çok kullanacağımız ve tercih edilen yöntem)

const icecek = {
    ad: "cay",
    hazirlikSüresi: "Yarım Saat",
    tercihler: ["açık", "demli", "paşa çayı"],
    mensei: "rize"
}

///boş object

const house = {}
house.room = 5
house.heating = "Doğalgaz"
house.pool = true;


/* -------------------------------------------------------------------------- */

let personel = {
    name: "Sidal",
    lastName: "Sina",
    birth: 1988,
    horoscope: "taurus",
    isMarried: true,
    children: ["Sena", "Sema", "Süha"],
    address: { city: "İzmir", street: "lale", mahalle: "alsancak", no: 5 },
    calculateAge: function () {
        console.log(this);
        return new Date().getFullYear() - this.birth;
    },
    selamla: () => {
        return "Merhaba"
    },

    // * Object içinde arrow function kullanılıyorsa this keywordu window nesnesine karşılık gelir. Zaten arrow functionın ortaya çıkma sebebi thislerden kurtulmaktır.
    arrowFunction: () => {
        return personel.isMarried

    }
}

console.log(this)

console.log(personel.calculateAge())
console.log(personel.arrowFunction())

 //! Arrow functionda this window objesine karşılık gelir. Arrow functionda this kullanmıyoruz
  //! window objesi içinde isMarried isimli bir özellik bulamadığından undefined
console.clear()
    /* -------------------------------------------------------------------------- */
  //* ------- OKUMA/ERİŞME ----------
