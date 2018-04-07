import React from 'react';
import {string, node} from 'prop-types';

const propTypes = {
	className: string,
	children: node,
};

const defaultProps = {
	className: '',
	children: undefined,
};

const Container = ({className, children}) => (
	<div className={`container ${className}`}>{children}</div>
);

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
