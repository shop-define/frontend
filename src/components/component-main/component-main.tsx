import { ReactElement } from 'react'
import ProductCardDefault from '../cards/product-card-default/product-card-default'

export default function (): ReactElement {
  const Cards = (): ReactElement[] => {
    const cardsArr = []
    for (let i: number = 0; i < 30; i++) {
      cardsArr.push(<ProductCardDefault />)
    }
    return cardsArr
  }
  return <main className='flex-row main__product-list'>{Cards()}</main>
}
