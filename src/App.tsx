
import './App.css'
import HorizontalLinearStepper from './components/SignupStepper/SignupStepper'
import logo from './assets/images/logo.png'
import RightFormDesign from './components/RightFormDesign/RightFormDesign'
import { useState } from 'react'
import cart from './assets/images/cart.svg';
import mail from './assets/images/mail.svg';
import stars from './assets/images/stars.svg';
const Msg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M1.33334 4.66669L6.77662 8.47698C7.2174 8.78553 7.43779 8.9398 7.67752 8.99956C7.88927 9.05234 8.11075 9.05234 8.3225 8.99956C8.56223 8.9398 8.78262 8.78553 9.2234 8.47698L14.6667 4.66669M4.53334 13.3334H11.4667C12.5868 13.3334 13.1468 13.3334 13.5747 13.1154C13.951 12.9236 14.2569 12.6177 14.4487 12.2413C14.6667 11.8135 14.6667 11.2535 14.6667 10.1334V5.86669C14.6667 4.74658 14.6667 4.18653 14.4487 3.75871C14.2569 3.38238 13.951 3.07642 13.5747 2.88467C13.1468 2.66669 12.5868 2.66669 11.4667 2.66669H4.53334C3.41324 2.66669 2.85319 2.66669 2.42536 2.88467C2.04904 3.07642 1.74308 3.38238 1.55133 3.75871C1.33334 4.18653 1.33334 4.74658 1.33334 5.86669V10.1334C1.33334 11.2535 1.33334 11.8135 1.55133 12.2413C1.74308 12.6177 2.04904 12.9236 2.42536 13.1154C2.85319 13.3334 3.41324 13.3334 4.53334 13.3334Z" stroke="#667085" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

function App() {
  const [activeStep, setActiveStep] = useState(0);  return (
    <>
      <div className='flex flex-wrap' >
        <main className='basis-full lg:basis-6/12'>
          <div className="container mx-auto p-5">
            <div className="logo my-4">
              <img src={logo} alt="logo" className='h-8' />
            </div>
            <HorizontalLinearStepper activeStep={activeStep} setActiveStep={setActiveStep} />
            <footer className='text-slate-600 text-sm font-normal leading-tight my-8'>
              <div className=" mx-auto p-5 flex justify-between items-center flex-wrap">
                <span>© Markatty 2022</span>
                <span className='flex items-center gap-2'><Msg />support@markatty.com</span>
              </div>
            </footer>
          </div>
        </main>
        <div className="design basis-full lg:basis-6/12">
          {
            activeStep == 0 && <RightFormDesign icon={stars} heading='Start turning your ideas into reality.'/>
          }
          {
            activeStep == 1 && <RightFormDesign icon={mail} heading='Verify your account now'/>
          }
          {
            activeStep == 2 && <RightFormDesign icon={cart} heading='Setup your store the way you like'/>
          }
          
        </div>
      </div>
    </>
  )
}

export default App
