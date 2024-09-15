import { Link } from 'react-router-dom'

type heroProductProp = {
  heroProduct: {
    background: string
    productImg: string
    productText: string
    id: number}
}

function HeroProduct(prop:heroProductProp) {
  const {background,productImg,productText,id} = prop.heroProduct
  return (
    <Link to={`/product/${id}`} className={`${background} w-full min-h-[460px] md:h-[460px] bg-right md:bg-center bg-cover rounded-xl flex flex-col md:flex-row justify-center items-center pb-10 md:pb-0`}>
      <div className="w-full md:w-1/2 h-full flex justify-center p-10 items-center">
        <img className='w-[90%] md:w-[65%] mt-16' src={productImg} alt="product" />
      </div>
      <div className="w-full md:w-1/2 h-full flex justify-center p-10 items-center ">
        <img className='w-[90%] md:w-[60%]' src={productText} alt="Text" />
      </div>
    </Link>
  )
}

export default HeroProduct