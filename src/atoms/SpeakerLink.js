import React, {Fragment} from 'react';
import {string, oneOfType, arrayOf} from 'prop-types';
import {Link} from 'react-static';

import toHash from '../utils/toHash';

const propTypes = {
	speaker: oneOfType([string, arrayOf(string)]).isRequired,
};

const defaultProps = {};

const SpeakerLink = ({speaker}) => (
	<Fragment>
		{Array.isArray(speaker) ? (
			speaker.map((s, i) => (
				<Fragment key={toHash(s)}>
					<Link
						to={{
							pathname: '/vortragende',
							hash: `#${toHash(s)}`,
						}}>
						{s}
					</Link>
					{i < speaker.length - 1 ? ' - ' : ''}
				</Fragment>
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
