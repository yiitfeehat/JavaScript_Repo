//* ===========================================================
//*                3- FETCH API
//*=============================================================

//? Dış kaynaklardan veri getirmek için kullanılan basit bir arabirimdir.
//? Ağ istekleri yapmamıza ve cevapları yönetebilmemize olanak sağlar.
//? Javascript ortamında en çok kullanılan asenkron işlem örneklerinin basında belmektedir.

//? fetch() fonksiyonu veri getirmek istediğiniz kaynağın yolunu gösteren zorunlu
//? bir parametre almaktadır ve bu istedğin cevabını gosteren bir promise dondurmektedir.
//! Bu bağlamda syntatic sugar benzetmesi yapılabilir.

//! Throw ile hata fırlatırsak kodumuz o satırda durur. Kodumuzu durdurmak istemezsek diğer sayfadaki kodları kullanırız.

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

//! chain, pipe (zincir then)

//* fetch("https://api.github.com/users").then((res)=> res.json()).then((veri)=>console.log(veri))

fetch("https://api.github.com/users") //database'e istek atalım
    .then((res) => {
        if (!res.ok) { //hata kontrolü yaptık
            throw new Error("URL'de hata var.")
        }

        return res.json(); //eğer problem yoksa gelen verileri jsye uygun hale getir.

    })
    .then((veri) => ekranaBastir(veri)) //veriler hatasız ise çalışacak kod.
    .catch((error) => console.log(error)) // veriler hatalı ise çalışacak kod

const ekranaBastir = (data) => {
    console.log(data);

    data.forEach(({ login, avatar_url, node_id }) => {
        document.querySelector("section").innerHTML += `
        <h1> ${login} </h1>
        <img width="300px" src=${avatar_url}/>
        <h3>${node_id} </h3>
        
        `
    })
}

