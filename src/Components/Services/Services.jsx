import { FaCarSide } from "react-icons/fa6";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const serviceData =[
    {
        id:1,
        icon: <FaCarSide className="text-xl md:text-5xl text-primary"/>,
        title: "Free Shipping",
        description: "fFree Sheeping on all order"
    },
    {
        id:2,
        icon: <FaCheckCircle className="text-xl md:text-5xl text-primary"/>,
        title: "Safe Money",
        description: "30 Days Money Back"
    },
    {
        id:3,
        icon: <FaWallet className="text-xl md:text-5xl text-primary"/>,
        title: "Secure Payment",
        description: "All Payment Secure"
    },
    {
        id:4,
        icon: <FaHeadphonesAlt className="text-xl md:text-5xl text-primary"/>,
        title: "Online Suppory 24/7",
        description: "Technical Support 24/7"
    }
]
const Services = () => {
    return (
        <div>
            <div className="container my-14 md:my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                    {
                        serviceData.map((data) => (
                    <div key={data.id} className="flex flex-col  items-start sm:flex-row gap-4">
                        {data.icon}
                        <div>
                            <h1 className="text-xl font-bold">{data.title}</h1>
                            <h1 className="text-gray-400 text-sm">{data.description}</h1>
                        </div>
                    </div>
                        ))
                    }

                </div>

            </div>
            
        </div>
    );
};

export default Services;