import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

function FavoritePage() {
    const favoriteProduct = useSelector((state: RootState) => state.favoriteProduct.favoriteProduct)
    console.log(favoriteProduct);
    
    return (
      <div>{favoriteProduct.map((item) => {
        return <h2 key={item.id}>{item.title}</h2>
      })}</div>
    )
  }
  
  export default FavoritePage

  