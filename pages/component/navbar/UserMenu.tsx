'use client'
import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar'
import { useCallback, useState } from 'react'
import MenuItem from './MenuItems'
import useRegisterModal from '@/pages/hooks/useRegisterModal'



const Usermenu = () => {
    const registerModal = useRegisterModal()
    const [toggle, setToggle]= useState(false)

    const toggleOppen = useCallback(() => {
        setToggle((value) => !value)
    },[])

    return (
        <div className="relative">
            <div className="flex flex-row text-center gap-3">
                <div onClick={() => {}}
                     className="hidden
                                md:block
                                text-sm 
                                font-semibold 
                                py-3 
                                px-4 
                                rounded-full 
                                hover:bg-neutral-100 
                                transition 
                                cursor-pointer"
                >
                    Airbnb your home
                </div>
                <div onClick={toggleOppen}
                     className="
                                px-2
                                text-[20px]
                                border-neutral-200 
                                flex 
                                flex-row 
                                items-center 
                                gap-3 
                                shadow-sm
                                border-[1px]
                                rounded-full 
                                cursor-pointer 
                                hover:text-rose-600
                                transition"
                >
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar />
                    </div>
                </div>
            </div>
            {toggle && (
                <div className='absolute rounded-xl shadow-sm w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <>
                            <MenuItem onClick={() => {}}
                                label="Login"
                            />
                            <MenuItem onClick={registerModal.onOpen}
                                label="Sign up"
                            />
                        </>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Usermenu