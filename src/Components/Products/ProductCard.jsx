import PropTypes from 'prop-types'; 
import Button from '../Shared/Button';

const ProductCard = ({data}) => {
    // const {id,img,title,price,aosDelay} = data;
    return (
        <div className='mb-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center'>
                {/* card section */} 
                {
                    data.map((data) => (
                        <div className='group' key={data.id}>
                            <div className='relative space-y-3'>
                            <img src={data.img} alt="" className='h-[180px] w-[260px] object-cover rounded-md'/>
                            {/* hover button */}
                            <div className='top-1/2 absolute -translate-y-1/2 -translate-x-1/2 left-1/2 w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 h-full hidden group-hover:flex'>
                                <Button text={"Add to cart"} bgColor={"bg-primary"} textColor={"text-white"}/>
                            </div>
                            </div>
                            <div className="leading-7">
                                <h2 className='font-semibold'>{data.title}</h2>
                                <h2 className='font-bold'>{data.price} </h2>
                            </div>
                        </div>

                    ))
                }
            </div>
            
        </div>
    );
};

export default ProductCard;

ProductCard.propTypes ={
    data: PropTypes.object.isRequired
}