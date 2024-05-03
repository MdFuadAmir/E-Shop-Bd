import Slider from "react-slick";
import image1 from "../../assets/hero/headphone.png"
import image2 from "../../assets/category/vr.png"
import image3 from "../../assets/category/macbook.png"
const heroDatd =[
  {
    id: 1,
    img: image1,
    subtitle: "Beats Solo",
    title: "Wereless",
    title2: "HeadPhone",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolore suscipit debitis totam fuga est? Quibusdam tempore architecto vero eum."
  },
  {
    id: 2,
    img: image2,
    subtitle: "Beats Solo",
    title: "3D",
    title2: "Glass",
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
    <div>
      <div className="w-full"> 
        <Slider {...settings}>
          {
            heroDatd.map((data) =>(
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text- content section */}
                  <div>
                    <h1 className="">{data.subtitle}</h1>
                    <h1 className="">{data.title}</h1>
                    <h1 className="">{data.title2}</h1>
                    <div>
                      
                    </div>

                  </div>
                  {/* image section */}
                  <div>

                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
