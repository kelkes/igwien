import React, { Fragment } from 'react'
import { string } from 'prop-types'

const propTypes = {
  title: string.isRequired,
  speaker: string.isRequired,
  description: string,
}

const defaultProps = {
  description: '',
}

const Talk = ({ title, speaker, description }) => (
  <Fragment>
    <h3>{title}</h3>
    <h4>{speaker}</h4>
    <p>{description}</p>
  </Fragment>
)

Talk.propTypes = propTypes
Talk.defaultProps = defaultProps

export default Talk
