import React from 'react';

import Section from '../atoms/Section';
import Container from '../atoms/Container';

export default () => (
	<div>
		<Section className="style2">
			<Container>
				<p>
					<strong>Vielen Dank für Ihre Anmeldung!</strong>
					<br />Sie erhalten in Kürze ein E-Mail mit allen weiteren
					Informationen.
				</p>
			</Container>
		</Section>
	</div>
);
