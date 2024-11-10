import { ReactElement } from 'react'
import Search from 'antd/es/input/Search'
import { AppstoreTwoTone, HeartTwoTone, HomeTwoTone, ShoppingTwoTone, SignalFilled } from '@ant-design/icons'
import Button from 'antd/es/button'
export default function (): ReactElement {
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
          <a className='link navigation__item__link' href='#'>
            <div className='navigation__item__link__container'>
              <HomeTwoTone style={{ fontSize: '24px' }} />
              <p className='text_small'>Личный кабинет</p>
            </div>
          </a>
        </li>
      </ul>
      {/* <div className='input__container'>
        <Input size='large' type='icon' placeholder='Найти товары' />
        <Search size='large' placeholder='Найти товары' />
        <Button type='default' size='large' content='icon' icon='Search' />
        <input className='input header__input' type='text' placeholder='Найти товары' />
        <div className='input search'>
          {' '}
          <img className='icon header__icon__search' src='/src/assets/Search.svg' alt='Поиск' />
        </div>
      </div> */}
    </header>
  )
}
