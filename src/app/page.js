import Image from 'next/image'
import HeaderLogo from './static/images/chcaa_logo.png';
import Lessons from '../../pages/Lessons';

export default function Home() {
  return (
    <>
      <header className="header">
          <div className="logo-container">
              <Image src={HeaderLogo} alt="Logo" className="logo" />
          </div>
          <div className="buttons-container">
              <button className="header-button">About</button>
              <button className="header-button">Contact</button>
          </div>
      </header>
      <main>
        <Lessons></Lessons>
      </main>
      <footer className="footer">
          <div className="logo-container">
              <Image src={HeaderLogo} alt="Logo" className="logo" />
          </div>
      </footer>
    </>
  )
}
