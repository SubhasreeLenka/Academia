import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-facebook-f icon'></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-instagram icon'></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-twitter icon'></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-youtube icon'></i>
            </a>
            <a href="/login">
              <i className='fas fa-sign-out-alt icon'></i>
            </a> {/* Updated icon */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head