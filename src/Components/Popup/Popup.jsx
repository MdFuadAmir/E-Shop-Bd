import { IoCloseCircleOutline } from "react-icons/io5";
import Button from "../Shared/Button";

const Popup = ({orderPopup,handleOrderPopup}) => {

    return (
        <>
        {
            orderPopup && (
                <div>
            <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
                <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 w-[300px] rounded-md'>
                    {/* // header section */}
                    <div className="flex justify-between">
                        <h1 className="font-bold text-xl">Order Now</h1>
                        <div>
                            <IoCloseCircleOutline className="text-2xl cursor-pointer"
                            onClick={handleOrderPopup}/>
                        </div>
                    </div>
                    {/* // from section */}
                    <div className="mt-4">
                        <input type="text" placeholder="Name" className="form-input" />
                        <input type="email" placeholder="Email" className="form-input" />
                        <input type="text" placeholder="Address" className="form-input" />
                        <div className="flex justify-center">
                        <Button text="Order Now" bgColor={"bg-primary"} textColor={"text-white"}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
                
            )
        },
        </>
        
    );
};

export default Popup;