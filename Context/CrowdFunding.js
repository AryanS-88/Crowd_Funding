import React, { useState, useEffect, createContext } from 'react'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'

import { CrowdFundingABI, CrowdFundingAddress } from './constants'

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(CrowdFundingAddress, CrowdFundingABI, signerOrProvider)

export const CrowdFundingContext = createContext()

export const CrowdFundingProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('')
  const [error, setError] = useState('')
  const [openError, setOpenError] = useState(false)

  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) {
        setOpenError(true)
        return setError('Install MetaMask')
      }

      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
      } else {
        console.log('No Account Found')
      }
    } catch (error) {
      console.log('Error checking wallet connection', error)
    }
  }

  useEffect(() => {
    checkIfWalletConnected()
  }, [])

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        return console.log('Install MetaMask')
      }

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log('Error while connecting to wallet', error)
    }
  }

  const createCampaign = async (campaign) => {
    const { title, description, amount, deadline } = campaign
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = fetchContract(signer)

    try {
      const accounts = await provider.listAccounts()
      if (accounts.length === 0) throw new Error('No connected account found')
      const currentAccount = accounts[0]

      const transaction = await contract.createCampaign(
        currentAccount,
        title,
        description,
        ethers.utils.parseUnits(amount, 18),
        Math.floor(new Date(deadline).getTime() / 1000)
      )
      await transaction.wait()
      console.log('Campaign created:', transaction)
    } catch (error) {
      console.error('Failed to create campaign:', error)
    }
  }

  const getCampaigns = async () => {
    const provider = new ethers.providers.JsonRpcProvider()
    const contract = fetchContract(provider)

    const campaigns = await contract.getCampaigns()

    const parsedCampaigns = campaigns.map((campaign) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
    }))

    return parsedCampaigns
  }

  const getUserCampaigns = async () => {
    const provider = new ethers.providers.JsonRpcProvider()
    const contract = fetchContract(provider)

    const allCampaigns = await contract.getCampaigns()

    const accounts = await window.ethereum.request({
      method: 'eth_accounts',
    })
    const currentUser = accounts[0]

    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner.toLowerCase() === currentUser.toLowerCase()
    )

    const userData = filteredCampaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      pId: i,
    }))

    return userData
  }

  const donate = async (pId, amount) => {
    try {
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      const contract = fetchContract(signer)

      const tx = await contract.donateToCampaign(pId, {
        value: ethers.utils.parseEther(amount),
      })

      await tx.wait()
      window.location.reload()
      return tx
    } catch (error) {
      console.error('Donation failed:', error)
    }
  }

  const getDonations = async (pId) => {
    const provider = new ethers.providers.JsonRpcProvider()
    const contract = fetchContract(provider)
    const donations = await contract.getDonators(pId)

    const parsedDonations = donations[0].map((donator, i) => ({
      donator,
      donation: ethers.utils.formatEther(donations[1][i].toString()),
    }))

    return parsedDonations
  }

  return (
    <CrowdFundingContext.Provider
      value={{
        currentAccount,
        connectWallet,
        createCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
      }}
    >
      {children}
    </CrowdFundingContext.Provider>
  )
}
