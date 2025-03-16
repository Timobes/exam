const creators__list = document.getElementById("creators__list")

const burger__btn = document.getElementById("burger__btn")
const burger = document.getElementById("burger")

const nicknameArr = [
    "", 
    "Keepitreal", "DigiLab", "GravityOne", "Juanie",
    "BlueWhale", "mr fox", "Shroomie", "robotica", 
    "RustyRobot", "animakid", "Dotgu", "Ghiblier"
]

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i < 13; i++) {
        creators__list.innerHTML += `
            <div class="creators__elem">
                <div class="creators__top__number">${i}</div>
                <img src="image/creators/Avatar(${i - 1}).svg" alt="#" class="creators__avatar">
                <div class="creators__name">${nicknameArr[i]}</div>
                <div class="creators__sales">
                    Total Sales: <span class="sales__number">34.53 ETH</span> 
                </div>
            </div>
        `
    }    
})

burger__btn.addEventListener("click", () => {
    burger.classList.toggle("burger__show")
})