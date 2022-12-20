import React, { useEffect } from 'react'

type Props = {}

const Fetch = (props: Props) => {
  useEffect(() => {
    console.log("Render");
  }, [])

  return (
    <>
      <button>POST</button>
      <button>USER</button>
      <button>COMMENTS</button>
      <h2>Fetch Page</h2>
      <p>For practice!</p>
    </>
  )
}

export default Fetch