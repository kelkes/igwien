import React from 'react'
import { RouteData } from 'react-static'

import Section from '../atoms/Section'
import Container from '../atoms/Container'
import Talk from '../atoms/Talk'

export default () => (
  <RouteData render={({ workshops }) => (
    <div>
      <Section className="wrapper style1">
        <Container>
          {workshops.map(({ title, speaker, description }, i) =>
            <Talk key={i} title={title} speaker={speaker} description={description} />)}
        </Container>
      </Section>
    </div>
)} />
)
