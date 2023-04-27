import { Nunito } from 'next/font/google'
import Head  from 'next/head'
import Navbar from './component/navbar/Navbar'
import ClientOnly from './component/ClientOnly'
import Modal from './component/modals/Modal'

const font = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={font.className}>
      <Head>
          <title>My page title</title>
      </Head>
      
      <ClientOnly>
        <Modal actionLabel='Submit' isOpen={true} title='hihi'/>
        <Navbar />
      </ClientOnly>
      <h1>
        Hello airbnb
      </h1>
   

    
    </main>
  )
}
