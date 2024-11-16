'use client'
import { ReactElement } from 'react'
import Search from 'antd/es/input/Search'
import { AppstoreTwoTone, HeartTwoTone, HomeTwoTone, ShoppingTwoTone, SignalFilled } from '@ant-design/icons'
import Button from 'antd/es/button'
import Link from 'next/link'

export default function Header(): ReactElement {
  return (
    <header className='flex-row header'>
      <div className='logo header__logo'>
        <p className='text_large logo__text'>МИНИМАРКЕТ</p>
      </div>
      <div className='header__catalog'>
        <Button style={{ background: '#2f54eb', height: '100%', width: '100%' }}>
          <SignalFilled style={{ fontSize: '24px', rotate: '-90deg', color: '#ffffff' }} />
          <p className='text_large header__catalog__text'>Каталог</p>
        </Button>
      </div>
      <div className='input-field_extra-large'>
        <Search size='large' placeholder='Найти товары' />
      </div>
      <ul className='list flex-row navigation'>
        <li className='navigation__item'>
          <a className='link navigation__item__link navigation__item__link_active' href='#'>
            <div className='navigation__item__link__container'>
              <AppstoreTwoTone style={{ fontSize: '24px' }} />
              <p className='text_small'>Заказы</p>
            </div>
          </a>
        </li>
        <li className='navigation__item'>
          <a className='link navigation__item__link' href='#'>
            <div className='navigation__item__link__container'>
              <HeartTwoTone style={{ fontSize: '24px' }} />
              <p className='text_small'>Избранное</p>
            </div>
          </a>
        </li>
        <li className='navigation__item'>
          <a className='link navigation__item__link' href='#'>
            <div className='navigation__item__link__container'>
              <ShoppingTwoTone style={{ fontSize: '24px' }} />
              <p className='text_small'>Корзина</p>
            </div>
          </a>
        </li>
        <li className='navigation__item'>
          <Link className='link navigation__item__link' href='/auth'>
            <div className='navigation__item__link__container'>
              <HomeTwoTone style={{ fontSize: '24px' }} />
              <p className='text_small'>Личный кабинет</p>
            </div>
          </Link>
        </li>
      </ul>
    </header>
  )
}
