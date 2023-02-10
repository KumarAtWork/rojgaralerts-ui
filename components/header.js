import HeaderEN from "./header/header-en"
import HeaderHN from "./header/header-hn"

const Header = ({lang})=>{
  if(lang==='en')
  return(<>
  <HeaderEN></HeaderEN>
  </>)
  else
  return <HeaderHN></HeaderHN>
}

export default Header