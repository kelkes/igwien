import React from 'react';
import {string} from 'prop-types';
import {Link} from 'react-static';

import toHash from '../utils/toHash';

const propTypes = {
	title: string.isRequired,
};

const defaultProps = {};

const TalkLink = ({title}) => (
	<Link
		to={{
			pathname: '/vortraege',
			hash: `#${toHash(title)}`,
		}}>
		{title}
	</Link>
);

TalkLink.propTypes = propTypes;
TalkLink.defaultProps = defaultProps;

export default TalkLink;
