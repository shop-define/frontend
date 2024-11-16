import { ReactElement } from 'react'
import { Flex, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export default function LoadingScreen(): ReactElement {
  return (
    <Flex justify='center' align='center'>
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 48,
            }}
            spin
          />
        }
      />
    </Flex>
  )
}
