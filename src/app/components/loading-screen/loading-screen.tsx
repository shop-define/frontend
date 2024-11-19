import { ReactElement } from 'react'
import { Flex, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export default function LoadingScreen(): ReactElement {
  return (
    <Flex
      justify='center'
      align='center'
      style={{ width: '100vw', height: '100vh', backdropFilter: 'blur(2px)', position: 'absolute' }}
    >
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 96,
            }}
            spin
          />
        }
      />
    </Flex>
  )
}
