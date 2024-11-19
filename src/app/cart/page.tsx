'use client'
import Image from 'next/image'
import Header from '../components/component-header/component-header'
import Footer from '../components/component-footer/component-footer'
import { Breadcrumb, Button, Flex } from 'antd'
import CartPlaceHolder from '../assets/cart_empty.svg'
import { Typography } from 'antd'
import Title from 'antd/es/typography/Title'

const { Text } = Typography
export default function LovedProducts(): JSX.Element {
  return (
    <>
      <Header />
      <Flex vertical gap={24} style={{ width: '1200px' }}>
        <Breadcrumb
          items={[
            {
              title: <a href='/'>Главная</a>,
            },
            {
              title: <a href='/'>Личный кабинет</a>,
            },
            {
              title: <a href='/'>Корзина</a>,
            },
          ]}
        />
        <Title style={{ margin: 0 }}>Корзина</Title>
      </Flex>
      <Flex align='center' vertical style={{ marginBottom: '100px' }}>
        <Image src={CartPlaceHolder} alt='placeholder' style={{ marginBottom: '24px' }} />
        <Title level={2} style={{ margin: 0, marginBottom: '11.5px' }}>
          Корзина пуста
        </Title>
        <Text
          type='secondary'
          style={{ textAlign: 'center', fontSize: '1em', lineHeight: '1.5em', fontWeight: '400', marginBottom: '24px' }}
        >
          Начните добавлять товары и наслаждайтесь покупками!
        </Text>
        <Button
          href='/'
          type='primary'
          style={{
            backgroundColor: 'rgba(70, 90, 213, 1)',
            fontSize: '17px',
            lineHeight: '22px',
            fontWeight: '500',
            height: '44px',
            width: '131px',
          }}
        >
          К покупкам
        </Button>
      </Flex>
      <Footer />
    </>
  )
}
