// Add to Cart Button

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Item added to cart successfully! 🛒");
    });
});