
const images = ["images/image-1.jpg", "images/image-2.jpg", "images/image-3.jpg", "images/image-4.jpg", "images/image-5.jpg", "images/image-6.jpg", "images/image-7.jpg", "images/image-8.jpg", "images/image-9.jpg"];
// console.log(images.length);

let count = 0;

const nextImage = () => {
    count++
    const imageTag = document.getElementById("image-element");
    imageTag.src = images[count]
    if (count >= 8) {
        count = 0;
    }
}

const prevImage = () => {
    count--
    const imageTag = document.getElementById("image-element");
    if (count == -1) {
        count = 8
    }
    imageTag.src = images[count]
}
