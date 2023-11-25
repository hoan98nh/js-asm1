
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


// click sp swap img
// const orderArray = document.querySelectorAll('.order')
const imgArray = document.querySelectorAll(".item-img");
// let ImgMain = document.getElementsByClassName('main-img');
for (let i = 0; i < imgArray.length; i++) {
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
    });
  });
}
