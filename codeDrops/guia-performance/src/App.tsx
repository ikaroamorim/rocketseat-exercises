import { useMemo, useState, useCallback } from "react"
import { Item } from "./components/Item"

function App() {

  const [items, setItems] = useState<string[]>([])

  const [wishList, setWishList] = useState<string[]>([])

  const [newItem, setNewItem] = useState('')

  function addItemToList() {
    setItems([...items, `Item: ${items.length}`])
  }

  /*

  The useCallback hook will be used with this function
  function addItemToWishList(item: string) {
    setWishList([...wishList, item])
  }*/

  const addItemToWishList = useCallback((item: string) => {
    setWishList(state => [...state, item]) //Is the same as setWishList([...wishList, item]) and you can remove the dependency wishList of dependencyArray
  }, [])

  //The below code depends exclusevily on items state and not on newItem
  //So using the useMemo, it will not recalculate everytime newItem changes
  //const countItemsWithOne = items.filter(item => item.includes('1')).length

  const countItemsWithOne = useMemo(() => {
    console.log('teste')
    return items.filter(item => item.includes('1')).length
  }, [items])

  return (
    <div>
      <input type="text" onChange={e => setNewItem(e.target.value)} value={newItem} />
      <button onClick={addItemToList}> Add </button>
      <ul>
        {items.map(item => {
          return <Item
            title={item}
            key={item}
            onAddToWishList={addItemToWishList} />
        })}
      </ul>
      <div>
        Contagem: {countItemsWithOne}
      </div>
    </div>
  )
}

export default App
