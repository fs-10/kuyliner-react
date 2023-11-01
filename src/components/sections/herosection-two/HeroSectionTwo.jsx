import React from 'react';
import herosectiontwo from '../../../assets/herosection-two/herosection-two.png';

function HeroSectionTwo() {
  return (
    <section className='flex mx-14 my-20 align-middle'>
      <div className='my-auto w-7/12'>
        <h2 className='text-[#FFC836] font-black text-3xl'>Selamat Datang, Di Kuyliner!</h2>
        <h1 className='text-[#223322] font-extrabold text-4xl my-5'>Menu Varian Kuliner Untuk Pecinta Makanan</h1>
        <p className='text-[#223322] font-medium text-lg'>Agar Kuyliner bisa memberikan pengalaman rasa yang terbaik bagi anda. Daftar sebagai pengguna untuk mencari citra rasa dari hidangan UMKM indonesia.</p>
        <div className='mt-5 flex gap-5'>
          <button className='border rounded-sm border-[#FFC836] px-5 py-1 font-bold text-xl text-[#FFC836]'>Masuk</button>
          <button className='rounded-sm bg-[#FFC836] px-5 py-1 font-bold text-xl text-white'>Daftar</button>
        </div>
      </div>
      <div className='mx-auto'>
        <img src={herosectiontwo} alt="" className='w-96 rounded-lg' />
      </div>
    </section>
  )
}

export default HeroSectionTwo