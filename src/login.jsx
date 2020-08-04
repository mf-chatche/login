/* eslint-disable no-undef */
import React from 'react'
import styles from './styles.module.css'

function generateId() {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length

  for (var i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  return result
}


const Login = () => {
  const [name, setName] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    window.dispatchEvent(
      new CustomEvent(Login.events.onSubmit, {
        bubbles: true,
        detail: {
          name,
          id: generateId()
        }
      })
    )
  }

  return (
    <form className={styles.login} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='Nome'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button className={styles.submit} type='submit'>
        Buenas!
      </button>
    </form>
  )
}

Login.events = {
  onSubmit: 'login:onSubmit'
}

export default Login
