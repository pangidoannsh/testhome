import React from 'react';
import logo from "./logo.png"
const Footer = () => {
    return (
        <div className='grid md:grid-cols-3 md:px-32 py-12'>
            <div>
                <img src={logo} alt="" className='w-44' />
                <div className='text-sm text-slate-700 mt-4 text-justify'>
                    Jangan menunggu ide Anda direalisasikan oleh orang lain.
                    Hubungi kami, dan kami akan membantu Anda sukses.
                    Tanpa kewajiban, tanpa omongan penjualan - kami adalah enginer,
                    bukan Perwakilan Penjualan. Mari kita melakukan percakapan yang jujur
                    dan mendetail untuk menyiapkan proyek Anda berikutnya agar mendapatkan
                    hasil yang sehat dan meyakinkan.
                </div>
            </div>
            <div className='text-center'>
                <div className="font-medium text-slate-700 mb-4">Sitemap</div>
                <div className='flex flex-col gap-2'>
                    <button>Our Values</button>
                    <button>Contact</button>
                </div>
            </div>
            <div>
                <div className="font-medium text-slate-700">Contact</div>
            </div>
        </div>
    );
}

export default Footer;
