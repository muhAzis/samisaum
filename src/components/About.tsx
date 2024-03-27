import React from 'react';
import '@/styles/About.scss';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <main id="about">
      <div className="logo">
        <img id="logo2" src="/logo.svg" alt="logo" />
        <img id="logoText2" src="/logo-text.svg" alt="logo-text" />
      </div>
      <p className="about-desc">
        <span className="bold">Samisaum</span> adalah aplikasi jadwal waktu sholat harian yang lengkap dan mudah untuk digunakan. Aplikasi ini dibuat dalam rangka bulan Ramadhan untuk mempermudah umat dalam mencari informasi jadwal sholat
        khususnya waktu <span className="bold">Sahur</span> dan <span className="bold">Iftar</span>, kamu hanya perlu mencari dan memilih nama kotamu dan jadwal akan muncul berdasarkan kota yang kamu pilih.
      </p>
      <p className="about-desc">
        Aplikasi ini juga dapat kamu <span className="bold">install</span> pada ponsel kamu jika kamu menggunakan browser <span className="bold">Chrome</span> (pastikan menggunakan <span className="bold">Chrome versi terbaru</span>). Karena
        aplikasi ini berbasis web jadi tidak akan memakan banyak ruang memori ponsel kamu!
      </p>
      <p className="install">Cara Install</p>
      <Image src="/pwa-install.jpg" alt="pwa-install" className="pwa-install" width={100} height={100} quality={100} />
      <p className="about-desc">
        Kamu hanya perlu buka laman website ini pada browser <span className="bold">Chrome</span>, lalu saat muncul pop-up bertuliskan <span className="bold">install</span> seperti gambar diatas lalu tap{' '}
        <span className="bold">install</span> dan aplikasi ini akan langsung terpasang pada halaman depan ponsel kamu, mudah bukan!?
      </p>
    </main>
  );
};

export default About;
