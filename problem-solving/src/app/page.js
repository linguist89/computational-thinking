import Image from 'next/image'
import HeaderLogo from './static/images/chcaa_logo.png';
import Lessons from './Lessons';

export default function Home() {
  return (
    <>
      <header className="header">
          <div className="logo-container">
              <Image src={HeaderLogo} alt="Logo" className="logo" />
          </div>
          <div className="buttons-container">
              <button className="header-button">Button 1</button>
              <button className="header-button">Button 2</button>
              <button className="header-button">Button 3</button>
          </div>
      </header>
      <main>
        <Lessons></Lessons>
      </main>
      <footer>Footer</footer>
    </>
  )
}
