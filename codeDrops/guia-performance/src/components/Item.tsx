import { memo } from "react";

type ItemProps = {
   title: string;
   onAddToWishList: (item: string) => void
}

function ItemComponent(props: ItemProps) {
   return (
      <li>
         {props.title}
         <button
            onClick={() => props.onAddToWishList(props.title)}>
            Add to Wishlist
         </button>
      </li>)
}


//To use memo import it from react and use as a function to export the component.

export const Item = memo(ItemComponent)

//The component is using shallow compare to compare if the props changed, but they are always changing
//because the function (onAddToWishList) is always pointing to a different memory location and the component is always re rendering
