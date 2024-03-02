import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProduct = () => {
  return (
    <section id="products"
    className="max-container max-md:mt-13">
      <div className="flex flex-col justify-start gap-6">
        <h2 className="text-4xl font-palanquin font-bold">Our 
        <span className="text-coral-red inline-block p-2">Popular</span>
        Products</h2>
        <p className="lg:max-w-lg mt-3 font-montserrat text-slate-gray">Experiece our populra products which make you comfortable
          and stylsh design.Discover the world of comdorst design,Price 
          and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4
       md:grid-cols-3 
      sm:grid-cols-1 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product)=>(
          <PopularProductCard  key={product.name}{...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProduct