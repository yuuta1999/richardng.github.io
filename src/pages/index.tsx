import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import Image from '../components/image'
import SEO from '../components/seo'
import Section from '../components/section'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section style={{ position: 'relative', padding: '6rem 0' }}>
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/">Go to page 2</Link>
      </Container>
    </Section>
  </Layout>
)

export default IndexPage
