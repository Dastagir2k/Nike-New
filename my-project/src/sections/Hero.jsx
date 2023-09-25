import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen 
    gap-10 max-container lg:p-20"
    >
      <div
        className="relative xl:2/5 flex flex-col justify-center items-start 
      w-full max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red">
          Our summer collecetion
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p
          className="font-montserrat text-slate-gray leading-8 mt-6 mb-14 text-lg 
            sm:max-w-sm"
        >
          Discover of Nike Arrivals , quality comfort and comfort for your life
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full pt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-2 flex justify-center items-center xl:min-h-screen  max-xl:p-10 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={500}
          className='object-contain relative z-1 xl:p-10'
          />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image) => (
            <div key={image}>
              <ShoeCard
                index={image}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
        </div>
    </section>
  );
};

export default Hero;

