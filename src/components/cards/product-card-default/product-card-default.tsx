import { Carousel } from 'antd'

const ProductCardDefault: React.FC = () => {
  const randomNum: number = Math.floor(Math.random() * 10)
  return (
    <div className='card product__card_default'>
      <Carousel className='carousel' arrows infinite={true}>
        <div className='carousel-item'>
          <img className='product-image' src={`https://loremflickr.com/200/200?random=${randomNum}`} alt='Product' />
        </div>
        <div className='carousel-item'>
          <img className='product-image' src={`https://loremflickr.com/200/200?random=${randomNum}`} alt='Product' />
        </div>
        <div className='carousel-item'>
          <img className='product-image' src={`https://loremflickr.com/200/200?random=${randomNum}`} alt='Product' />
        </div>
        <div className='carousel-item'>
          <img className='product-image' src={`https://loremflickr.com/200/200?random=${randomNum}`} alt='Product' />
        </div>
        <div className='carousel-item'>
          <img className='product-image' src={`https://loremflickr.com/200/200?random=${randomNum}`} alt='Product' />
        </div>
      </Carousel>
      <p className='text_large card__text'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascet
      </p>
      <span className='product__price text_extra-large'>
        <span className='price'>9999</span>
        <span className='currency'>₽</span>
      </span>
    </div>
  )
}

export default ProductCardDefault
