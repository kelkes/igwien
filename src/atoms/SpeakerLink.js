import React, {Fragment} from 'react';
import {string, oneOf, arrayOf} from 'prop-types';
import {Link} from 'react-static';

import toHash from '../utils/toHash';

const propTypes = {
	speaker: oneOf([string, arrayOf(string)]).isRequired,
};

const defaultProps = {};

const SpeakerLink = ({speaker}) => (
	<Fragment>
		{Array.isArray(speaker) ? (
			speaker.map(s => (
				<Link
					to={{
						pathname: '/vortragende',
						hash: `#${toHash(s)}`,
					}}>
					{s}
				</Link>
			))
		) : (
			<Link
				to={{
					pathname: '/vortragende',
					hash: `#${toHash(speaker)}`,
				}}>
				{speaker}
			</Link>
		)}
	</Fragment>
);

SpeakerLink.propTypes = propTypes;
SpeakerLink.defaultProps = defaultProps;

export default SpeakerLink;
