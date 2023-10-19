import { ReactElement } from 'react'

type HeadingProps = {
    title: string
}

const Header = ({ title}: HeadingProps): ReactElement => {
  return <header className='header' ><h1 >{title}</h1></header>
}

export default Header
