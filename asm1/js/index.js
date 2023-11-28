// switch lang btn
const langSwitchArray = document.querySelectorAll(".lang");
langSwitchArray.forEach(function (e) {
  e.addEventListener('click', function getSize() {
    langSwitchArray.forEach(function (element) {
      element.classList.remove('active');
    });
    this.classList.add('active') 
  })
})



//left icon
let LIsClicked = false;
function leftClickHandler(){ 
  LIsClicked = true;
}
let leftBtn = document.getElementById('slider-btn-left');
leftBtn.addEventListener('click', leftClickHandler);

//right icon
let RIsClicked = false; 
function rightClickHandler(){ 
  RIsClicked = true;
}
let rightBtn = document.getElementById('slider-btn-right');
rightBtn.addEventListener('click', rightClickHandler);


let slideItems = document.getElementsByClassName('slide-item')
var n = 0
function BannerSlider() {
  for (let i = 0; i < slideItems.length; i++) {
    setTimeout(() => {
      document.getElementById('slider').style.transform = `translate3d(calc(-1400px *` + i + `), 0px, 0px)`
    }, i * 1500)
  }
  setTimeout(BannerSlider, slideItems.length * 1500)
}
BannerSlider()


//dot
let dotItems = document.getElementsByClassName('dot-item')
function DotsSlider() {
  for (let i = 0; i < slideItems.length; i++) {
    if(LIsClicked == true){
      if(i == 0){
        i = slideItems.length-1
      }
      else{
        i = i-1
      }
    }
    if(RIsClicked == true){
      if(i ==  slideItems.length-1){
        i = 0
      }
      else{
        i = i+1
      }
    }
    setTimeout(() => {
      // console.log(i)
      if (i == 0) {
        dotItems[0].classList.add('active')
        dotItems[(dotItems.length - 1)].classList.remove('active')
      }
      else {
        dotItems[i].classList.add('active')
        dotItems[i - 1].classList.remove('active')
        dotItems[i + 1].classList.remove('active')
      }
    }, i * 1500)
  }
  setTimeout(DotsSlider, dotItems.length * 1500)
}
DotsSlider()

//array san pham
const traOLMC = new Array('Trà Ô Long Mãng Cầu', '50000', '<img src="./img/sp1.png" alt="Trà Ô Long Mãng Cầu">')
const traOLMK = new Array('Trà Ô Long Matcha kem', '60000', '<img src="./img/sp2.png" alt="Trà Ô Long Matcha kem">')
const traCGT = new Array('Trà tranh giã tay', '40000', '<img src="./img/sp3.png" alt="Trà tranh giã tay">')
const traOLV = new Array('Trà Ô Long vải', '70000', '<img src="./img/sp4.png" alt="Trà Ô Long vải">')
const pdtArray = new Array(traOLMC, traOLMK, traCGT, traOLV)

// click swap sp 
// const orderArray = document.querySelectorAll('.order')
const imgArray = document.querySelectorAll(".item-img");
// let ImgMain = document.getElementsByClassName('main-img');
imgArray.forEach(function (e) {
  e.addEventListener('click', function clickSP() {
    // fnc clickSP  
    let img = this.getElementsByTagName('img')[0]
    let ImgMain = this.closest('.order').getElementsByClassName('main-img')[0];
    // console.log(ImgMain)
    ImgMain.innerHTML = img.outerHTML
    // console.log(this.getElementsByTagName('img')[0])
    let kiemTraHinh = this
    // console.log(kiemTraHinh)
    let hinh = document.getElementsByClassName('item-img')
    // console.log(hinh[i])
    let pdtName = this.closest('.item-pdt').getElementsByClassName('pdt-name')[0];
    let pdtPrice = this.closest('.item-pdt').getElementsByClassName('gia')[0];
    let OrginPrice = this.closest('.item-pdt').getElementsByClassName('giaGoc')[0];
    let btnSizeDefault = this.closest('.item-pdt').getElementsByClassName('btnSize');
    let showAmountDefault = this.closest('.item-pdt').getElementsByClassName('showAmount')[0];
    if ((kiemTraHinh == hinh[0]) || (kiemTraHinh == hinh[4])) {
      pdtName.innerHTML = pdtArray[0][0]
      pdtPrice.innerHTML = pdtArray[0][1]
      OrginPrice.innerHTML = pdtArray[0][1]
    }
    else if ((kiemTraHinh == hinh[1]) || (kiemTraHinh == hinh[5])) {
      pdtName.innerHTML = pdtArray[1][0]
      pdtPrice.innerHTML = pdtArray[1][1]
      OrginPrice.innerHTML = pdtArray[1][1]
    }
    else if ((kiemTraHinh == hinh[2]) || (kiemTraHinh == hinh[6])) {
      pdtName.innerHTML = pdtArray[2][0]
      pdtPrice.innerHTML = pdtArray[2][1]
      OrginPrice.innerHTML = pdtArray[2][1]
    }
    else if ((kiemTraHinh == hinh[3]) || (kiemTraHinh == hinh[7])) {
      pdtName.innerHTML = pdtArray[3][0]
      pdtPrice.innerHTML = pdtArray[3][1]
      OrginPrice.innerHTML = pdtArray[3][1]
    }
    showAmountDefault.innerHTML = 1
    btnSizeDefault[0].classList.add('active')
    btnSizeDefault[1].classList.remove('active')
    btnSizeDefault[2].classList.remove('active')
  });
});
// end click swap sp 
// const cars = ["Saab", "Volvo", "BMW"];


window.onload = function () {
  let defaultItem = document.getElementsByClassName('item-pdt')
  for (let i = 0; i < defaultItem.length; i++) {
    defaultItem[i].getElementsByClassName('main-img')[0].innerHTML = pdtArray[i][2]
    defaultItem[i].getElementsByClassName('pdt-name')[0].innerHTML = pdtArray[i][0]
    defaultItem[i].getElementsByClassName('gia')[0].innerHTML = pdtArray[i][1]
    defaultItem[i].getElementsByClassName('giaGoc')[0].innerHTML = pdtArray[i][1]
  }
};



//count
const amountBtnArray = document.querySelectorAll(".amountBtn");
let amountBtn = document.getElementsByClassName('amountBtn');
amountBtnArray.forEach(function (e) {
  e.addEventListener('click', function thayDoiSoLuong() {
    let countResult = 1
    // console.log(this)
    let amountValue = this.closest('.soLuong').getElementsByClassName('showAmount')[0].innerHTML;
    // console.log(amountValue)
    if (this.classList.contains('plus') == true) {
      countResult = parseInt(amountValue) + 1
      // console.log(countResult)
    }
    if (this.classList.contains('minus') == true) {
      countResult = parseInt(amountValue) - 1
      if (parseInt(amountValue) <= 1) {
        countResult = 1
      }
    }
    this.closest('.soLuong').getElementsByClassName('showAmount')[0].innerHTML = countResult
  })
})

//SML
const sizeBtnArray = document.querySelectorAll(".btnSize");
sizeBtnArray.forEach(function (e) {
  e.addEventListener('click', function getSize() {
    sizeBtnArray.forEach(function (element) {
      element.classList.remove('active');
    });
    this.classList.add('active')
    let sizeValue = this.innerHTML;
    let OrginPrice = this.closest('.item-pdt').getElementsByClassName('giaGoc')[0];
    // console.log(OrginPrice.innerHTML)
    let priceBySize = 0;
    if (sizeValue == 'S') {
      priceBySize = parseInt(OrginPrice.innerHTML)
      // console.log(priceBySize)
    }
    if (sizeValue == 'M') {
      priceBySize = parseInt(OrginPrice.innerHTML) + 5000
    }
    if (sizeValue == 'L') {
      priceBySize = parseInt(OrginPrice.innerHTML) + 10000
    }
    this.closest('.item-pdt').getElementsByClassName('gia')[0].innerHTML = priceBySize
  })
})



// cart on/off
function on() {
  document.getElementById("cart").classList.add('active');
}
function off() {
  document.getElementById("cart").classList.remove('active');
}
// document.getElementById('cart').addEventListener('click', off);
document.getElementById('cart-btn').addEventListener('click', on);
let cartZone = document.getElementById('cart-data');
let overlayCart = document.getElementById('cart');
overlayCart.addEventListener('click', function (event) {
  if (document.getElementById("cart").classList.contains('active')) {
    let isClickInside = cartZone.contains(event.target);
    if (!isClickInside) {
      off()
    }
  }
});

//buy now 
const buyNow = document.querySelectorAll(".buyNow");
buyNow.forEach(element => {
  element.addEventListener('click', on)
});

//add to cart & buy now
const addToCart = document.querySelectorAll(".btnAction");
addToCart.forEach(function (e) {
  e.addEventListener('click', function getDataToCart() {
    let getImg = this.closest('.item-pdt').getElementsByClassName('main-img')[0].innerHTML
    let getName = this.closest('.right').getElementsByClassName('pdt-name')[0].innerHTML
    let getSize = this.closest('.right').getElementsByClassName('active')[0].innerHTML
    let getAmount = this.closest('.right').getElementsByClassName('showAmount')[0].innerHTML
    let getPriceOfPdt = this.closest('.right').getElementsByClassName('gia')[0].innerHTML
    // console.log(getSize)
    document.getElementById('boxCart').innerHTML += `
    <div class="cart-item">
      <div class="cart-item-Img">
        ${getImg}
      </div>
      <div class="cart-item-Name">
        ${getName}
      </div>
      <div>
        Size: <span class="sizeType">${getSize}</span>
      </div>
      <div>
          <span>
              ${getAmount}
          </span>
          x
          <span>
              ${getPriceOfPdt}
          </span>đ
      </div>
    </div>
    `
    removeDulicape()
    sumCart()
  })
})

// xoa trung
function removeDulicape() {
  let cartItem = document.getElementsByClassName('cart-item')
  for (let x = 0; x <= cartItem.length - 1; x++) {
    for (let y = x + 1; y < cartItem.length; y++) {
      // console.log(cartItem[x].getElementsByTagName('span')[1].innerHTML)
      if ((cartItem[x].getElementsByClassName('cart-item-Name')[0].innerHTML == cartItem[y].getElementsByClassName('cart-item-Name')[0].innerHTML)
        && (cartItem[x].getElementsByClassName('sizeType')[0].innerHTML == cartItem[y].getElementsByClassName('sizeType')[0].innerHTML)) {
        let tam = 0;
        tam = parseInt(cartItem[x].getElementsByTagName('span')[1].innerHTML) + parseInt(cartItem[y].getElementsByTagName('span')[1].innerHTML)
        cartItem[x].getElementsByTagName('span')[1].innerHTML = tam
        cartItem[y].remove();
      }
    }
  }
}
// tong gio hang
function sumCart() {
  let cartItem = document.getElementsByClassName('cart-item')
  let tong = 0
  for (let x = 0; x <= cartItem.length - 1; x++) {
    let tam = parseInt(cartItem[x].getElementsByTagName('span')[1].innerHTML) *parseInt(cartItem[x].getElementsByTagName('span')[2].innerHTML)
    tong += tam
  }
  document.getElementById('sum-cart').innerHTML= tong
}