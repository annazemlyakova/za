let products = [
    {
        title: "Rubic`s cube color: green, profesional",
        image: "https://speedcubeshop.com/cdn/shop/files/3x3-gradient-cube-green-3_1024x.jpg?v=1771619347",
        price: 20
    },
    {
        title: "Puzzle 1000ps Colorful gradient",
        image: "https://jennyjigsaw.com/cdn/shop/files/eanvtavc8lypdlra1d8r.jpg?v=1750777485&width=1946",
        price: 50
    },
    {
        title: "Green Man`s T-shirt S M L XL XXL",
        image: "https://t3.ftcdn.net/jpg/06/05/07/34/360_F_605073450_6epyO3wZef7tOOLPOXygxxMADVLUTJ0X.jpg",
        price: 70
    },
    {
        title: "Ninjago Green Dragon 128pgs",
        image: "https://static.richfamily.ru/photo/45/71/457140/1.webp",
        price: 100
    },
    {
        title: "Green ring 16 17 18 19 size",
        image: "https://evoradeparis.ru/d/647480.jpg",
        price: 10
    },
    {
        title: "Green and gold glasses",
        image: "https://ainak.pk/wp-content/uploads/2024/08/rb-3026-gold-green-3.webp",
        price: 30
    },
    {
        title: "Green phone case Samsung",
        image: "https://images.satu.kz/240823287_w300_h300_chehol-oneplus-10r.jpg",
        price: 50
    },
    {
        title: "Painting by numbers Sunset",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX1Hxqog0Py_g1CVbL3FSG39b8xZ072HE-dw&s",
        price: 45
    },
    {
        title: "Green women`s bag with a golden lock",
        image: "https://www.purseblog.com/images/2021/01/Bottega-Veneta-Cassette-Bag-1.jpg",
        price: 75
    },
    {
        title: "Сute dinosaur sticker 20ps",
        image: "https://papik.pro/uploads/posts/2021-10/1634754624_24-papik-pro-p-zelenie-nakleiki-26.jpg",
        price: 10
    },
    {
        title: "Green car on remote control",
        image: "https://img.votonia.ru/products/5e04bd72205c2.jpg",
        price: 55
    },
    {
        title: "Rubic`s cube Mastermorphix 4x4",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQA-gtPH6VqCczujfKg_JJ_kmYCvr0TU9A4g&s",
        price: 35
    },
    {
        title: "Rubic`s cube Mastermorphix 4x4",
        image: "https://www.dgl.ru/wp-content/uploads/2025/03/omega-seamaster-300-malachite.jpeg",
        price: 35
    },
]

products = products.map((product, index) => (
    { 
        id: index + 1,
        ...product
    }
))

console.table(products)

let productsContaner = document.querySelector('.catalogue_items')

products.forEach(function(product){
    productsContaner.innerHTML += `<div class="product_card">
                        <img src="${product.image}" alt="puzzle" class="product-card_img">
                        <p class="product-card_title">${product.title}</p>

                        <div class="product-card_footer">
                            <p class="product-card_rice">${product.price}$</p>
                            <button class="product-card_buy">Add to cart</button>
                        </div>
                    </div>`
})


let ddBtn = document.querySelector(".dropdown__button")
let ddMenu = document.querySelector(".dropdown__menu")

ddBtn.addEventListener("click", (event)=> {
    event.stopPropagation()
    ddMenu.classList.add("dropdown__menu--active")})

document.body.onclick = ()=> ddMenu.classList.remove("dropdown__menu--active")