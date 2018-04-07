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

const Section = ({className, children}) => (
	<section className={`wrapper ${className}`}>{children}</section>
);

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
