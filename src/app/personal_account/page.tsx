'use client'
import { Breadcrumb, Button, Card, Flex } from 'antd'
import Header from '../components/component-header/component-header'
import Footer from '../components/component-footer/component-footer'
import Title from 'antd/es/typography/Title'
import { Typography } from 'antd'
import {
  HeartOutlined,
  InboxOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  RightOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import Link from 'antd/es/typography/Link'

const { Text } = Typography
export default function ProductCardPage() {
  return (
    <>
      <Header />
      <div className='root'>
        <Flex justify='flex-start' style={{ width: '100%' }}>
          <Breadcrumb
            items={[
              {
                title: <a href='/'>Главная</a>,
              },
              {
                title: <a href=''>Личный кабинет</a>,
              },
            ]}
          />
        </Flex>
        <Title level={2}>Личный кабинет</Title>
        <Flex gap={8} wrap>
          <Card hoverable style={{ width: '793px' }}>
            <Flex justify='space-between' style={{ width: '100%', height: '100%' }}>
              <Flex vertical>
                <Text type='secondary'>Личные данные</Text>
                <Title>Коноплёв Роман</Title>
                <Text type='secondary'>konoplev@gmail.com</Text>
              </Flex>
              <Flex vertical justify='space-between'>
                <Link>
                  <RightOutlined />
                </Link>
                <Button icon={<LogoutOutlined />} type='default'>
                  Выйти
                </Button>
              </Flex>
            </Flex>
          </Card>
          <Card hoverable style={{ width: '386px' }}>
            <Flex justify='space-between' style={{ width: '100%', height: '100%' }}>
              <Flex vertical>
                <QuestionCircleOutlined style={{ fontSize: '76px' }} />
                <Title>Помощь</Title>
                <Text type='secondary'>Задать вопрос</Text>
              </Flex>
              <Flex vertical justify='space-between'>
                <Link>
                  <RightOutlined />
                </Link>
              </Flex>
            </Flex>
          </Card>
          <Card hoverable style={{ width: '386px' }}>
            <Flex justify='space-between' style={{ width: '100%', height: '100%' }}>
              <Flex vertical>
                <InboxOutlined style={{ fontSize: '76px' }} />
                <Title>Заказы</Title>
                <Text type='secondary'>6 товаров</Text>
              </Flex>
              <Flex vertical justify='space-between'>
                <Link>
                  <RightOutlined />
                </Link>
              </Flex>
            </Flex>
          </Card>
          <Card hoverable style={{ width: '386px' }}>
            <Flex justify='space-between' style={{ width: '100%', height: '100%' }}>
              <Flex vertical>
                <HeartOutlined style={{ fontSize: '76px' }} />
                <Title>Избранное</Title>
                <Text type='secondary'>6 товаров</Text>
              </Flex>
              <Flex vertical justify='space-between'>
                <Link>
                  <RightOutlined />
                </Link>
              </Flex>
            </Flex>
          </Card>
          <Card hoverable style={{ width: '386px' }}>
            <Flex justify='space-between' style={{ width: '100%', height: '100%' }}>
              <Flex vertical>
                <ShoppingCartOutlined style={{ fontSize: '76px' }} />
                <Title>Корзина</Title>
                <Text type='secondary'>6 товаров</Text>
              </Flex>
              <Flex vertical justify='space-between'>
                <Link>
                  <RightOutlined />
                </Link>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </div>
      <Footer />
    </>
  )
}
