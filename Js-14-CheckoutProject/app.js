/* -------------------------------------------------------------------------- */
/*                                CHECKOUT PAGE                               */
/* -------------------------------------------------------------------------- */
// 1-ürünlerin ekranda görüntülenmesi
// 2-toplam değerleri tablosunun doldurulması
// 3-silme işleme (remove)
// 4-ürün ekleme ve çıkarma
/* -------------------------------------------------------------------------- */
//! 1-ürünlerin ekranda görüntülenmesi

//Ürünlerim
let sepettekiler = [
    { name: "Vintage Backpack", price: 34.99, piece: 1, img: "./img/photo1.png" },
    { name: "Levi Shoes", price: 40.99, piece: 1, img: "./img/photo2.png" },
    { name: "Antique Clock", price: 69.99, piece: 1, img: "./img/photo3.jpg" },
];

const tax = 0.20;

sepettekiler.forEach(({ img, name, price, piece }) => {

    //   const {img,name,price,piece}=urun

    document.querySelector("#product-rowlari").innerHTML += `
    <div class="row ">
    <div class="col-md-5">
        <img src=${img} class="w-100 rounded-start" alt="..." />
    </div>

    <div class="col-md-7">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>

            <div class="ürün-price">
                <p class="text-warning h2">$<span class="indirim-price"> ${(price * 0.7).toFixed(2)} </span>
                    <span class="h5 text-dark text-decoration-line-through"> ${price} </span>
                </p>
            </div>

            <div class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
                <div class="adet-controller">
                    <button class="btn btn-secondary btn-sm minus">
                        <i class="fas fa-minus"></i>
                    </button>
                    <p class="d-inline mx-4" id="ürün-adet">${piece}</p>
                    <button class="btn btn-secondary btn-sm plus">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>

            <div class="ürün-removal mt-4">
                <button class="btn btn-danger btn-sm w-100 remove-product">
                    <i class="fa-solid fa-trash-can me-2"></i>Remove
                </button>
            </div>

            <div class="mt-2">
                <p>Total Price : <span class="product-total"> ${(price * 0.7 * piece).toFixed(2)}  </span></p>
                
            </div>
        </div>
    </div>
</div>`
})


/* -------------------------------------------------------------------------- */

calculateCardTotal()
removeButton()
increaseDecrease()
//! 2-toplam değerleri tablosunun doldurulması

function calculateCardTotal() {

    const icerik = document.querySelectorAll(".product-total")
    const totalArray = Array.from(icerik).reduce((purePrice, item) => purePrice += Number(item.textContent), 0)
    console.log(totalArray);

    document.querySelector(".productstoplam").textContent = totalArray.toFixed(2)
    document.querySelector(".vergi").textContent = (totalArray * tax).toFixed(2)
    shipping = totalArray > 300 ? 0 : 15;
    document.querySelector(".kargo").textContent = shipping
    document.querySelector(".toplam").textContent = (totalArray + totalArray * tax + shipping).toFixed(2)
}


//! 3-silme işleme (remove)

function removeButton() {
    document.querySelectorAll(".remove-product").forEach((btn) => {
        btn.onclick = () => {

            // btn.parentElement.parentElement.parentElement.parentElement.remove()
            btn.closest(".row").remove();

            calculateCardTotal()
        }
    })
}

//! 4-ürün ekleme ve çıkarma

function increaseDecrease() {
    document.querySelectorAll(".adet-controller").forEach((ekleCikarAlani) => {
        const plus = ekleCikarAlani.lastElementChild;
        const minus = ekleCikarAlani.firstElementChild;
        // const adet = plus.previousElementSibling
        const adet = ekleCikarAlani.children[1]

        plus.onclick = () => {
            adet.textContent = Number(adet.textContent) + 1;
            plus.closest(".card-body").querySelector(".product-total").textContent = (plus.closest(".card-body").querySelector(".indirim-price").textContent * adet.textContent).toFixed(2)

            calculateCardTotal()
        }

        minus.onclick = () => {
            adet.textContent = Number(adet.textContent) - 1;

            if (adet.textContent < 1) {

                alert("Ürün sepetten kaldırıldı.")
                minus.closest(".row").remove()
                calculateCardTotal()

            }

            else {
                minus.closest(".card-body").querySelector(".product-total").textContent = (minus.closest(".card-body").querySelector(".indirim-price").textContent * adet.textContent).toFixed(2)

                calculateCardTotal()
            }

        }
    })
}
