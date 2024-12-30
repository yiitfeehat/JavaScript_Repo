//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================

//? Async-Await ECMAScript 2017 ile javascript diline eklenmiştir.
//? Aslında promise yapısının syntax olarak basitleştirilmiş halidir.
//! Bu bağlamda syntatic sugar benzetmesi yapılabilir.

//* Bir fonksiyonu async hale getirmek için fonskiyon keywordunun onune async keyword'u eklenir.

//* Bir async fonksiyonun içerisinde await keyword'u ile yapılan isteğin cevabının beklenmesi sağlanır.

//* Aslında diziliş olarak senkron mantıga benzeyen kod yazarak asnekron kod yazmayı mümkün kılar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildiği satırdaki kodu durdurulmasını sağlar.

//* Yapılan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calısması devam eder.

//! JavaScript try anahtar kelimesi kod bloğundaki kodları çalışma zamanında test etmek için kullanılır.

//! JavaScript catch anahtar kelimesi çalışma zaman hatası sonucu oluşan hataları ekrana yazdırmak için kullanılır.

//! JavaScript throw anahtar kelimesi özel hata oluşturmayı sağlar.

//! JavaScript finally anahtar kelimesi hata oluşmasını veya oluşmaması durumunda (her durumda anyway işte)
//! çalışacak kodları yazdırmak için kullanılır.

   
const defaultImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg";


const getData = async () => {

    const res = await fetch("https://api.tvmaze.com/search/shows?q=girls");

    // console.log(res);


    if (!res.ok) {
        //hata kontrolü yaptık
        throw new Error("url de hata var");
    }


    const data = await res.json()

    // console.log(data);

    ekranaBastir(data)

}

getData()


const ekranaBastir = (data) => {

    data.forEach((program) => {

        document.querySelector("section").innerHTML += `
    <h1>${program.show.name}
    </h1>
    <img src=${program.show.image?.medium || defaultImage} alt="show"/>
    
    `


    })


}