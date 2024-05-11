import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Category2 from "../Category/Category2";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import headphone from "../../assets/hero/headphone.png"
import Products from "../Products/Products";
import Banner2 from "../Banner/Banner2";
import smartWash from "../../assets/category/smartwatch2-removebg-preview.png"

const bannerData ={
    discount: "30% OFF",
    title: "Fine Smile",
    date: "7 may to 15 may",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente amet necessitatibus numquam minus dicta placeat quae minima cupiditate.",
    bgColor: "#f42c37",
}
const bannerData2 ={
    discount: "30% OFF",
    title: "HAPPY HOURS",
    date: "11 may to 28 may",
    image: smartWash,
    title2: "Smart Solo",
    title3: "Winter Sale",
    title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente amet necessitatibus numquam minus dicta placeat quae minima cupiditate.",
    bgColor: "#2dcc6f",
}

const Home = () => {
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <Header />
            <Hero />
            <Category />
            <Category2 />
            <Services/>
            <Banner data={bannerData}/>
            <Products />
            <Banner2 data={bannerData2}/>
        </div>
    );
};

export default Home;