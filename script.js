const books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 299,
        image: "https://covers.openlibrary.org/b/id/8231856-L.jpg"
    },
    {
        id: 2,
        title: "Clean Code",
        author: "Robert C. Martin",
        price: 599,
        image: "https://covers.openlibrary.org/b/id/8091016-L.jpg"
    },
    {
        id: 3,
        title: "Atomic Habits",
        author: "James Clear",
        price: 399,
        image: "https://covers.openlibrary.org/b/id/9351816-L.jpg"
    },
    {
        id: 4,
        title: "Deep Work",
        author: "Cal Newport",
        price: 349,
        image: "https://covers.openlibrary.org/b/id/8467436-L.jpg"
    }
];

const bookList = document.getElementById('book-list');
const cartCount = document.getElementById('cart-count');
let cart = [];

function displayBooks() {
    books.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.style.animationDelay = `${index * 0.1}s`; // stagger animation
        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h2>${book.title}</h2>
            <p>by ${book.author}</p>
            <p>₹${book.price}</p>
            <button onclick="addToCart(${book.id})">Add to Cart</button>
        `;
        bookList.appendChild(bookDiv);
    });
}

function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    cart.push(book);
    cartCount.textContent = cart.length;
    cartCount.classList.add('bounce');
    setTimeout(() => cartCount.classList.remove('bounce'), 500);
    alert(`"${book.title}" added to cart!`);
}

displayBooks();
