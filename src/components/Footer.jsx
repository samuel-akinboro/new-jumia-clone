import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
          <div className="footer__top">
              <img src="/images/logo/dark.jpg" alt="" />
              <div className="news__letter">
                  <h4>New To Jumia?</h4>
                  <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                  <form action="">
                      <input type="email" name="" id="" placeholder="Enter Email"/>
                      <button>male</button>
                      <button>female</button>
                  </form>
              </div>
              <div className="download__app">
                  <div className="download__app__top">
                      <img src="/images/jumia-icon/download-app.jpg" alt="" />
                      <div className="details">
                          <h4>Download Jumia free app</h4>
                      <p>Get access to exclusive offers!</p>
                      </div>
                  </div>
                  <div className="buttons">
                      <img src="/images/jumia-icon/btn1.jpg" alt="" />
                      <img src="/images/jumia-icon/btn2.jpg" alt=""/>
                  </div>
              </div>
          </div>
          <div className="footer__bottom">
              <div className="box">
                  <h4>Let us help you</h4>
                  <ul>
                      <li>Help Center</li>
                      <li>How to shop on jumia</li>
                      <li>Delivery optionws and timelines</li>
                      <li>How to return a product on jumia</li>
                      <li>Corporate and bulk purchase</li>
                      <li>Report a product</li>
                  </ul>
              </div>
              <div className="box">
                  <h4>About Jumia</h4>
                  <ul>
                      <li>About us</li>
                      <li>Jumia carrers</li>
                      <li>Jumia Express</li>
                      <li>Terms and conditions</li>
                      <li>Privacy Policy</li>
                      <li>Jumia Prime</li>
                      <li>Stgay safe</li>
                      <li>Jumia global</li>
                  </ul>
              </div>
              <div className="box">
                  <h4>Make money with jumia</h4>
                  <ul>
                      <li>Sell on Jumia</li>
                      <li>Become aSales Consultant</li>
                      <li>Become a jumia Vendor Service Provider</li>
                      <li>Become a Logistics Service Partner</li>
                  </ul>
              </div>
              <div className="box">
                  <h4>Jumia International</h4>
                  <ul>
                      <li>Algeria</li>
                      <li>Egypt</li>
                      <li>Ghana</li>
                      <li>Kenya</li>
                      <li>Zando</li>
                      <li>South Africa</li>
                  </ul>
              </div>
          </div>
          <p className="copyright">A Demo Created By black vibes</p>
    </div>
  )
}

export default Footer
