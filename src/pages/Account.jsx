import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img className='w-full h-[400px] object-cover' 
    src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/e89fdb2e-c0bd-46d9-855d-c63a951376cf/US-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
    </div>
    <div className='bg-black/60 fixted top-0 left-0 w-full h-[550px]'>
<div className='absoulte top-[20%] p-4 md:p-8'>
  <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
</div>
    </div>
    <SavedShows />
    </>
  )
}

export default Account