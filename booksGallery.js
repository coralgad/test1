class Book {
    constructor(name, price, image, category) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.category = category;
    }
}

let books = getBooks();


function showBooks() {

    let gallery = document.querySelector("#gallery");
    let i = 0;
    for (const book of books) {

        gallery.innerHTML += `<div class="col-4"><div class="card h-100">
            <img src="${book.image}" class="card-img-top" alt="${book.name}">
            <div class="card-body">
                <h5 class="card-title">${book.price}</h5>
                <p class="card-text">${book.category}</p>
                <a href="#" class="btn btn-primary" id="addBtn" >Add to cart</a>
            </div>
        </div>
    </div>
`
    }
}
showBooks();

let button = document.getElementById('addBtn');
button.addEventListener('click',addToCart());
 //פונקציה הוספה לעגלה
 function addToCart() {
     
     
 }




function getBooks() {
    if(!localStorage.getItem('Books')) {
        const books = [
            new Book
                ('The 5 AM Club', 98, 'https://images-na.ssl-images-amazon.com/images/I/81Nlt+KjHhL.jpg','Reference books'),
            new Book
                ('Pride And Prejudice', 50, 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4351/9781435159631.jpg','Novel books'),
            new Book
                ('Steve Jobs : The Exclusive Biography', 120, 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3491/9780349140438.jpg', 'Biography books')
        ];
        let booksString = JSON.stringify(books);
        localStorage.setItem('Books', booksString);
    };

    return JSON.parse(localStorage.getItem('Books'));
}

addToLocal();


//הצגה לפי קטגוריות בדף הרלוונטי
function relevantCategories() {
    for (let book of books){
        switch (Book.category) {
            case 'Reference books':
                
                break;

             case 'Novel books':
                
                break;

            case 'Biography books':
                
                break;
        
            default:
                break;
        }
    }
    
}

