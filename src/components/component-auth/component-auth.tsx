import Input from 'antd/es/input/Input'
import { ReactElement } from 'react'

export default function (): ReactElement {
  return (
    <div className='auth'>
      <h1 className='auth-header'>Авторизация</h1>
      <Input />
    </div>
  )
}
