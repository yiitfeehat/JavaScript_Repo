
//* 1- Bilgisayar bir sayı tutsun
/* -------------------------------------------------------------------------- */
const rastgeleSayi = Math.ceil(Math.random() * 20)

const again = document.querySelector(".again")
const guess = document.querySelector(".guess")
const check = document.querySelector(".check")
const msg = document.querySelector(".msg")
const body = document.querySelector("body")

let lives = 5;
let topScore = 0;

/* -------------------------------------------------------------------------- */
//* Kalp Muhabbeti 
/* -------------------------------------------------------------------------- */
function updateHearts() {
    for (let i = 1; i <= 5; i++) {
        let heart = document.getElementById("heart" + i);
        if (i > lives) {
            heart.classList.remove("solid");
            heart.classList.add("dull"); // Soluklaştır
        } else {
            heart.classList.remove("dull");
            heart.classList.add("solid"); // Normal hale getir
        }
    }
}
/* -------------------------------------------------------------------------- */
console.log("rastgeleSayi; ", rastgeleSayi);
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */


//* 2- Check butonuna basılınca olacaklar - heck tetiklenmeli
/* -------------------------------------------------------------------------- */
check.addEventListener("click", () => {
    const tahmin = guess.value;

    if (!tahmin) {
        msg.textContent = "Enter a number."
    }
    else if (tahmin < 0 || tahmin > 20) {
        msg.textContent = "Just between 0-20"
    }
    else if (tahmin == rastgeleSayi) {
        msg.textContent = "Congratulations"
        body.style.backgroundColor = "#4caf50"
        document.querySelector(".number").textContent = rastgeleSayi
        check.disabled = "true"

        if (lives > topScore) {
            topScore = lives;
            document.querySelector(".topScore").textContent = topScore
        }

    }

    else {
        if (lives > 1) {
            --lives;
            updateHearts(); // Canları güncelle

            tahmin > rastgeleSayi ? msg.textContent = "⬇ Reduce ⬇" : msg.textContent = "⬆ Increase ⬆"
        } else {
            body.style.backgroundColor = "black"
            --lives;
            updateHearts(); // Canları güncelle}
            msg.textContent = " YOU LOSE."
            msg.style.fontSize = "5rem"
            guess.value = ""
            check.disabled = "true"
            document.querySelector(".number").textContent = rastgeleSayi
            document.querySelector(".number").style.color = "black"
        }

    }
})
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
again.addEventListener("click", () => {
    location.reload();

})