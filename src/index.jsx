/* globals HTMLElement */
import React from 'react'
import ReactDOM from 'react-dom'
import Login from './login.jsx'

class LoginComponent extends HTMLElement {
  // Callback executado após o componente ser chamado
  connectedCallback() {
    this.render()
  }

  render() {
    ReactDOM.render(<Login />, this)
  }
}

const register = () => window.customElements.define('chatche-login', LoginComponent)

export default {
  register,
  events: Login.events,
  version: '1.0.0'
}
