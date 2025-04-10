import React, { useState } from 'react'

const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: '',
    description: '',
    amount: '',
    deadline: '',
  })

  const createNewCampaign = async (e) => {
    e.preventDefault()
    try {
      await createCampaign(campaign)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="relative">
      <span className="coverLine">
        <img
          src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt="Background"
        />
      </span>

      <div className="relative bg-opacity-90 bg-black">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>

        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            {/* Left Text Content */}
            <div className="w-full max-w-xl mb-12 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
                SeedVerse
                <br className="hidden md:block" />
                Crowd Funding SV
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Welcome to SeedVerse, the future of decentralized crowdfunding.
                A platform powered by blockchain to raise support for bold ideas
                with transparency, security, and zero middlemen.
              </p>
              <a
                href="/"
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-400 hover:text-teal-600"
              >
                Learn More
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>

            {/* Right Form */}
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded-2xl shadow-2xl p-7 sm:p-10">
                <h3 className="mb-6 text-2xl font-semibold text-center text-gray-800">
                  Create Campaign
                </h3>
                <form onSubmit={createNewCampaign}>
                  {/* Title */}
                  <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      placeholder="Campaign title"
                      required
                      onChange={(e) =>
                        setCampaign({ ...campaign, title: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
                    />
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Describe your campaign"
                      required
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          description: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
                    />
                  </div>

                  {/* Target Amount */}
                  <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">
                      Target Amount
                    </label>
                    <input
                      type="number"
                      placeholder="Amount (ETH)"
                      required
                      onChange={(e) =>
                        setCampaign({ ...campaign, amount: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
                    />
                  </div>

                  {/* Deadline */}
                  <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">
                      Deadline
                    </label>
                    <input
                      type="date"
                      required
                      onChange={(e) =>
                        setCampaign({ ...campaign, deadline: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 font-semibold text-white bg-purple-600 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      Create Campaign
                    </button>
                    <p className="text-xs text-center text-gray-600 mt-4">
                      Create your campaign to raise funds and share your vision.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
