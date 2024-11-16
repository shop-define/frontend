'use client'
import { Button, Form } from 'antd'
import { InputOTP } from 'antd-input-otp'

const Verification = () => {
  const [form] = Form.useForm()

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
  const mail = 'bober@gmail.com'
  return (
    <div className='auth'>
      <h1 className='auth-header'>Код подтверждения</h1>
      <p className='text-large auth-text'>На почту {mail} был отправлен код подтверждения</p>
      <Form form={form} onFinish={handleFinish}>
        <Form.Item name='otp' className='center-error-message' rules={[{ validator: async () => Promise.resolve() }]}>
          <InputOTP autoFocus inputType='numeric' length={4} />
        </Form.Item>

        <Form.Item noStyle>
          <Button block htmlType='submit' type='primary'>
            Авторизоваться
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Verification
