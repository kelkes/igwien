import React from 'react';
import {RouteData} from 'react-static';

import Section from '../atoms/Section';
import Container from '../atoms/Container';
import Workshop from '../molecules/Workshop';

export default () => (
	<RouteData
		render={({workshops}) => (
			<Section className="style1">
				<Container>
					{workshops.map((workshop, i) => (
						<Workshop key={i} {...workshop} />
					))}
				</Container>
			</Section>
		)}
	/>
);
