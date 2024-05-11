import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import image1 from "../../assets/product/p-1.jpg"
import image2 from "../../assets/product/p-2.jpg"
import image3 from "../../assets/product/p-3.jpg"
import image4 from "../../assets/product/p-4.jpg"
import image5 from "../../assets/product/p-5.jpg"
import image6 from "../../assets/product/p-9.jpg"
import image7 from "../../assets/product/p-7.jpg"


const productData =[
    {
        id: 1,
        img: image1,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0"
    },    
    {
        id: 2,
        img: image2,
        title: "Rocky Mountain",
        price: "420",
        aosDelay: "200"
    },    
    {
        id: 3,
        img: image3,
        title: "Googles",
        price: "320",
        aosDelay: "400"
    },    
    {
        id: 4,
        img: image4,
        title: "Printed",
        price: "220",
        aosDelay: "600"
    },
    {
        id: 5,
        img: image5,
        title: "Printed",
        price: "220",
        aosDelay: "600"
    },
    {
        id: 6,
        img: image6,
        title: "Printed",
        price: "220",
        aosDelay: "600"
    },
    {
        id: 7,
        img: image7,
        title: "Printed",
        price: "220",
        aosDelay: "600"
    },
]


const Products = () => {
    return (
        <div>
            <div className="container">
                {/* header section */}
                <div>
                    <Heading title={"Our Product"} subTitle={"Explore Our Products"}/>
                </div>
                {/* body section */}
                <div>
                    <ProductCard data={productData}/>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Products;