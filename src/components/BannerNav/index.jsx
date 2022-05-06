import Image from 'next/image';

import bannerNav from '/public/images/banners/banner.png'

export function BannerNav() {
  return (
    <Image src={bannerNav} alt="banner" />
  )
}