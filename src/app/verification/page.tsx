'use client'
import { Form, Typography } from 'antd'
import { InputOTP } from 'antd-input-otp'
import Logotype from '../components/component-logotype/component-logotype'
import { Statistic } from 'antd'
import { useEffect, useState } from 'react'
import Link from 'antd/es/typography/Link'

const { Text } = Typography
const { Countdown } = Statistic

const Verification = () => {
  const [form] = Form.useForm()
  const [sendAgaing, setSendAgain] = useState(false)

  const handleFinish = (values: { otp: string[] }) => {
    const { otp } = values
    if (!otp || otp.includes('')) {
      return form.setFields([
        {
          name: 'otp',
          errors: ['OTP is invalid.'],
        },
      ])
    }
  }
  const handlesetSendAgain = () => {
    if (!sendAgaing) {
      setSendAgain(true)
    } else {
      setSendAgain(false)
    }
  }
  useEffect(() => {}, [sendAgaing])
  const email = 'bober@gmail.com'
  return (
    <div className='flex-col auth verification'>
      <Logotype size='medium' />
      <Text style={{ fontSize: '20px', lineHeight: '28px', fontWeight: '400', marginBottom: '4px' }}>
        Код подтверждения отправлен на почту
      </Text>
      <Text style={{ fontSize: '20px', lineHeight: '28px', fontWeight: '600', marginBottom: '50px' }}>{email}</Text>
      <div className='verification__code__container'>
        <Text style={{ fontSize: '20px', lineHeight: '28px', fontWeight: '600' }}>Код подтверждения</Text>
        <Form form={form} onFinish={handleFinish} style={{ marginTop: '12px' }}>
          <Form.Item name='otp' className='center-error-message' rules={[{ validator: async () => Promise.resolve() }]}>
            <InputOTP inputStyle={{ minWidth: '74px', height: '60px' }} autoFocus inputType='numeric' length={5} />
          </Form.Item>

          <Form.Item className='timer'>
            {sendAgaing ? (
              <Link
                onClick={handlesetSendAgain}
                className='text__send-again'
                underline
                style={{
                  color: 'rgba(70, 90, 213, 1)',
                  fontSize: '20px',
                  lineHeight: '28px',
                  fontWeight: '400',
                  marginBottom: '4px',
                  textUnderlineOffset: '5px',
                }}
              >
                Отправить повторно
              </Link>
            ) : (
              <>
                <Text
                  className='text__send-again'
                  style={{ fontSize: '20px', lineHeight: '28px', fontWeight: '400', marginBottom: '4px' }}
                >
                  Отправить повторно через
                </Text>
                <Countdown
                  style={{ fontSize: '20px', lineHeight: '28px', fontWeight: '500' }}
                  value={Date.now() + 60000}
                  onFinish={handlesetSendAgain}
                  format='mm:ss'
                />
              </>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Verification
