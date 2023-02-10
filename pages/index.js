import { useRouter } from "next/router"
import IndexEN from "./index-en";
import IndexHN from "./index-hn";
export default function index(){
  const {locale} = useRouter();
  if(locale==='en-us')
  return(<>
  <IndexEN></IndexEN>
  </>)
  else
  return(<>
  <IndexHN></IndexHN>
  </>)
}

