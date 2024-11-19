import Logotype from '../component-logotype/component-logotype'
import { InstagramOutlined, YoutubeOutlined } from '@ant-design/icons'
//import Link from 'next/link'
import Link from 'antd/es/typography/Link'

export default function Footer() {
  const miniMarketItems = ['Мини Маркет', 'Главная', 'Личный кабинет', 'Заказы', 'Корзина', 'Избранные товары']
  const earnItems = [
    'Зарабатывать',
    'Стать продавцом',
    'Что продавать',
    'Стать поставщиком',
    'Стать портнёром',
    'Открыть пункт выдачи',
  ]
  const helpItems = [
    'Помощь',
    'Как оформить заказ на сайте?',
    'Какие способы оплаты доступны?',
    'Как отслеживать мой заказ?',
    'Как изменить или отменить заказ?',
    'Что делать, если я получил(а) товар с браком?',
  ]
  const iterator = (items: string[]) => {
    return items.map((item: string, index: number) => (
      <li key={index} className='footer__list__item'>
        <Link style={{ color: 'rgba(255, 255, 255, 0.6)' }} className='link footer__item__link' href='/'>
          {item}
        </Link>
      </li>
    ))
  }
  return (
    <>
      <footer className='footer'>
        <div className='footer__container flex-row'>
          <div className='flex-col footer__logo-social'>
            <Logotype size='small' />
            <div className='socials flex-row'>
              <p className='text_regular'>Соцсети</p>
              <Link style={{ color: 'rgba(255, 255, 255, 1)' }} href={'/'}>
                <InstagramOutlined className='icon' />
              </Link>
              <Link style={{ color: 'rgba(255, 255, 255, 1)' }} href={'/'}>
                <YoutubeOutlined className='icon' />
              </Link>
            </div>
          </div>
          <div className='footer__info flex-row'>
            <ul className='list footer__list list__minimarket'>{iterator(miniMarketItems)}</ul>
            <ul className='list footer__list list__earn'>{iterator(earnItems)}</ul>
            <ul className='list footer__list list__help'>{iterator(helpItems)}</ul>
          </div>
        </div>
      </footer>
    </>
  )
}
