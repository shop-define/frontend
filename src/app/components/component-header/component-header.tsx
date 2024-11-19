'use client'
import Logotype from '../component-logotype/component-logotype'
import {
  HeartOutlined,
  InboxOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  UserOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import Button from 'antd/es/button'
import Link from 'next/link'
import { Flex } from 'antd'
import { useState } from 'react'
import Search from 'antd/es/input/Search'

export default function HeaderComponent() {
  const [showInput, setShowInput] = useState(false)
  const handleShowInput = () => {
    if (!showInput) {
      setShowInput(true)
      document.querySelector('.header-input')?.classList.add('active')
      document.querySelector('.header-container')?.classList.add('hidden')
    } else {
      setShowInput(false)
      document.querySelector('.header-input')?.classList.remove('active')
      document.querySelector('.header-container')?.classList.remove('hidden')
    }
  }
  return (
    <>
      <Flex
        gap={8}
        align='center'
        className='header-input'
        style={{ position: 'absolute', width: '60%', top: '-50px', zIndex: '1', transition: '1s' }}
      >
        <Search size='large' />
        <Button color='default' variant='text' style={{ padding: '2px 5px' }} onClick={handleShowInput}>
          <CloseOutlined type='secondary' style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 0.88)' }} />
        </Button>
      </Flex>
      <header className='flex-row header' style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
        <Flex
          className='header-container'
          justify='space-between'
          align='center'
          style={{ width: '100%', opacity: '1', transition: '1s' }}
        >
          <div className='header__left-side'>
            <Logotype size='small' />
            <Button
              type='primary'
              style={{ background: 'rgba(70, 90, 213, 1)', height: '40px', width: '123px', boxShadow: 'none' }}
            >
              <MenuOutlined />
              <p className='text_large header__catalog__text'>Каталог</p>
            </Button>
          </div>
          <nav className='navigation'>
            <ul className='list flex-row navigation-list'>
              <li className='navigation__item'>
                <a className='link navigation__item__link navigation__item__link_active' href='#'>
                  <div className='navigation__item__link__container'>
                    <SearchOutlined style={{ fontSize: '24px' }} onClick={handleShowInput} />
                  </div>
                </a>
              </li>
              <li className='navigation__item'>
                <a className='link navigation__item__link navigation__item__link_active' href='#'>
                  <div className='navigation__item__link__container'>
                    <InboxOutlined style={{ fontSize: '24px' }} />
                  </div>
                </a>
              </li>
              <li>
                <a className='link navigation__item__link' href='/loved'>
                  <div className='navigation__item__link__container'>
                    <HeartOutlined style={{ fontSize: '24px' }} />
                  </div>
                </a>
              </li>
              <li className='navigation__item'>
                <Link className='link navigation__item__link' href='/cart'>
                  <div className='navigation__item__link__container'>
                    <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                  </div>
                </Link>
              </li>
              <li className='navigation__item'>
                <Link className='link navigation__item__link' href='/auth'>
                  <div className='navigation__item__link__container'>
                    <UserOutlined style={{ fontSize: '24px' }} />
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </Flex>
      </header>
      <div className='line'></div>
    </>
  )
}
