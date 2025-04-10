document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#productContainer");

    fetch("products.json")
        .then(response => response.json())
        .then(productsData => {
            productsData.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("productBox");
                productDiv.setAttribute("data-category", product.category);

                const imageContainer = document.createElement("div");
                imageContainer.classList.add("productImageContainer");

                const img = document.createElement("img");
                img.src = product.image;
                img.alt = product.name;
                imageContainer.appendChild(img);

                const nameDiv = document.createElement("div");
                nameDiv.classList.add("productName");
                nameDiv.textContent = product.name;

                const infoBox = document.createElement("div");
                infoBox.classList.add("productInfoBox");

                const priceLabel = document.createElement("div");
                priceLabel.classList.add("priceLabel");

                const linedPrice = document.createElement("div");
                linedPrice.classList.add("linedPrice");
                linedPrice.textContent = product.originalPrice;

                const finalPrice = document.createElement("div");
                finalPrice.classList.add("finalPrice");
                finalPrice.textContent = product.finalPrice;

                priceLabel.appendChild(linedPrice);
                priceLabel.appendChild(finalPrice);

                const discountBox = document.createElement("div");
                discountBox.classList.add("discountBox");
                discountBox.textContent = product.discount;

                infoBox.appendChild(priceLabel);
                infoBox.appendChild(discountBox);

                productDiv.appendChild(imageContainer);
                productDiv.appendChild(nameDiv);
                productDiv.appendChild(infoBox);

                const buyButton = document.createElement("button");
                buyButton.classList.add("buyButton");
                buyButton.textContent = "Comprar";
                productDiv.appendChild(buyButton);                

                container.appendChild(productDiv);
            });
        });

    const buttons = document.querySelectorAll(".category-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            const products = document.querySelectorAll(".productBox");
            products.forEach(product => {
                if (category === "all" || product.getAttribute("data-category") === category) {
                    product.style.display = "flex";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });
});
