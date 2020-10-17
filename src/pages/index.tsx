import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>{'<Next Setup Basic />'}</h1>
      <p>Welcome to your new project.</p>
    </Container>
  )
}

export default Home
