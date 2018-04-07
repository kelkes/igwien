import React from 'react';
import {RouteData} from 'react-static';

import Section from '../atoms/Section';
import Container from '../atoms/Container';
import Talk from '../molecules/Talk';

export default () => (
	<RouteData
		render={({talks}) => (
			<Section className="style1">
				<Container>
					{talks.map((talk, i) => <Talk key={i} {...talk} />)}
				</Container>
			</Section>
		)}
	/>
);
