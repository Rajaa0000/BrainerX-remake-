import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram ,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
function SocialMedia(){
   const links=['https://www.facebook.com/people/BrainerX/100069819323943/#',
      'https://x.com/brainerx',
      'https://www.instagram.com/brainerx.school/',
      'https://dz.linkedin.com/company/brainerx' ];
 const list=[faFacebook, faTwitter, faInstagram ,faLinkedin].map((item,index)=>
 <Link key={index} className="bg-gray-200 p-[0.2rem] rounded text-center flex items-center
 hover:bg-[#252c4b]"
 href={links[index]}>
    <FontAwesomeIcon icon={item} className="text-white text-[25px] "/>
    </Link>);
 return (
    <div className="flex  gap-[0.5rem]">
        {list}
    </div>
 )
}
export default  SocialMedia