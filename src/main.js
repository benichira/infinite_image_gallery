const carouselImg = document.querySelector(".img-container ");
const buttons = document.querySelectorAll(".btn-container");
const numOfImg = document.querySelectorAll(".img-container img").length;
// console.log(carouselImg)
// console.log(numOfImg)
const imgWidth = 500;
let imgIndex = 1;
let translateX = 0;
let xAxisPosition = 0

buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        if (event.target.id === 'next') {
            if (imgIndex < numOfImg) {
                imgIndex++;
                xAxisPosition -= imgWidth;
                // translateX += 500;
                carouselImg.style.transform = `translateX(${xAxisPosition}px)`
            } else if (imgIndex === numOfImg) {
                imgIndex = 1
                xAxisPosition = 0;
                // translateX = 0;
                carouselImg.style.transform = `translateX(${xAxisPosition}px)`
            }

        } else if (event.target.id === 'previous') {
            if (imgIndex > 1) {
                imgIndex--;
                xAxisPosition += imgWidth;
                // translateX -= 500;
                carouselImg.style.transform = `translateX(${xAxisPosition}px)`
            } else if (imgIndex === 1) {
                imgIndex = numOfImg
                xAxisPosition -= (imgWidth * (numOfImg - 1));
                // translateX = 1500;
                carouselImg.style.transform = `translateX(${xAxisPosition}px)`
            }
        }
        // console.log(translateX)
    })
})






