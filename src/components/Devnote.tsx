import React from 'react';
import '@/styles/Devnote.scss';
import Image from 'next/image';

const Devnote: React.FC = () => {
  return (
    <main id="devnote">
      <h1 className="title">Developer Note</h1>
      <p className="tech-desc">Aplikasi ini dibuat menggunakan teknologi:</p>
      <div className="tech-stack">
        <img className="tech" src="/typescript.png" alt="typescript" />
        <img className="tech" src="/react.png" alt="reactjs" />
        <img className="tech" src="/nextjs.svg" alt="nextjs" />
      </div>
      <div className="tech-desc">
        Tertarik untuk membuat aplikasi serupa? Kamu dapat mengunjungi repositori dibawah untuk mendapatkan <span className="bold">source code</span> aplikasi ini, silahkan dipergunakan sebaik mungkin dan jangan lupa tinggalin{' '}
        <span className="bi bi-star-fill" /> di repositori-nya ya!
      </div>
      <a href="https://github.com/muhAzis/samisaum" target="_blank" className="github-repo">
        https://github.com/muhAzis/samisaum
      </a>

      <h3 className="dev-desc">Developer:</h3>
      <div className="developer">
        <div className="dev-logo">
          <img id="devLogo" src="/personal-logo.svg" alt="dev-logo" />
          <Image src="/profile.jpg" alt="profile-picture" className="profile-pic" width={120} height={120} quality={80} />
        </div>
        <div className="dev-info">
          <h2 className="dev-name">Muhamad Abdul Azis</h2>
          <p className="dev-role">Fullstack Developer</p>

          <div className="contacts">
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwfXVNRZKqCKlcRZqxbcnRsWQwFPCDqslrqbqZLftpklqKqJDFKchfHkVblhkcNdssxzTj" target="_blank" className="bi bi-google contact">
              muhabdulazis555@gmail.com
            </a>
            <a href="https://wa.me/6288226389456" target="_blank" className="bi bi-whatsapp contact">
              +6288226389456
            </a>
            <a href="https://muhabdulazis.vercel.app/" target="_blank" className="bi bi-globe2 contact">
              Muhamad Abdul Azis
            </a>
            <a href="https://github.com/muhAzis/" target="_blank" className="bi bi-github contact">
              muhAzis
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Devnote;
