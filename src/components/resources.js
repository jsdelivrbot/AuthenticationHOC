import React from 'react'

import requireAuthentication from '../enhancers/requireAuthentication'

const Resources = () => {
  return (
    <div>
      <h4>Super Secret Resources</h4>
      <ul>
        <li>Crack Jennys tea cup quarterdeck killick blow</li>
        <li>The man down clap of thunder six pounders fire in the hole ahoy</li>
        <li>Jack coxswain Chain Shot boom lee barkadeer list strike colors</li>
      </ul>
    </div>
  )
}

export default requireAuthentication(Resources)
