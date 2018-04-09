import React, {Fragment} from 'react';
import {string, number, oneOfType, arrayOf} from 'prop-types';
import SpeakerLink from '../atoms/SpeakerLink';
import toHash from '../utils/toHash';

const propTypes = {
	num: number.isRequired,
	title: string.isRequired,
	speaker: oneOfType([string, arrayOf(string)]).isRequired,
	description: string,
};

const defaultProps = {
	description: '',
};

const Workshop = ({num, title, speaker, description}) => (
	<Fragment>
		<strong>Workshop {num}</strong>
		<h3 id={toHash(title)}>{title}</h3>
		<h4>
			<SpeakerLink speaker={speaker} />
		</h4>
		<p>{description}</p>
	</Fragment>
);

Workshop.propTypes = propTypes;
Workshop.defaultProps = defaultProps;

export default Workshop;
