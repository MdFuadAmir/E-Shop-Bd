import image1 from "../../assets/category/earphone.png"
import image2 from "../../assets/category/watch.png"
import image3 from "../../assets/category/macbook.png"
import Button from "../Shared/Button";

const Category = () => {
    return (
        <div className="py-8">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* first colum */}
                    <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
                        <div>
                            <div className="mb-4">
                                <p className="mb-2 text-gray-400">Enjoy</p>
                                <p className="mb-2 text-2xl font-semibold">With</p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Earphone</p>
                                <Button text="Browse" bgColor={"bg-primary"} textColor={"text-white"}/>
                            </div>
                        </div>
                        <img src={image1} alt="" className="w-[320px] absolute bottom-0"/>
                    </div>
                    {/* second colum */}
                    <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
                        <div>
                            <div className="mb-4">
                                <p className="mb-2 text-gray-400">Enjoy</p>
                                <p className="mb-2 text-2xl font-semibold">With</p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Gadget</p>
                                <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandYellow"}/>
                            </div>
                        </div>
                        <img src={image2} alt="" className="w-[320px] absolute -right-4 lg:top-[40px]"/>
                    </div>
                    {/* third colum */}
                    <div className="py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end sm:col-span-2">
                        <div>
                            <div className="mb-4">
                                <p className="mb-2 text-gray-400">Enjoy</p>
                                <p className="mb-2 text-2xl font-semibold">With</p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Laptop</p>
                                <Button text="Browse" bgColor={"bg-white"} textColor={"text-primary"}/>
                            </div>
                        </div>
                        <img src={image3} alt="" className="w-[320px] absolute top-1/2 -translate-y-1/2 -right-0"/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Category;