'use client'
import { GoogleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Input from 'antd/es/input/Input'
import Link from 'next/link'
import { ReactElement, useEffect, useState } from 'react'
import { POSTEmailData } from '../../api/auth/route'
import Logotype from '../components/component-logotype/component-logotype'
import Title from 'antd/es/typography/Title'
import Paragraph from 'antd/es/typography/Paragraph'

export default function (): ReactElement {
  const [disabled, setDisabled] = useState(true)
  const [email, setEmail] = useState('')

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    handleButtonAwaliable()
  }

  const handleButtonAwaliable = () => {
    if (email.trim() !== '') {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }
  const handleSubmit = async () => {
    try {
      await POSTEmailData(email)
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }
  useEffect(() => {
    handleButtonAwaliable()
  })
  return (
    <div className='auth flex-col'>
      <Logotype size='medium' />
      <Title level={2} style={{ marginBottom: '40px' }}>
        Вход
      </Title>
      <div className='activity__container flex-col'>
        <Button
          icon={<GoogleOutlined />}
          style={{ margin: '0', padding: '0', width: '100%', height: '64px' }}
          type='default'
        >
          Google
        </Button>
        <div className='flex-row lines__or'>
          <div className='line'></div>
          <Paragraph
            type='secondary'
            style={{
              margin: '0',
              color: 'rgba(43, 43, 43, 0.7)',
              fontSize: '20px',
              lineHeight: '28px',
              fontWeight: '400',
            }}
          >
            Или
          </Paragraph>
          <div className='line'></div>
        </div>
        <Title level={4} style={{ width: '100%', margin: '0' }}>
          Авторизируйтесь с помощью почты
        </Title>
        <div>
          <Paragraph
            style={{ width: '100%', marginBottom: '1px', fontSize: '20px', lineHeight: '28px', fontWeight: '400' }}
          >
            Почта
          </Paragraph>
          <Input className='auth__header' style={{ height: '52px' }} onChange={handleEmailChange} />
        </div>
        <Link href='/verification' style={{ width: '100%' }}>
          <Button
            className='auth__button'
            type='primary'
            disabled={disabled}
            onClick={handleSubmit}
            style={{ width: '100%', height: '56px', fontWeight: '600' }}
          >
            Отправить код
          </Button>
        </Link>
      </div>
    </div>
  )
}
