/* -------------------------------------------------------------------------- */
//!                                 WALLET APP                                */
/* -------------------------------------------------------------------------- */

// localStorage için 4 tane method var. getItem, setItem,removeItem,clear


//! -------------------------- Ekle Formu işlemleri -------------------------- */

const gelirInput = document.querySelector("#gelirInput")
const ekle = document.querySelector("#ekle");
const ekleFormu = document.querySelector("#ekleFormu");
const gelirGoster = document.querySelector("#gelirGoster");
let gelirler = JSON.parse(localStorage.getItem("gelirim")) || 0;
console.log(gelirler);



ekleFormu.addEventListener("submit", (e) => {
    e.preventDefault();
    gelirler = gelirler + Number(gelirInput.value)
    gelirGoster.textContent = gelirler
    localStorage.setItem("gelirim", gelirler)
    ekle.disabled = true;
})

//! -------------------------- Harca Formu İşlemleri ------------------------- */
const tarih = document.querySelector("#tarih");
const kimlik = document.querySelector("#kimlik");
const iban = document.querySelector("#iban");
const harcamaAlani = document.querySelector("#harcamaAlani");
const harcamaFormu = document.querySelector("#harcama-formu");
const harcamaTablosu = document.querySelector("#harcamaTablosu");
/* -------------------------------------------------------------------------- */
// localstoragedan verilen parse edilerek çekilmesi. Bu işlem localstoragedan gelen veri string olduğu için yapılmaktadır
let harcamaListesi = JSON.parse(localStorage.getItem("ödeme",)) || [];
/* -------------------------------------------------------------------------- */

harcamaFormu.addEventListener("submit", (e) => {
    e.preventDefault()
    // hesaplaGoster()
    const yeniHarcama = {
        tarih: tarih.value,
        kimlik: "#" + kimlik.value,
        iban: iban.value,
        odeme: Number(harcamaAlani.value),
        islemID: new Date().getTime()

    }

    harcamaListesi.push(yeniHarcama)
    localStorage.setItem("ödeme", JSON.stringify(harcamaListesi))
    harcamalariTablodaGoster(yeniHarcama)
    hesaplaGoster()
})
harcamaListesi.forEach((odeme) => {
    harcamalariTablodaGoster(odeme)

});

//! --------------------- Tabloya verilerin Bastırılması --------------------- */

function harcamalariTablodaGoster({ tarih, kimlik, iban, odeme, islemID }) {
    harcamaTablosu.innerHTML += `
                    <tr>
                        <th scope="row"> ${kimlik} </th>
                        <td>${odeme}</td>
                        <td> ${iban} </td>
                        <td>${tarih} </td>
                        <td><i  class="fa-solid fa-trash-can text-danger ms-4 " style="cursor:pointer" id= ${islemID} ></td>
                    </tr> 
    `;
    /!* ------------------------------ SİLME İŞLEMİ ------------------------------ */
    document.querySelectorAll(".fa-trash-can").forEach((item) => {
        item.onclick = () => {
            console.log(item.id);
            item.parentElement.parentElement.remove()
            harcamaListesi = harcamaListesi.filter((eleman) => eleman.islemID != item.id)
            localStorage.setItem("ödeme", JSON.stringify(harcamaListesi));
            hesaplaGoster()
        }
    })
}
// //! ------------------- Hesaplama Tablosunun Oluşturulması ------------------- */
const harcamaGoster = document.querySelector("#harcamaGoster")
const kalanGoster = document.querySelector("#kalanGoster")
const ctx = document.getElementById('myChart');
let grafik;

function hesaplaGoster() {
    const harcamaToplami = harcamaListesi.reduce((toplam, item) => toplam + item.odeme, 0)
    const gelir = JSON.parse(localStorage.getItem("gelirim"))
    gelirGoster.textContent = gelir
    harcamaGoster.textContent = harcamaToplami
    kalanGoster.textContent = gelir - harcamaToplami

    if (grafik) {
        grafik.destroy()
    }

    grafik = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Income', 'Expense', 'Your Money'],
            datasets: [{
                data: [gelir, harcamaToplami, gelir - harcamaToplami],
                borderWidth: 1
            }]
        },
    });
}
hesaplaGoster()

//! --------------------------------- TEMİZLE -------------------------------- */
const temizle = document.querySelector("#temizle")

temizle.addEventListener("click", () => {
    if (grafik) {
        grafik.destroy()
    }
    gelirInput.value = ""
    harcamaListesi = []
    gelirim = 0
    harcamaTablosu.innerHTML = ""
    hesaplaGoster()
    localStorage.removeItem("ödeme")
    localStorage.removeItem("gelirim")
    location.reload();
})