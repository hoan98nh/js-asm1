
let slideItems = document.getElementsByClassName('slide-item')
var n = 0

function BannerSlider() {
  for (let i = 0; i < slideItems.length; i++) {
    setTimeout(() => {
      console.log(i)
      // if(i == 0){
      //   slideItems[0].classList.add('active')
      //   slideItems[(slideItems.length-1)].classList.remove('active')
      // }
      // else{
      //   slideItems[i].classList.add('active')
      //   slideItems[i-1].classList.remove('active')
      //   slideItems[i+1].classList.remove('active')
      // }
      document.getElementById('slider').style.transform = `translate3d(calc(-1200px *` + i + `), 0px, 0px)`
    }, i * 1500)
  }
  setTimeout(BannerSlider, slideItems.length * 1500)
}
// BannerSlider()


//dot
let dotItems = document.getElementsByClassName('dot-item')
function DotsSlider() {
  for (let i = 0; i < slideItems.length; i++) {
    setTimeout(() => {
      console.log(i)
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
// DotsSlider()

//array san pham
const traOLMC = new Array('Trà Ô Long Mãng Cầu', '50.000 đ', '<img src="./img/sp1.png" alt="Trà Ô Long Mãng Cầu">')
const traOLMK = new Array('Trà Ô Long Matcha kem', '60.000 đ', '<img src="./img/sp2.png" alt="Trà Ô Long Matcha kem">')
const traCGT = new Array('Trà tranh giã tay', '40.000 đ', '<img src="./img/sp3.png" alt="Trà tranh giã tay">')
const traOLV = new Array('Trà Ô Long vải', '70.000 đ', '<img src="./img/sp4.png" alt="Trà Ô Long vải">')
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
    // console.log('1')
    // console.log(ImgMain)
    // console.log('2')
    ImgMain.innerHTML = img.outerHTML
    // console.log(this.getElementsByTagName('img')[0])
    let kiemTraHinh = this
    console.log(kiemTraHinh)
    let hinh = document.getElementsByClassName('item-img')
    // console.log(hinh[i])
    let pdtName = this.closest('.item-pdt').getElementsByClassName('pdt-name')[0];
    let pdtPrice = this.closest('.item-pdt').getElementsByClassName('gia')[0];
    if ((kiemTraHinh == hinh[0]) || (kiemTraHinh == hinh[4])) {
      pdtName.innerHTML = pdtArray[0][0]
      pdtPrice.innerHTML = pdtArray[0][1]
    }
    else if ((kiemTraHinh == hinh[1]) || (kiemTraHinh == hinh[5])) {
      pdtName.innerHTML = pdtArray[1][0]
      pdtPrice.innerHTML = pdtArray[1][1]
    }
    else if ((kiemTraHinh == hinh[2]) || (kiemTraHinh == hinh[6])) {
      pdtName.innerHTML = pdtArray[2][0]
      pdtPrice.innerHTML = pdtArray[2][1]
    }
    else if ((kiemTraHinh == hinh[3]) || (kiemTraHinh == hinh[7])) {
      pdtName.innerHTML = pdtArray[3][0]
      pdtPrice.innerHTML = pdtArray[3][1]
    }
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
  }
};  



//count
const amountBtnArray = document.querySelectorAll(".amountBtn");
let amountBtn = document.getElementsByClassName('amountBtn');
let amountValue = document.getElementsByName('amount').values
amountBtnArray.forEach(function(e){
  e.addEventListener('click', function thayDoiSoLuong(){
    if(amountBtn.classList.contains('plus') = true){
      amountValue +=1
    }
    if(amountBtn.classList.contains('minus') = true){
      amountValue -=1
    }
    document.getElementsByName('amount').values
  })
})