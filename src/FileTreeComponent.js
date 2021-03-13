import "./FileTreeComponent.css";
import PropTypes from "prop-types";
import React from "react";


function FileTreeComponent(props) {

  // create an array for storing the subcomponent
  const subComponents = [];

  // loop through the properties (subcomponents) of the sub tree prop
  for (const componentName in props.subTree) {

    // assuming all indata represents a file, and not an empty folder
    // components without any subcomponents is categorised as a file
    const isFile = Object.keys(props.subTree[componentName]).length === 0;

    // decide class for this list item
    const listItemClass = isFile ? "file" : "folder";

    // create a list item that contains a FileTreeComponent component
    const component = <li key={componentName} className={listItemClass}>
      <FileTreeComponent name={componentName} subTree={props.subTree[componentName]} />
    </li>;

    // add the list item to the list of subcomponents
    subComponents.push(component);
  }

  // render the name of the component and its contents
  return (
    <React.Fragment>

      { /* render the name of this file tree component */ }
      {props.name}

      { /* only render the subcomponents list if there are any subcomponents */ }
      {subComponents.length > 0 ? <ul>{subComponents}</ul> : ""}

    </React.Fragment>
  );
}

// using prop types to get a warning if the component don't get the right props
FileTreeComponent.propTypes = {
  name: PropTypes.string.isRequired,
  subTree: PropTypes.object.isRequired
};

export default FileTreeComponent;
