import FooterEN from "./footer/footer-en";
import FooterHN from "./footer/footer-hn";
const Footer = ({lang}) => {
  if(lang==='en')
  return (
    <>
<FooterEN></FooterEN>
    </>
  );
  else
  return <FooterHN></FooterHN>
};

export default Footer;
