import { GoogleCircleFilled, UserOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'
import Input from 'antd/es/input/Input'
import Link from 'next/link'
import { ReactElement } from 'react'

export default function (): ReactElement {
  return (
    <div className='auth'>
      <h1 className='auth-header'>Авторизация</h1>
      <Input prefix={<UserOutlined />} placeholder='Email' size='large' />
      <Button>
        <Layout>Google</Layout>
        <GoogleCircleFilled />
      </Button>
      <Link href='/verification'>
        <Button type='primary'>Отправить код</Button>
      </Link>
    </div>
  )
}
