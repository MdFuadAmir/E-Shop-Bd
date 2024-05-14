import Heading from "../Shared/Heading";
import img1 from "../../assets/blogs/blog-1.jpg"
import img2 from "../../assets/blogs/blog-2.jpg"
import img3 from "../../assets/blogs/blog-3.jpg"

const blogData = [
    {
        id: 1,
        title: "How to choose perfect smartwatch",
        subTitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores",
        published: "Jan 20, 2024 by Dilshad",
        image: img1
    },
    {
        id: 2,
        title: "How to choose perfect gadget",
        subTitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores",
        published: "Jan 20, 2024 by Satya",
        image: img2
    },
    {
        id: 3,
        title: "How to choose perfect VR headset",
        subTitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores",
        published: "Jan 20, 2024 by Sabir",
        image: img3
    },
]

const Blogs = () => {
    return (
        <div className="my-12">
            <div className="container">
                {/* header section */}
                <div>
                    <Heading title={"Recent News"} subTitle={"Explore Our Blogs"}/>
                </div>
                {/* body section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                    {
                        blogData.map((data) => (
                            <div key={data.id} className="bg-white dark:bg-gray-900">
                                {/* image section */}
                                <div className="overflow-hidden rounded-2xl mb-2">
                                    <img src={data.image} alt="" className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"/>
                                </div>
                                {/* text section */}
                                <div className="space-y-2">
                                    <p className="text-xs text-gray-500">{data.published}</p>
                                    <p className="font-bold line-clamp-1">{data.title}</p>
                                    <p className="text-sm line-clamp-2 text-gray-600 dark:text-gray-400">{data.subTitle}</p>
                                   

                                </div>

                            </div>

                        ))

                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;