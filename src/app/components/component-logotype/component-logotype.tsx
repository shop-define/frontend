import Image from 'next/image'
import { ReactElement } from 'react'
import Logo from '../../assets/logo.svg'
import Link from 'next/link'

interface Logotype {
  size: 'small' | 'medium'
}
const Logotype: React.FC<Logotype> = ({ size }): ReactElement => {
  const styles = {
    small: {
      fontSize: '32px',
      lineHeight: '32px',
    },
    medium: {
      fontSize: '40px',
      lineHeight: '56px',
    },
  }
  return (
    <Link className='link' href={'/'}>
      <div className='logotype'>
        <Image src={Logo} alt='Логотип' width={40} height={40} />
        <p className='logotype__name' style={styles[size]}>
          Мини Маркет
        </p>
      </div>
    </Link>
  )
}
export default Logotype
