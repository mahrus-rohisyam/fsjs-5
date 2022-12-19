import React from 'react'
import Button from '../atoms/Button'
import List from '../atoms/List'

function Home() {
  // const [, set] = useState(second)

  return (
    <>
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, inventore, tempore eos illum doloribus officia soluta dolores, omnis rem illo laudantium cumque? Explicabo nobis, tempora at nihil impedit praesentium sed!</p>
      <Button />
      <List name='Mahrus' key={1} />
    </>
  )
}

export default Home