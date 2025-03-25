const products = [
    { id: 1, name: "DSLR camera", price: 1000, category: "electic", image: "https://m.media-amazon.com/images/I/41PfbBJIliL.jpg" },
    { id: 2, name: "Laptop", price: 1200, category: "electic", image: "https://techterms.com/img/xl/laptop_586.png" },
    { id: 3, name: "Gaming Console (PS5)", price: 1500, category: "electic", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQCEaeyaX2qXXUyiZbXomPc7pAHLGN_YgLg&s" },
    { id: 4, name: "Drone", price: 2000, category: "electic", image: "https://m.media-amazon.com/images/I/61j3N1UZ4-L._AC_UF1000,1000_QL80_.jpg" },
    { id: 5, name: "Projector", price: 800, category: "electic", image: "https://avstore.in/cdn/shop/products/AVStore-Epson-EH-TW-5820-Hero.jpg?v=1636360796" },
    { id: 6, name: "VR Headset", price: 500, category: "electic", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMv92mKozPmuiphAfBpuHkCYYKGx3M7mr_A&s" },
    { id: 7, name: "Smartwatch", price: 300, category: "electic", image: "https://cdn.mos.cms.futurecdn.net/P4kF4ZkALuGge8KRQgcJUY-1200-80.jpg" },
    { id: 8, name: "Studio Microphone", price: 400, category: "electic", image: "https://m.media-amazon.com/images/I/61PgvuXMp+L.jpg" },
    { id: 9, name: "Tablet (iPad)", price: 700, category: "electic", image: "https://images.indianexpress.com/2023/10/apple-ipad-10-gen-featured.jpg?w=414" },
    { id: 10, name: "GoPro Action Camera", price: 900, category: "electic", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZckVutG-zBKXt6h1gapNaKbyv35x9DBs_qg&s" },

    { id: 11, name: "Vacuum Cleaners", price: 100, category: "Home Appliances", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/vacuum-cleaner/n/p/q/super-vac-eureka-forbes-original-imaggzeakzsyxmxc.jpeg?q=90&crop=false" },
    { id: 12, name: "Air Conditioners", price: 1200, category: "Home Appliances", image: "https://m.media-amazon.com/images/I/81r4tKpuT7L.jpg" },
    { id: 13, name: "Washing Machines", price: 1500, category: "Home Appliances", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00COrfsDNFiDVybLAil5ZLg-GVGEC889Eww&s" },
    { id: 14, name: "Refrigerators", price: 2000, category: "Home Appliances", image: "https://havells.com/media/catalog/product/cache/844a913d283fe95e56e39582c5f2767b/g/l/glff343ambc1pc_1_.jpg" },
    { id: 15, name: "Coffee Makers", price: 800, category: "Home Appliances", image: "https://m.media-amazon.com/images/I/61dNcZx6yWL.jpg" },
    { id: 16, name: "Air Purifiers", price: 500, category: "Home Appliances", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBppye0tfuMw6rRdnKNCrzz68L3VM7FjhhZg&s" },
    { id: 17, name: "Microwaves", price: 300, category: "Home Appliances", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3NPKouI3tBUer9ojdzTqKsw-H7PQ0Q0GxkQ&s" },
    { id: 18, name: "Induction Stoves", price: 400, category: "Home Appliances", image: "https://m.media-amazon.com/images/I/61dv+KDz7KL._AC_UF894,1000_QL80_.jpg" },
    { id: 19, name: "Heaters", price: 700, category: "Home Appliances", image: "https://m.media-amazon.com/images/I/51u1XeRQbzL._AC_UF894,1000_QL80_.jpg" },
    { id: 20, name: "Steam Irons", price: 900, category: "Home Appliances", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVqMWvddWB7CFSNLH-VwniiJDPzhp1Qv4OA&s" },

    { id: 21, name: "Camera Lenses", price: 800, category: " Photography & Videography Equipment", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6hnvWdEZv2Cvu__arIJ5yqiQ6QxsRfPa5w&s" },
    { id: 22, name: "Tripods & Gimbals", price: 1200, category: " Photography & Videography Equipment", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrbBLzY6aZ7uc6o0UvBarI-47FaXRPAfe8yw&s" },
    { id: 23, name: "Lighting Kits", price: 1500, category: " Photography & Videography Equipment", image: "https://m.media-amazon.com/images/I/61+wW2OqvZL._AC_UF1000,1000_QL80_.jpg" },
    { id: 24, name: "Green Screens", price: 200, category: " Photography & Videography Equipment", image: "https://play-lh.googleusercontent.com/3f0A7wku8KOEaOAT9fZOKrw3wKZyCmbAJM1ulQU3Lj41tXIhWngaHgDZK59a2htSu4k" },
    { id: 25, name: "Teleprompters", price: 800, category: " Photography & Videography Equipment", image: "https://m.media-amazon.com/images/I/813o-Ou3UfL.jpg" },
    { id: 26, name: "Audio Recorders", price: 500, category: " Photography & Videography Equipment", image: "https://m.media-amazon.com/images/I/610RGe97NQL._AC_UF1000,1000_QL80_.jpg" },
    { id: 27, name: "Studio Backdrops", price: 300, category: " Photography & Videography Equipment", image: "https://azuriindiabackdrops.com/cdn/shop/collections/AZ210BGCM-05_1500x.jpg?v=1707377221" },
    { id: 28, name: " External Flashes", price: 400, category: " Photography & Videography Equipment", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF10lUoJuXstRR-GVKVY_yDqeViPbUHZCGtQ&s" },
    { id: 29, name: "Camera Stabilizers", price: 700, category: " Photography & Videography Equipment", image: "https://m.media-amazon.com/images/I/61aTN4n39nL.jpg" },
    { id: 30, name: "Drone Cameras", price: 900, category: " Photography & Videography Equipment", image: "https://m.media-amazon.com/images/I/61al5gk0FyL.jpg" },

    { id: 31, name: "Power Drills", price: 800, category: " Tools & Equipment", image: "https://xtrapowertools.com/site-img/product/170635964155234211865b4fb599bb6c.webp" },
    { id: 32, name: "Chainsaws", price: 1200, category: "Tools & Equipment", image: "https://blog.gooddayswork.ag/hs-fs/hubfs/Blog_images/chainsaw_safety.jpg?width=698&height=359&name=chainsaw_safety.jpg" },
    { id: 33, name: "Welding Machines", price: 1500, category: "Tools & Equipment", image: "https://cheston.in/cdn/shop/files/71cCpwJo5UL.jpg?v=1738712866" },
    { id: 34, name: "Tile Cutters", price: 200, category: "Tools & Equipment", image: "https://m.media-amazon.com/images/I/61dSyuWugML._AC_UF1000,1000_QL80_.jpg" },
    { id: 35, name: "Pressure Washers", price: 800, category: "Tools & Equipment", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUaQsylw9tis5JOmSXKaw0oRANRj8lcKeHw&s" },
    { id: 36, name: "Ladder & Scaffolding", price: 500, category: "Tools & Equipment", image: "https://image.made-in-china.com/2f0j00qInYWRKthNcg/Scaffold-System-Aluminium-Portable-Step-Ladder.jpg" },
    { id: 37, name: "Electric Sanders", price: 300, category: "Tools & Equipment", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0csYXq-aNPqVm-tbcVNDMwxZLgk8s_26sw&s" },
    { id: 38, name: "Paint Sprayers", price: 400, category: "Tools & Equipment", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqg-G4e0UChq_OttAKEvH1SFw872LWhAZ6sg&s" },
    { id: 39, name: "Cordless Screwdrivers", price: 700, category: "Tools & Equipment", image: "https://m.media-amazon.com/images/I/712w7Q7PkBL.jpg" },
    { id: 40, name: "Jigsaw Machines", price: 900, category: "Tools & Equipment", image: "https://m.media-amazon.com/images/I/81u0t4Rz8VS._AC_UF1000,1000_QL80_.jpg" },

    { id: 41, name: "Motorbikes", price: 800, category: "Vehicles & Transport", image: "https://media.umbraco.io/suzuki-gb/3mrbrumo/hayabusa_b9e.png?width=828&quality=75&format=webp" },
    { id: 42, name: "Electric Scooters", price: 1200, category: "Vehicles & Transport", image: "https://versatileescooter.com/wp-content/uploads/2020/08/versatile-electric-scooters-ve-series-_green_4.jpg" },
    { id: 43, name: "Bicycles", price: 1500, category: "Vehicles & Transport", image: "https://m.media-amazon.com/images/I/81DPZ3XfrwL.jpg" },
    { id: 44, name: "Cars", price: 2000, category: "Vehicles & Transport", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoV11rM2WhxikmNwZGhy4anuOC5SBANEJQeQ&s" },
    { id: 45, name: "Vans", price: 800, category: "Vehicles & Transport", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbf6Kv2kXkfp-TI4D0Qcu8LJGjfUQb2_owA&s" },
    { id: 46, name: "RVs & Campervans", price: 500, category: "Vehicles & Transport", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxQCzMStj0efyl3mYYCDtsotNFIX7DY03Yw&s" },
    { id: 47, name: "Boats & Kayaks", price: 300, category: "Vehicles & Transport", image: "https://5.imimg.com/data5/XN/KI/MY-2439846/double-seater-kayaks-500x500.jpg" },
    { id: 48, name: "Jet Skis", price: 400, category: "Vehicles & Transport", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSintnL0eDFneEwbfLOf2AiG-0xHZYFRA81aQ&s" },
    { id: 49, name: "Skateboards", price: 700, category: "Vehicles & Transport", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9gAtOdHQqvXcZ3dDuMAHS-s_Himl_BQN7g&s" },
    { id: 50, name: "Wheelchairs", price: 900, category: "Vehicles & Transport", image: "https://s.alicdn.com/@sc04/kf/H8bc6f9a55c824863bc072d27b0c0f0479.jpg_720x720q50.jpg" }
];
document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products");
    const filterBtn = document.getElementById("filter-btn");
    const categoryFilter = document.getElementById("category");
    const minPriceFilter = document.getElementById("min-price");
    const maxPriceFilter = document.getElementById("max-price");
    const resetBtn = document.getElementById("reset-btn");

    function displayProducts(products) {
        console.log("Displaying products:", products);
        productsContainer.innerHTML = ""; 

        if (products.length === 0) {
            productsContainer.innerHTML = `
                <div class="no-products">
                    <h3>No products found</h3>
                </div>
            `;
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" width="150">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <button>Rent Now</button>
            `;

            productsContainer.appendChild(productCard);
        });
    }

    displayProducts(products);

    function filterProducts() {
        const selectedCategory = categoryFilter.value.trim().toLowerCase();
        const minPrice = minPriceFilter.value ? Number(minPriceFilter.value) : 0;
        const maxPrice = maxPriceFilter.value ? Number(maxPriceFilter.value) : Infinity;

        let filteredProducts = products;

        if (selectedCategory !== "all") {
            filteredProducts = filteredProducts.filter(product => 
                product.category.toLowerCase() === selectedCategory
            );
        }

        filteredProducts = filteredProducts.filter(product => 
            product.price >= minPrice && product.price <= maxPrice
        );

        console.log("Filtered Products:", filteredProducts);
        return filteredProducts;
    }

    filterBtn.addEventListener("click", function () {
        console.log("Filter button clicked");
        const filteredProducts = filterProducts();
        displayProducts(filteredProducts);
    });

    resetBtn.addEventListener("click", function () {
        console.log("Reset button clicked");
        categoryFilter.value = "all";
        minPriceFilter.value = "";
        maxPriceFilter.value = "";
        displayProducts(products);
    });
});