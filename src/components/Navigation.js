import React from "react";


const NavigationItem = (props) => {

  return (
    <div>
      <a href={props.slug}>{props.name}</a>
    </div>
  );
};

export default NavigationItem;
