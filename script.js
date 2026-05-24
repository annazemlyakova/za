let products = [
    {
        title: "Rubic`s cube color: green, size 10 cm",
        image: "https://speedcubeshop.com/cdn/shop/files/3x3-gradient-cube-green-3_1024x.jpg?v=1771619347",
        price: 20,
        description: "Rubic`s cube color: green, profesional,  Bright gradient 3x3 Rubik’s Cube in a green and black color scheme. The modern design with smooth color transitions creates a stylish and unique appearance. Perfect for collecting, gifting, or speedcubing thanks to its high-quality pieces and ergonomic construction.",
    },
    {
        title: "Puzzle 1000ps Colorful gradient",
        image: "https://jennyjigsaw.com/cdn/shop/files/eanvtavc8lypdlra1d8r.jpg?v=1750777485&width=1946",
        price: 50,
        description: "Beautiful jigsaw puzzle featuring vibrant artwork with rich colors and detailed design. The high-quality print and precisely cut pieces provide an enjoyable and satisfying puzzle experience. Perfect for relaxing evenings, family activities, or as a thoughtful gift for puzzle lovers.",
    },
    {
        title: "Green Man`s T-shirt S M L XL XXL",
        image: "https://t3.ftcdn.net/jpg/06/05/07/34/360_F_605073450_6epyO3wZef7tOOLPOXygxxMADVLUTJ0X.jpg",
        price: 70,
        description: "Stylish solid-color T-shirt with a minimalist design, perfect for everyday wear. Made from soft and comfortable fabric that provides all-day comfort. The versatile fit makes it an excellent choice for casual outfits and easy to pair with any style.",
    },
    {
        title: "Ninjago Green Dragon 128pgs",
        image: "https://static.richfamily.ru/photo/45/71/457140/1.webp",
        price: 100,
        description: "Яркий конструктор LEGO c детализированными элементами и увлекательным дизайном, который помогает развивать воображение, логику и творческое мышление. Набор включает качественные детали, легко соединяющиеся между собой для комфортной и интересной сборки. Отлично подойдёт для детей и коллекционеров, любящих создавать уникальные модели и игровые сцены.",
    },
    {
        title: "Green ring 16 17 18 19 size",
        image: "https://evoradeparis.ru/d/647480.jpg",
        price: 10,
        description: "Minimalist solid-color ring with a clean, understated design and no decorative inlays. The piece features simple lines and a polished finish, giving it a stylish and versatile look. Suitable for everyday wear and easy to pair with other accessories.",
    },
    {
        title: "Green and gold glasses",
        image: "https://ainak.pk/wp-content/uploads/2024/08/rb-3026-gold-green-3.webp",
        price: 30,
        description: "Stylish sunglasses with green lenses and an elegant frame. The classic design combines comfort with a modern look, providing sun protection while highlighting individual style. The lightweight construction makes them comfortable for everyday wear, and the versatile shape suits different face types.",
    },
    {
        title: "Green phone case Samsung",
        image: "https://images.satu.kz/240823287_w300_h300_chehol-oneplus-10r.jpg",
        price: 50,
        description: "Stylish green Samsung phone case with a clean, modern design. Made from durable material that protects against scratches and everyday wear. Precise fit ensures easy access to all buttons and ports while keeping a sleek look.",
    },
    {
        title: "Painting by numbers Sunset",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX1Hxqog0Py_g1CVbL3FSG39b8xZ072HE-dw&s",
        price: 45,
        description: "",
    },
    {
        title: "Green women`s bag with a golden lock",
        image: "https://www.purseblog.com/images/2021/01/Bottega-Veneta-Cassette-Bag-1.jpg",
        price: 75,
        description: "Paint-by-numbers sunset painting with warm orange, pink, and golden tones. A calm landscape that creates a relaxing and cozy atmosphere. A great creative kit for enjoyable painting and attention to detail.",
    },
    {
        title: "Cute dinosaur sticker 20ps",
        image: "https://papik.pro/uploads/posts/2021-10/1634754624_24-papik-pro-p-zelenie-nakleiki-26.jpg",
        price: 10,
        description: "Cute dinosaur sticker set with 20 pieces featuring fun and colorful cartoon-style dinosaurs. Each sticker has a playful design that makes them perfect for decorating notebooks, laptops, phones, or gift packaging. A great choice for kids and dinosaur lovers who enjoy bright and cheerful accessories.",
    },
    {
        title: "Green car on remote control",
        image: "https://img.votonia.ru/products/5e04bd72205c2.jpg",
        price: 55,
        description: "Green remote control car with a sporty design and fast, responsive controls. Durable build suitable for indoor and outdoor play. A fun choice for kids and RC enthusiasts.",
    },
    {
        title: "Rubic`s cube Mastermorphix 4x4",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQA-gtPH6VqCczujfKg_JJ_kmYCvr0TU9A4g&s",
        price: 35,
        description: "Mastermorphix 4x4 is a Rubik`s Cube variation in a distorted tetrahedron shape. Its complex geometry makes solving more challenging and engaging. Great for experienced puzzlers, it develops logic and spatial thinking.",
    },
    {
        title: "Green and gold colored clocks",
        image: "https://www.dgl.ru/wp-content/uploads/2025/03/omega-seamaster-300-malachite.jpeg",
        price: 60,
        description: "Green and gold colored clocks with an elegant, modern design. The green and gold combination creates a stylish and luxurious look. A functional decorative piece for home or office interiors.",
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
    productsContaner.innerHTML += `<div class="product_card" onclick="openItemFull(${product.id})">
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


const itemFull = document.querySelector('.item-full')
const itemFullClose = document.querySelector('.item-full_close')

itemFullClose.addEventListener("click", function(){
    itemFull.classList.add("item-full--closed")
})



function openItemFull(id){
    const product = products.find(item => id === item.id)
    itemFull.classList.remove("item-full--closed")
    itemFull.querySelector(".image").src = product.image
    itemFull.querySelector(".item-full__title").innerText = product.title
    itemFull.querySelector(".item-full__desc").innerText = product.description
    itemFull.querySelector(".item-full__price").innerText = product.price + "$"
}