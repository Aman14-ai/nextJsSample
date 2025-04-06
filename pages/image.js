import Image from "next/image";

import foodImage from "../public/food_23.png";

const image = () => {
    return (
        <div>
            <h1>Image Page</h1>
            <p>This is the image page.</p>
            {/* <Image src={foodImage} alt="Food Image" width={500} height={500} />
            <p>Image from public folder</p> */}
            {/* <Image src="/food_23.png" alt="Food Image" width={500} height={500} />
            <p>Image from public folder</p> */}

            <Image src='https://t4.ftcdn.net/jpg/05/50/95/87/360_F_550958748_OeGcRonEUNoVhd0wjd9zSEMhLFIGO9Bt.jpg' alt="image" 
             width={500} height={250} />
        </div>
    );  
}

export default image;