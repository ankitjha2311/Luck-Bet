import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-yellow-500 ... min-h-screen flex flex-col">
      <Head>
        <title>Decentralized Lottery</title>
      
      </Head>
      <Header/>
        <h1>Lottery Web3 Application</h1>
    </div>
  )
}

export default Home
