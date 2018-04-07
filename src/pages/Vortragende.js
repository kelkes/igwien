import React from 'react';
import {RouteData} from 'react-static';

import Section from '../atoms/Section';
import Container from '../atoms/Container';
import Speaker from '../molecules/Speaker';

export default () => (
	<RouteData
		render={({speakers}) => (
			<Section className="style1">
				<Container>
					{speakers.map((speaker, i) => (
						<Speaker key={i} {...speaker} />
					))}
				</Container>
			</Section>
		)}
	/>
);
