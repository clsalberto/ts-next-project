import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>Next Project</h1>
      <p>Structure for new web projects.</p>
    </Container>
  )
}

export default Home
