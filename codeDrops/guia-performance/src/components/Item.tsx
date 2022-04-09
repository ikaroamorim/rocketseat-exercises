import { memo } from "react";

type ItemProps = {
   title: string;
}

function ItemComponent(props: ItemProps) {
   return <li>{props.title}</li>
}


//To use memo import it from react and use as a function to export the component.


export const Item = memo(ItemComponent)