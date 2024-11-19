'use client'
import { ReactElement } from 'react'
import ProductCardDefault from '../cards/product-card-default/product-card-default'

interface ProductList {
  count: number
}

const ProductList: React.FC<ProductList> = ({ count }): ReactElement => {
  const Cards = (): ReactElement[] => {
    const cardsArr = []
    for (let i: number = 0; i < +count; i++) {
      cardsArr.push(<ProductCardDefault key={i} />)
    }
    return cardsArr
  }
  return <main className='flex-row main__product-list'>{Cards()}</main>
}

export default ProductList
