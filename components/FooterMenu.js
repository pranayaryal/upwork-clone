// UpworkUserId = 87abd5279bda40e3b3ceacc590213b15
'use client'
import { useState } from 'react';
import FooterMenuPart from './FooterMenuPart';



const FooterMenu = (props) => {

  const forClients = ["How to Hire",
    "Talent Marketplace", "Project Catalog",
    "Talent Scout", "Hire an Agency", "Enterprise",
    "Any Hire", "Contract to Hire", "Direct Contracts",
    "Hire Worldwide", "Hire in the USA"];

  const forTalent = ["How to Find Work",
    "Direct Contracts", "Find Freelance Jobs WorldWide",
    "Find Freelance Jobs in the USA"]

  const resources = ["Help and Support",
    "Success Stories", "Upwork Reviews",
    "Resources", "Blog", "Community",
    "Affiliate Program", "Free Business Tools"]

  const company = ["About Us", "Leadership", "Investor Relations",
    "Careers", "Press", "Trust, Safety & Security",
    "Terms of Service"]

  return (

    <div className='md:hidden text-white px-4 py-6'>
      <FooterMenuPart
        heading='For Clients'
        dropdown={forClients} />
      <FooterMenuPart
        heading='For Talent'
        dropdown={forTalent} />
      <FooterMenuPart
        heading='Resources'
        dropdown={resources} />
      <FooterMenuPart
        heading='Company'
        dropdown={company} />

      <p className='mt-16 text-sm'>Follow Us</p>
      <div className='flex mt-3 space-x-3'>
        <button className='flex rounded-full w-10 h-10 border border-white justify-center items-center'>
          <svg
            className='w-8 h-8 text-white'
            xmlns="http://www.w3.org/2000/svg" fill="white" aria-hidden="true" viewBox="0 0 24 24" role="img">
            <path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.99 21V10.11a2 2 0 012-2h2.08m-6.949 5.13h6.18"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path></svg>
        </button>
        <button className='flex rounded-full w-10 h-10 border border-white justify-center items-center'>
          <svg
            className='w-8 h-8 text-white'
            xmlns="http://www.w3.org/2000/svg" fill="white" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM7.18 9.61v8m4.37-8v8"></path><path fill="var(--icon-color, #001e00)" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.18 7.11a.36.36 0 100-.72.36.36 0 000 .72z"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.55 12.51a2.81 2.81 0 012.82-2.81v0a2.81 2.81 0 012.81 2.81v5.1"></path></svg>
        </button>
        <button className='flex rounded-full w-10 h-10 border border-white justify-center items-center'>
          <svg
            className='w-8 h-8 text-white'
            xmlns="http://www.w3.org/2000/svg" fill="white" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.758 7.15A8.105 8.105 0 0021 6.61c-.466 1.61-2.808 2.882-2.808 2.882 0 5.085-5.848 12.597-15.192 8.338a11.78 11.78 0 005.636-1.727A10.15 10.15 0 014.696 5a10.256 10.256 0 007.542 4.312 3.578 3.578 0 010-.477 3.03 3.03 0 015.552-1.684h-.032z" clip-rule="evenodd"></path></svg>
        </button>
        <button className='flex rounded-full w-10 h-10 border border-white justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="white"
            className='w-8 h-8 text-white'
            aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 6.384a2.24 2.24 0 011.59 1.6c.274 1.45.412 2.923.41 4.4a23.468 23.468 0 01-.38 4.36A2.24 2.24 0 0119 18.382c-2.323.28-4.661.407-7 .38-2.339.027-4.677-.1-7-.38a2.24 2.24 0 01-1.59-1.6 23.47 23.47 0 01-.41-4.4 23.526 23.526 0 01.38-4.36A2.24 2.24 0 015 6.384a53.345 53.345 0 017-.38c2.339-.027 4.677.1 7 .38v0z" clip-rule="evenodd"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.87 12.383l-4.71-2.68v5.36l4.71-2.68z" clip-rule="evenodd"></path></svg>
        </button>
        <button className='flex rounded-full w-10 h-10 border border-white justify-center items-center'>
          <svg
            className='w-8 h-8'
            xmlns="http://www.w3.org/2000/svg" fill="white" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 3H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5z"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 16a4 4 0 100-8 4 4 0 000 8z"></path><path fill="var(--icon-color, #001e00)" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.34 7a.35.35 0 100-.7.35.35 0 000 .7z"></path></svg>
        </button>


      </div>
      <p className="mt-8 text-sm">Mobile app</p>
      <div className='flex mt-3 space-x-3'>
        <button className='flex rounded-full w-10 h-10 border border-white justify-center items-center'>
          <svg
            className='w-8 h-8'
            xmlns="http://www.w3.org/2000/svg" fill="white" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.117 3a3.907 3.907 0 01-.87 2.918 3.607 3.607 0 01-2.778 1.409 3.657 3.657 0 01.9-2.848A4.287 4.287 0 0115.117 3z" clip-rule="evenodd"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.295 18.381c.453-.69.844-1.42 1.17-2.178a3.997 3.997 0 01-.53-7.204 4.586 4.586 0 00-3.458-1.83c-.705.01-1.401.16-2.048.44-.433.22-.905.353-1.389.39a4.726 4.726 0 01-1.559-.36c-.6-.25-1.24-.388-1.888-.41a4.676 4.676 0 00-3.777 2.26c-1.31 1.998-1.09 5.805.999 8.992.79 1.2 1.808 2.508 3.127 2.508.46-.01.91-.123 1.32-.33a3.997 3.997 0 013.587 0c.395.217.838.334 1.289.34 1.329-.01 2.398-1.459 3.157-2.618z" clip-rule="evenodd"></path></svg>
        </button>
        <button className='flex rounded-full w-10 h-10 border border-white justify-center items-center'>
          <svg
            className='w-8 h-8'
            xmlns="http://www.w3.org/2000/svg" fill="white" aria-hidden="true" viewBox="0 0 24 24" role="img"><path fill="var(--icon-color, #001e00)" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-miterlimit="10" stroke-width=".4" d="M9.893 6.726a.44.44 0 100-.88.44.44 0 000 .88zm3.522 0a.44.44 0 100-.88.44.44 0 000 .88z"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.656 3.83a5 5 0 00-5.23 4.82h10.46a5 5 0 00-5.23-4.82zm-2.501.58L8.375 3m5.791 1.41l.77-1.41"></path><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.896 8.648H6.426v9.2h10.47v-9.2zM4 8.648v6.3m15.314-6.3v6.3M9.57 17.85V21m4.174-3.15V21"></path></svg>
        </button>

      </div>
      <hr className='mt-8' />
      <div className='mt-16 flex flex-col space-y-7 text-sm'>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>CA Notice of Collection</p>
        <p>Cookie Settings</p>
        <p>Accessibility</p>
      </div>

    </div>


  );
}

export default FooterMenu;

