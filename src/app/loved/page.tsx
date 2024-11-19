'use client'
import Image from 'next/image'
import Header from '../components/component-header/component-header'
import Footer from '../components/component-footer/component-footer'
import { Breadcrumb, Button, Flex } from 'antd'
import LovedPlaceHolder from '../assets/loved_empty.svg'
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
              title: <a href='/'>Избранное</a>,
            },
          ]}
        />
        <Title style={{ margin: 0 }}>Избранное</Title>
      </Flex>
      <Flex align='center' vertical style={{ maxWidth: '291px', marginBottom: '100px' }}>
        <Image src={LovedPlaceHolder} alt='placeholder' style={{ marginBottom: '24px' }} />
        <Title level={2} style={{ margin: 0, marginBottom: '11.5px' }}>
          Список пуст
        </Title>
        <Text
          type='secondary'
          style={{ textAlign: 'center', fontSize: '1em', lineHeight: '1.5em', fontWeight: '400', marginBottom: '24px' }}
        >
          У вас в списке еще ничего нет. Никогда не поздно это изменить :)
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
