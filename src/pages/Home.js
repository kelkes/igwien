import React from 'react'
import { withSiteData } from 'react-static'

import Section from '../atoms/Section'
import Container from '../atoms/Container'

export default withSiteData(() => (
  <div>
    <section id="banner">
      <header>
        <h2>DRINNEN - DRAUSSEN<br />Zugehörigkeit in einer pluralistischen Gesellschaft</h2>
        <p><br /><br />5.-6. Oktober 2018&nbsp;&nbsp;|&nbsp;&nbsp;Kardinal König Haus, Wien</p>
      </header>
    </section>
    <Section className="style2">
      <Container>
        <p>
Jahrhundertelang wurde in Europa Zugehörigkeit vor allem durch die Religion festgelegt.
Erst mit der Aufklärung erfolgte ein Umdenken. Dennoch führten die Verabsolutierung einer
bestimmten Volks- oder Stammeszugehörigkeit, das Einfordern eindeutiger,
heterosexueller Orientierung oder die Definition von Behinderung als unwertes
Leben im 20. Jahrhundert zu Verfolgung, Ausgrenzung und Vernichtung.
Wer die Augen und das Herz nicht verschließt, kann all das auch in der Gegenwart entdecken.
        </p>
        <p>Das Gegensatzpaar <strong>"drinnen- draußen"</strong>
als Synonym für die grundlegende Polarität Zugehörigkeit und Autonomie stellt uns
immer wieder vor wichtige Aufgaben der Auseinandersetzung und der Integration:
Gesellschaftlich, politisch, persönlich und nicht zuletzt therapeutisch.
Im Rahmen unserer Tagung  wollen wir diesen verschiedenen Aspekten und den damit
verbundenen Herausforderungen nachgehen, polare Spaltungen aufspüren und Möglichkeiten
therapeutischer Interventionen sichtbar machen.
        </p>
        <p>Anlässlich unseres 20- jährigen Bestehens als gesetzlich anerkanntes
            psychotherapeutisches Fachspezifikum freuen wir uns darauf miteinander
            zu feiern und dabei Zugehörigkeit zu (er)leben.
        </p>
      </Container>
    </Section>
  </div>
))
