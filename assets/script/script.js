const ratingBox = document.getElementById("rating-box");
const thankYouState = document.getElementById("thank-you-state");

const ratingNum = document.getElementById("thank-you-state__rating");
const submitBtn = document.getElementById("rating-box__btn");

const updateUI = (e) => {
    e.preventDefault();
    const selectedBtn = document.querySelector("input[name='rating']:checked");
    if(!selectedBtn) {
        alert("Please select a number from 1 to 5 first");
    }else {
        ratingNum.textContent = selectedBtn.value;
        ratingBox.style.display = "none";
        thankYouState.style.display = "flex";
    }
}

submitBtn.addEventListener("click", updateUI);