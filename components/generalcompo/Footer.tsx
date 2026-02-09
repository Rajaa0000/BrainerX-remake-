'use client';

import styles from './Footer.module.css';
import SocialMedia from '../extraComponents/socialMedia';
import Link from 'next/link';
import Image from 'next/image';

// 1. Define the interface for the link groups
interface LinkGroup {
  name: string;
  links: string[];
}

function Footer() {
  const links: LinkGroup[] = [
    { name: 'Links', links: ['Privacy Policy', 'Terms of Use'] },
    { name: 'Explore', links: ['Features', 'Download'] },
    { name: 'Company', links: ['Our Team'] },
  ];
  const mainLinks: string[] = ['Contact', 'Team', 'Features'];
  const helperLinks: string[] = ['Contact', 'Our Team', 'Features'];

  // 2. Add the string type to the 'name' parameter
  function formatLinkName(name: string): string {
    return name
      .toLowerCase()
      .split(' ')
      .map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join('');
  }

  const Links = links.map((item) => (
    <div key={item.name} className="flex flex-col gap-2">
      <h3 className="font-semibold text-lg">{item.name}</h3>
      {item.links.map((link, index) => {
        let realLink = formatLinkName(link);
        for (let i = 0; i < helperLinks.length; i++) {
          if (link === helperLinks[i]) {
            realLink = `#${mainLinks[i]}`;
            break;
          }
        }

        return (
          <Link
            key={index}
            href={link === 'Download' ? 'https://play.google.com/store/apps/details?id=com.brainerx.app&pli=1' : `/${realLink}`}
            className="text-gray-600 hover:text-[#3763a5]"
          >
            {link}
          </Link>
        );
      })}
    </div>
  ));

  return (
    <footer className="bg-white py-8 px-6 flex flex-col items-center gap-8 border-t border-gray-200">
      <div className="flex flex-col items-center px-[10%] gap-[1rem]">
        <Image
          src="/images/logo.png"
          alt="Company Logo"
          width={120}
          height={40}
          priority
        />
        <p className="text-[#737789] text-center">
          Unlock Your Potential with BrainerX. Learn from Experts. Master
          Practical Skills. Transform Your Life with BrainerX.
        </p>
      </div>

      <div className="flex justify-center gap-12 font-[500] flex-wrap">
        {Links}
      </div>

      <SocialMedia />
    </footer>
  );
}

export default Footer;