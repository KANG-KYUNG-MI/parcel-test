import anime from "animejs";
import{text} from "./modules/module";

console.log(text);
anime({
    targets:'h1',
    rotate: 360,
    duration:3000
})

const img = document.createElement('img');
document.body.append(img);

//img.src = './media/goat.jpg'

console.log(import.meta.url);
const imgUrl = new URL('./media/goat.jpg', import.meta.url);
img.src = imgUrl;