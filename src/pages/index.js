import React, { useState, useEffect, useContext } from 'react'
import { CrowdFundingContext } from '../../Context/CrowdFunding'
import { Hero, PopUp, Card } from '../../Components'

const Index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext)

  const [allcampaign, setAllCampaign] = useState([])
  const [usercampaign, setUserCampaign] = useState([])
  const [openModel, setOpenModel] = useState(false)
  const [donateCampaign, setDonateCampaign] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getCampaigns()
      const userData = await getUserCampaigns()

      setAllCampaign(allData)
      setUserCampaign(userData)
    }

    fetchData()
  }, [])

  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />

      <Card
        title="All Listed Campaign"
        allcampaign={allcampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      <Card
        title="Your Created Campaign"
        allcampaign={usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      {openModel && (
        <PopUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFUnction={donate}
        />
      )}
    </>
  )
}

export default Index
