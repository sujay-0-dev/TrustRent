const items = [

    {id: 1 ,  name:  "DSLR camera" , price: "₹ 1000 / day" ,  type:  "Electronics", image: "https://m.media-amazon.com/images/I/41PfbBJIliL.jpg"},
    { id: 2, name: "Laptop", price: "₹1200/day", type: "Electronics", "image": "https://techterms.com/img/xl/laptop_586.png" },
    { id: 3, name: "Gaming Console (PS5)", price: "₹1500/day", type: "Electronics", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQCEaeyaX2qXXUyiZbXomPc7pAHLGN_YgLg&s" },
    { id: 4, name: "Drone", price: "₹2000/day", type: "Electronics", "image": "https://m.media-amazon.com/images/I/61j3N1UZ4-L._AC_UF1000,1000_QL80_.jpg" },
    { id: 5, name: "Projector", price: "₹800/day", type: "Electronics", "image": "https://avstore.in/cdn/shop/products/AVStore-Epson-EH-TW-5820-Hero.jpg?v=1636360796" },
    { id: 6, name: "VR Headset", price: "₹500/day", type: "Electronics", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMv92mKozPmuiphAfBpuHkCYYKGx3M7mr_A&s" },
    { id: 7, name: "Smartwatch", price: "₹300/day", type: "Electronics", "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/v/e/j/49-4g-smart-watch-android-ios-wellsys-yes-original-imagwfahedke5khb.jpeg?q=90&crop=false" },
    { id: 8, name: "Studio Microphone", price: "₹400/day", type: "Electronics", "image": "https://m.media-amazon.com/images/I/61xIvlM8bPL._SL1500_.jpg" },
    { id: 9, name: "Tablet (iPad)", price: "₹700/day", type: "Electronics", "image": "https://images.indianexpress.com/2023/10/apple-ipad-10-gen-featured.jpg?w=414" },
    { id: 10, name: "GoPro Action Camera", price: "₹900/day", type: "Electronics", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZckVutG-zBKXt6h1gapNaKbyv35x9DBs_qg&s" }
      
    
]
function displayProducts() {
    const productsContainer = document.getElementById(marketplace)
    productsContainer.innerHTML ='';

    
}
document.addEventListener('DOMContentLoaded',() =>{
    displayProducts();
})