import React from 'react'
import { RouteData } from 'react-static'

import Section from '../atoms/Section'
import Container from '../atoms/Container'
import Speaker from '../atoms/Speaker'

export default () => (
  <RouteData render={({ speakers }) => (
    <div>
      <Section className="wrapper style1">
        <Container>
          {speakers.map(({ name, description }, i) =>
            <Speaker key={i} name={name} description={description} />)}
        </Container>
      </Section>
    </div>
)} />
)
