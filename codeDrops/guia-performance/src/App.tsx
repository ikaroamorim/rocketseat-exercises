import { useState } from "react"
import { Item } from "./components/Item"

function App() {

  const [items, setItems] = useState<string[]>([])

  function addItemToList() {
    setItems([...items, `Item: ${items.length}`])
  }


  return (
    <div>
      <button onClick={addItemToList}> Add </button>
      <ul>
        {items.map(item => {
          return <Item title={item} key={item} />
        })}

      </ul>
    </div>
  )
}

export default App
