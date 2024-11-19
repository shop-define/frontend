import Footer from './components/component-footer/component-footer'
import Header from './components/component-header/component-header'
import ProductList from './components/component-main/component-product-list'

export default function Home() {
  return (
    <>
      <Header />
      <ProductList count={15} />
      <Footer />
    </>
  )
}
