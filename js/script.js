document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".category-btn");
    const products = document.querySelectorAll(".productBox");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category")
            products.forEach(product => {
                if(category === "all" || product.getAttribute("data-category") === category) {
                    product.style.display = "flex" }
                        else {
                     product.style.display = "none";
                }
            });
        });
    });
});
