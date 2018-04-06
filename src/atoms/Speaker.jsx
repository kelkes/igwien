import React, { Fragment } from 'react'
import { string } from 'prop-types'

const propTypes = {
  name: string.isRequired,
  description: string,
}

const defaultProps = {
  description: '',
}

const Speaker = ({ name, description }) => (
  <Fragment>
    <h3>{name}</h3>
    <p>
      {description}
    </p>
  </Fragment>
)

Speaker.propTypes = propTypes
Speaker.defaultProps = defaultProps

export default Speaker
