import React from 'react'
import Markdown from './markdown'

const Code = ({ source, language }) =>
  <Markdown content={'```' + language + source + '```'}/>

Code.defaultProps = {
  language: 'js'
}

export default Code