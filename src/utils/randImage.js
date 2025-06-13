
import image1 from "../assets/images/dice1.png"
import image2 from "../assets/images/dice2.png"
import image3 from "../assets/images/dice3.png"
import image4 from "../assets/images/dice4.png"
import image5 from "../assets/images/dice5.png"
import image6 from "../assets/images/dice6.png"



export function randomImage(){
    const images = [image1, image2, image3, image4, image5, image6]
    const randIndex = Math.floor(Math.random() * images.length)

    const selectedImage = images[randIndex]
    return selectedImage
}


