document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("product-form");
    const productsContainer = document.getElementById("landers-products");

    productForm.addEventListener("submit", function (event) {
        event.preventDefault();

       
        const productName = document.getElementById("product-name").value;
        const productType = document.getElementById("product-type").value;
        const timeInterval = document.getElementById("time-interval").value;
        const productPrice = document.getElementById("product-price").value;
        const landersName = document.getElementById("Landers-name").value;
        const landersAddress = document.getElementById("landers-address").value;
        const productDescription = document.getElementById("product-description").value;
        const productImageInput = document.getElementById("product-image");

        
        if (!productName || !productType || !timeInterval || !productPrice || !landersName || !landersAddress) {
            alert("Please fill in all required fields.");
            return;
        }

        
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        let imageUrl = "";
        if (productImageInput.files.length > 0) {
            const file = productImageInput.files[0];
            imageUrl = URL.createObjectURL(file); 
        }

        productCard.innerHTML = `
            <img src="${imageUrl}" alt="${productName}">
            <div class="product-details">
                <h3>${productName}</h3>
                <p><strong>Type:</strong> ${productType}</p>
                <p><strong>Time Interval:</strong> ${timeInterval}</p>
                <p><strong>Price:</strong> ₹${productPrice}</p>
                <p><strong>Landers Name:</strong> ${landersName}</p>
                <p ><strong>Address:</strong> ${landersAddress}</p>
                <p id="des">${productDescription}</p>
            </div>
        `;

        
        productsContainer.prepend(productCard);

        
        productForm.reset();
    });
});
