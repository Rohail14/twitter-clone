/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import SidebarLink from './SidebarLink'
import { HomeIcon } from '@heroicons/react/solid'
import {BellIcon, BookmarkIcon, ClipboardListIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'

function Sidebar() {
    const { data:session } = useSession();

  return (
    <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full'>
        <div className='flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24'>
            <Image src='https://rb.gy/ogau5a' width={30} height={30} />
        </div>
        <div>
            <div className='space-y-2.5 mt-4 mb-2.5 xl:ml-24'>
                <SidebarLink text="Home" Icon={HomeIcon} active />
                <SidebarLink text="Explore" Icon={HashtagIcon} />
                <SidebarLink text="Notifications" Icon={BellIcon} />
                <SidebarLink text="Messages" Icon={InboxIcon} />
                <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarLink text="Lists" Icon={ClipboardListIcon} />
                <SidebarLink text="Profile" Icon={UserIcon} />
                <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
            </div>
        </div>
        <div className='hidden xl:inline mt-9 ml-auto bg-[#1d9bf0] text-white rounded-full shadow-md hover:bg-[#1a8cd8] text-lg font-bold'>
            <button className='w-56 h-[52px]'>
                Tweet
            </button>
        </div>
       
        <div className='text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto'
        onClick={signOut}>
            <img 
            src={session.user.image} 
            alt='' 
            className='h-10 w-10 rounded-full xl:mr-2.5'/>

            <div className='hidden xl:inline leading-5'>
                <h4 className='font-bold'>{session.user.name}</h4>
                <p className='text-[#6e767d]'>@{session.user.tag}</p>
            </div>
            <DotsHorizontalIcon className='h-5 hidden xl:inline ml-10'/>
        </div>
    </div>
  )
}

export default Sidebar