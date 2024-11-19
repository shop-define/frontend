import { Button, Carousel, Flex, Image } from 'antd'
import { ReactElement, useState } from 'react'
import { Rate } from 'antd'
import { Card } from 'antd'
import { Typography } from 'antd'
import { HeartOutlined, MessageFilled } from '@ant-design/icons'
import { HeartFilled } from '@ant-design/icons'
import Link from 'next/link'

//https://loremflickr.com/200/200?random=${randomNum}
const { Text } = Typography

const ProductCardDefault: React.FC = () => {
  const [isLoved, setIsLoved] = useState(false)

  const handleAddToLoved = () => {
    setIsLoved((prev) => !prev)
  }
  const getImageItem = (): ReactElement[] => {
    const images = []
    for (let i = 0; i < 5; i++) {
      images.push(
        <Image
          key={i}
          width={'270px'}
          height={'270px'}
          className='product-image'
          placeholder
          //fallback='data:image/png;base64,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'
          //alt='Product'
          preview={false}
        />,
      )
    }
    return images
  }
  return (
    <Flex style={{ position: 'relative', width: 'fit-content', height: 'fit-content' }}>
      <Button
        className='heart'
        style={{ backgroundColor: 'transparent', border: 'none', width: 'fit-content', zIndex: '1' }}
        onClick={handleAddToLoved}
      >
        <HeartFilled
          className='icon__heart-filled'
          style={{
            color: isLoved ? 'rgba(255, 0, 0, 1)' : 'rgba(255, 255, 255, 1)',
            fontSize: '24px',
            position: 'absolute',
          }}
        />
        <HeartOutlined
          className='icon__heart-outlined'
          style={{
            color: 'rgba(43, 43, 43, 1)',
            fontSize: '24px',
            position: 'absolute',
          }}
        />
      </Button>
      <Link href='/product' style={{ textDecoration: 'none', zIndex: '0' }}>
        <Card
          className='card product__card_default'
          hoverable
          style={{
            border: 'none',
            borderRadius: '6px',
            height: '365px',
          }}
        >
          <div className='carousel'>
            <Carousel>{getImageItem()}</Carousel>
          </div>
          <div className='flex-col product__info' style={{ gap: '4px', marginLeft: '10px' }}>
            <div className='flex-row prices' style={{ gap: '12px' }}>
              <Text className='price' style={{ fontSize: '20px', lineHeight: '28px', fontWeight: '600' }}>
                6 789 ₽
              </Text>
              {/* <Text className='currency'>₽</Text> */}
              <Text
                type='secondary'
                disabled
                delete
                className='price'
                style={{ fontSize: '20px', lineHeight: '28px', fontWeight: '400', cursor: 'pointer' }}
              >
                9 999 ₽
              </Text>
              {/* <Text className='currency'></Text> */}
            </div>
            <Text style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '600' }}>Футболка “светлая сторона”</Text>
            <div className='flex-row additional-info'>
              <div className='flex-row rate__container'>
                <Text className='rating-number' style={{ fontSize: '12px', lineHeight: '20px', fontWeight: '600' }}>
                  4.8
                </Text>
                <Rate
                  allowHalf
                  disabled
                  defaultValue={4.8}
                  style={{
                    margin: 0,
                    fontSize: '11px',
                    color: 'rgba(43, 43, 43, 1)',
                    gap: '2px',
                    alignItems: 'center',
                    alignContent: 'center',
                  }}
                />
              </div>
              <div className='flex-row feedback'>
                <MessageFilled
                  style={{ color: 'rgba(0, 0, 0, 0.25)', width: '12px', height: '12px', alignSelf: 'center' }}
                />
                <Text type='secondary'>2680 отзывов</Text>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </Flex>
  )
}

export default ProductCardDefault
