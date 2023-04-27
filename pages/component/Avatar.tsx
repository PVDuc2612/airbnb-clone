'use client'

import Image from 'next/image'

const Avatar = () => {
    return  (
        <Image 
            className='rounded-full'
            alt="avatar"
            src="/image/placeholder.jpg"
            height="30"
            width="30"
        />
    )
}
export default Avatar
