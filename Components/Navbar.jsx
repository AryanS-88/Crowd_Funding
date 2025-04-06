import React from 'react'
import { useState, useContext } from 'react'
import { CrowdFundingContext } from '../Context/CrowdFunding'
import { Logo, Menu } from '../Components/index'

const Navbar = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuList = ['White Paper', 'Project', 'Donation', 'Members']
  return (
    <div className="backgroundMain">
      <div className="px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-2 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8">
                <Logo color="text-white" />
              </div>
              <span className="text-lg font-bold tracking-wide text-white uppercase">
                Company
              </span>
            </a>

            <ul className="flex items-center hidden space-x-8 lg:flex ml-10">
              {menuList.map((el, i) => (
                <li key={i + 1}>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {!currentAccount && (
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <button
                  onClick={() => connectWallet()}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none background"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Connect Wallet
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
