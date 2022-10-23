import { useEffect, useState } from 'react'

const test = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http//demotest.pulpo.club/api/v1/groups/G94894984/')
      const data = await res.json()
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <>
      {data ? (
        <>
          <div>{`Group ID: ${data.group_id}`}</div>
          <div>{`Platform: ${data.platform}`}</div>
          <div>{`Price Amount: ${data.price_amount}`}</div>
          <div>{`Price Currency: ${data.price_currency}`}</div>
          <div>{`Available Slots: ${data.available_slots}`}</div>
        </>
      ) : (
        'No data available'
      )}
    </>
  )
}

export default test
