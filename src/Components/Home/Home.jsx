import Category from "../Category/Category";
import Category2 from "../Category/Category2";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <Header />
            <Hero />
            <Category />
            <Category2 />
            <Services/>
            
        </div>
    );
};

export default Home;