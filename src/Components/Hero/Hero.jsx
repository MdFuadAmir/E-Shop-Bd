import Slider from "react-slick";
import image1 from "../../assets/hero/headphone.png"
import image2 from "../../assets/category/vr.png"
import image3 from "../../assets/category/macbook.png"
import Button from "../Shared/Button";
const heroDatd =[
  {
    id: 1,
    img: image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "HeadPhone",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolore suscipit debitis totam fuga est? Quibusdam tempore architecto vero eum."
  },
  {
    id: 2,
    img: image2,
    subtitle: "Beats Solo",
    title: "3D Glass",
    title2: "Display",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolore suscipit debitis totam fuga est? Quibusdam tempore architecto vero eum."
  },
  {
    id: 3,
    img: image3,
    subtitle: "Beats Solo",
    title: "Macbook",
    title2: "Pro",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolore suscipit debitis totam fuga est? Quibusdam tempore architecto vero eum."
  }
]

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoPlaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center"> 
      <div className="container pb-8 sm:pb-0">
        {/* hero section */}
        <Slider {...settings}>
          {
            heroDatd.map((data) =>(
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text- content section */}
                  <div className="flex flex-col justify-center gap-4  sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-2xl lg:text-2xl sm:text-6xl font-bold">{data.subtitle}</h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                    <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:ext-[150px] font-bold">{data.title2}</h1>
                    <div>
                      <Button text="Shop by Category" bgColor="bg-primary" textColor="text-white"></Button>
                    </div>
                  </div>
                  {/* image section */}
                  <div className="order-1 sm:order-2">
                    <div>
                      <img src={data.img} alt="" className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"/>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>

      </div>
      </div>
    </div>
  );
};

export default Hero;
