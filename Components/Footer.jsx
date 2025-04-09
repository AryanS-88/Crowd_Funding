import React from 'react'

const Footer = () => {
  const cryptocrimson = ['Crypto Crimson']
  const productList = ['Market', 'ERC20 Token', 'Donation']
  const contactList = [
    'support@cryptocrimson.com',
    'info@cryptocrimson.com',
    'Contact us',
  ]
  const usefulLinks = ['Home', 'About Us', 'Company Bio']
  return (
    <footer className="backgroundMain text-white p-4 text-center lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Crypto Crimson
            </h6>
            <p>
              Crypto Crimson is an intermediary platform that facilitates
              crowdfunding for campaign managers utilizing Ethereum.
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <div>
              {productList.map((el, i) => {
                return (
                  <p className="mb-4" key={i + 1}>
                    <a href="#!">{el}</a>
                  </p>
                )
              })}
            </div>
          </div>
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              UseFul Links
            </h6>
            <div>
              {usefulLinks.map((el, i) => {
                return (
                  <p className="mb-4" key={i + 1}>
                    <a href="#!">{el}</a>
                  </p>
                )
              })}
            </div>
          </div>
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p>
              {contactList.map((el, i) => {
                return (
                  <p className="mb-4" key={i + 1}>
                    <a href="#!">{el}</a>
                  </p>
                )
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="backgorundMAin p-6 text-center">
        <span>© 2025 Copyright:</span>
        <a className="font-semibold" href="https://tailwind-elements.com">
          Crypto Crimson
        </a>
      </div>
    </footer>
  )
}

export default Footer
