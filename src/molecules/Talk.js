import React, {Fragment} from 'react';
import {string, oneOfType, arrayOf} from 'prop-types';
import SpeakerLink from '../atoms/SpeakerLink';
import toHash from '../utils/toHash';

const propTypes = {
	title: string.isRequired,
	speaker: oneOfType([string, arrayOf(string)]).isRequired,
	description: string,
};

const defaultProps = {
	description: '',
};

const Talk = ({title, speaker, description}) => (
	<Fragment>
		<h3 id={toHash(title)}>{title}</h3>
		<h4>
			<SpeakerLink speaker={speaker} />
		</h4>
		<p>{description}</p>
	</Fragment>
);

Talk.propTypes = propTypes;
Talk.defaultProps = defaultProps;

export default Talk;
