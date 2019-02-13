import React from "react";


const Navigation = (props) => {

  return (
    <div>
      <a href={props.slug}>{props.name}</a>
    </div>
  );
};

export default Navigation;
