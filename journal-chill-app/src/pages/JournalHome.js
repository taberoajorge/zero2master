// journalHome.js
import React from 'react'
import { Link } from 'react-router-dom'

function JournalHome() {
  return (
    <>
    <Link to="/auth/login">Login</Link>
    <Link to="/auth/register">register</Link>
    </>
  )
}

export default JournalHome