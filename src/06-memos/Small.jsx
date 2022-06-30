// import { memo } from "react";
import React from "react";

export const Small = React.memo(({value}) => {
    console.log('me estoy dibujando');
  return (
    <small>{value}</small>
  )
})
