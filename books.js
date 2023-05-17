let books ;
 async function renderBooks(filter) {
  const booksWrapper = document.querySelector('.books');

booksWrapper.classList +=' books__loading'


 if (!books) {
  books = await getBooks()};
booksWrapper.classList.remove('books__loading')

//console.log(books)

if (filter === 'LOW_TO_HIGH') {
  books.sort((a , b) => ( a.salePrice || a.originalPrice ) - ( b.salePrice || b.originalPrice));
  
}

else if (filter === 'HIGH_TO_LOW') {
  books.sort((a , b) => b.originalPrice - a.originalPrice)

}

else if (filter === 'RATING') {
  books.sort((a , b) => b.rating - a.rating);
}




 const booksHtml = books.map((book) => {
  return `<div class="book__element">
  <figure class="book__img--wrapper">
  <img class="book__img" src="${book.url}" alt="" >

</figure>
<div class="books__title">${book.title}</div>
  <div class="books__ratings">
         ${ratingsHTML(book.rating)}
  </div>
<div class="books__price"> ${book.salePrice} fcfa
  <span class="book__price--promo">${book.originalPrice.toFixed(2)}</span> 
</div>
</div>
`
}).join("");

booksWrapper.innerHTML = booksHtml ;
}

function ratingsHTML(rating) {
  let  ratingHTML = "";
  
  for(let i = 0 ; i < Math.floor(rating) ; ++i) {
  ratingHTML += '<i class="fas fa-star"></i>\n';
  }
  if(!Number.isInteger(rating)) {
  ratingHTML += '<i class="fas fa-star-half-alt"></i>\n';
  }
  return ratingHTML; 
  
  }


function priceHTML(originalPrice , salePrice) {
 if(!salePrice) {
  return `${originalPrice.toFixed(2)}`
 }

else {
  return `<div class="books__price"> ${book.originalPrice.toFixed(2)} fcfa
  <span class="book__price--promo">${ book.salePrice.toFixed(2)}</span> 
</div>`
}
}






setTimeout(() => {
  renderBooks();
})

//filter 
function filterBooks(event) {
  renderBooks(event.target.value);

}




function openMenu () {

    document.body .classList += "menu--open"
  }
  
  function closeMenu () {
    document.body.classList.remove ('menu--open')
  }



  /*<div class="book__element">
  <figure class="book__img--wrapper">
  <img src="./assets/IMG_0076.jpg" alt="" class="book__img">

</figure>
<div class="books__title">Atomic Habits</div>
  <div class="books__ratings">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
  </div>
<div class="books__price"> 12000 fcfa
  <span class="book__price--promo">29090</span> 
</div>
</div>*/






// FAKE DATA
function getBooks() {
return new Promise((resolve) => {
setTimeout(() => {
resolve([
  {
    id: 1,
    title: "Crack the Coding Interview",
    url: "assets/IMG_0079.jpg ",
    originalPrice: 49.95,
    salePrice: 14.95,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Atomic Habits",
    url: "assets/IMG_0076.jpg",
    originalPrice: 39,
    salePrice: null,
    rating: 5,
  },
  {
    id: 3,
    title: "Deep Work",
    url: "assets/IMG_0081.jpg",
    originalPrice: 29,
    salePrice: 12,
    rating: 5,
  },
  {
    id: 4,
    title: "The 10X Rule",
    url: "assets/IMG_0081.jpg",
    originalPrice: 44,
    salePrice: 19,
    rating: 4.5,
  },
  {
    id: 5,
    title: "Be Obsessed Or Be Average",
    url: "assets/IMG_0077.jpg",
    originalPrice: 32,
    salePrice: 17,
    rating: 4,
  },
  {
    id: 6,
    title: "Rich Dad Poor Dad",
    url: "assets/IMG_0078.jpg",
    originalPrice: 70,
    salePrice: 12.5,
    rating: 5,
  },
  {
    id: 7,
    title: "Can't hurt me",
    url: "assets/IMG_0080.jpg",
    originalPrice: 11,
    salePrice: 10,
    rating: 4,
  },
  {
    id: 8,
    title: "48 Laws of Power",
    url: "assets/IMG_0081.jpg",
    originalPrice: 38,
    salePrice: 17.95,
    rating: 4.5,
  },
  {
    id: 9,
    title: "The 5 Second Rule",
    url: "assets/IMG_0081.jpg",
    originalPrice: 35,
    salePrice: null,
    rating: 2,
  },
  {
    id: 10,
    title: "Your Next Five Moves",
    url: "assets/IMG_0081.jpg",
    originalPrice: 40,
    salePrice: null,
    rating: 4,
  },
  {
    id: 11,
    title: "Mastery",
    url: "assets/IMG_0081.jpg",
    originalPrice: 36,
    salePrice: null,
    rating: 4.5,
  },
]);
}, 1000)
});
  }


  
