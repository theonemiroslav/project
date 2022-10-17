import productsData from '../static/products.json' assert {type: 'json'};

const modal = document.querySelector("#myModal");
const btn = document.querySelector("#myButton");
const span = document.querySelector(".close");
const ifno = document.querySelector(".ifno");
const myModalYes = document.querySelector("#myModalYes");
const myModalNo = document.querySelector("#myModalNo");
const modalContentWrapper = document.querySelector('.modal-content-wrapper')
const body = document.querySelector('.body')
const myModal = document.querySelector('#myModal')
const huy = document.querySelector('.blur')

btn.addEventListener('click', function () {
  modal.style.display = "flex";
});
span.addEventListener('click', function () {
  modal.style.display = "none";
});
window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

myModalYes.addEventListener('click', function () {
  modal.style.display = "none";
});
myModalNo.addEventListener('click', function () {
  modalContentWrapper.classList.add('show-restriction');
  body.style.height = '100vh';
  body.style.overflow = 'hidden';
  myModal.style.height = '100vh';
  myModal.style.overflow = 'hidden';
  huy.classList.add('show');
});

$(document).ready(function () {
  $('.empfohleneProdukteItems').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  });
  $('.arrowLeft').on('click', function () {
    $('.empfohleneProdukteItems').slick('slickPrev')
  })
  $('.arrowRight').on('click', function () {
    $('.empfohleneProdukteItems').slick('slickNext')
  })
});

const subscriptionButton = document.querySelector('.subscriptionButton');
const subscriptionContent = document.querySelector('.subscriptionContent');
const subscriptionAgreement = document.querySelector('.subscriptionAgreement');
const subscriptionEMail = document.querySelector("#subscriptionEMail");
const yasoglasen = document.querySelector('#agreementField')

subscriptionButton.addEventListener('click', function () {
  subscriptionContent.style.display = "block";
});
subscriptionAgreement.addEventListener('click', function () {
  subscriptionContent.style.display = "none";
});


function success() {

  if (subscriptionEMail.value && yasoglasen.checked && subscriptionEMail.validity.valid) {
    subscriptionButton.disabled = false;
  } else {
    subscriptionButton.disabled = true;
  }
  console.log('test')
}


subscriptionEMail.addEventListener('keydown', success);
yasoglasen.addEventListener('click', success);


function getProducts(queryString) {
  const products = productsData;
  return products.products.filter(shine => shine.name.startsWith(queryString));
}

function simulateAsyncCall(request) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (request.method) {
        case 'get':
          const products = getProducts(request.queryString);
          console.log(products)
          if (products) {
            resolve({ status: 200, products: products });
          } else {
            resolve({ status: 404, message: 'Not Found' });
          }
          break;
        default:
          resolve({ status: 400, message: 'Bad Request' });
      }
    }, 300);
  });
}

const subscriptionButton2 = document.querySelector('.subscriptionButton2');
const subscriptionEMail2 = document.querySelector('#subscriptionEMail2')

subscriptionButton2.addEventListener('click', function () {
  subscriptionContent.style.display = "block";
});
subscriptionAgreement.addEventListener('click', function () {
  subscriptionContent.style.display = "none";
});


function success2() {

  if (subscriptionEMail2.value && subscriptionEMail2.validity.valid) {
    subscriptionButton2.disabled = false;
  } else {
    subscriptionButton2.disabled = true;
  }
  console.log('test')
}
subscriptionEMail2.addEventListener('keydown', success2);


const searchBar = document.querySelector('#searchBarText');
const searchOptionsEmpty = document.querySelector('.searchOptionsEmpty');

const products = [
  {
    "name": "Leupold LTO Tracker Wärmebildkamera",
    "id": "1",
    "realPrice": 1349,
    "discountPrice": 1609,
    "imageURL": '../new project/img/image 7 (1).png'
  },
  {
    "name": "Wärmebildgerät Scout TS 24",
    "id": "2",
    "realPrice": 2465,
    "tax": 0.19,
    "imageURL": '../new project/img/image 8 (1).png'
  },
  {
    "name": "Nightlux JSA 510x FE Wärmebildkamera",
    "id": "3",
    "realPrice": 989,
    "tax": 0.19,
    "imageURL": '../new project/img/JSA-510x-FE-01ZkO7MVdGNUhEZ.jpg'
  },
  {
    "name": "Wärmebildkamera Scout III 640 30hz",
    "id": "4",
    "realPrice": 2349,
    "discountPrice": 3109,
    "tax": 0.19,
    "imageURL": '/new project/img/image 21.png'
  }
]

function getMatchedProducts() {
  if (!searchBar.value) {
    return [];
  } 
  const matchedProducts = products.filter(item => {
    return item.name.startsWith(searchBar.value);
  });
  
  return matchedProducts;
}


function showSuggestedProducts(trueVariants) {
  if (trueVariants.length > 0) {
    searchOptionsEmpty.style.display = "block";
  } else {
    searchOptionsEmpty.style.display = "none";
  }

  searchOptionsEmpty.innerHTML = '';

  trueVariants.forEach(trueVariant => {
    const productElement = document.createElement('div');

    productElement.classList.add('product-item');
    productElement.innerHTML = `
  <div class="product-image-wrapper">
    <img class="product-image" src="${trueVariant.imageURL}" />
  </div>
    <p>${trueVariant.name}</p>
  `
    searchOptionsEmpty.appendChild(productElement);
  });
}


searchBar.addEventListener('input', function() {
  const trueVariants = getMatchedProducts();
  console.log(trueVariants);
  showSuggestedProducts(trueVariants);
});



$(document).ready(function () {
  $('.aWrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  });
  $('.reviewsBottomVectorLeft').on('click', function () {
    $('.allReviewsWrapper').slick('slickPrev')
  })
  $('.reviewsBottomVectorRight').on('click', function () {
    $('.allReviewsWrapper').slick('slickNext')
  })
});

const dropbtn = document.querySelector('.dropbtn');
const myDropdown = document.getElementById("myDropdown");

function dropDownFunction() {
  dropbtn.onclick = function() {
  myDropdown.classList.toggle("show")
};
}
dropDownFunction()
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}