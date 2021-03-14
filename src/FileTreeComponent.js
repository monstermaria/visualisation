import "./FileTreeComponent.css";
import PropTypes from "prop-types";
import React, { useState } from "react";


function FileTreeComponent(props) {

  // use state for rendering folders open or closed
  const [open, setOpen] = useState(false);

  function toggleOpenCloseFolder(event) {

    // this line is necessary for preventing the function to trigger on enclosing components
    event.stopPropagation();

    // toggle the state variable open, which in turn triggers rerendering with the new state
    setOpen(!open);
  }

  // create an array for storing the subcomponent
  const subComponents = [];

  // variable for setting a css class on the component that changes the style of the list marker
  let listItemClass = "";

  // show or hide contents list of a folder depending on if it is open or not
  const displayClass = open ? "show" : "hide";

  // loop through the properties (subcomponents) of the subtree prop
  for (const componentName in props.subTree) {

    // create a FileTreeComponent
    const component = <FileTreeComponent key={componentName} name={componentName} subTree={props.subTree[componentName]} />;

    // add the list item to the list of subcomponents
    subComponents.push(component);
  }

  subComponents.sort((a, b) => {

    // folders before files
    const aIsFolder = Object.keys(a.props.subTree).length > 0;
    const bIsFolder = Object.keys(b.props.subTree).length > 0;

    if (aIsFolder) {
      return -1;
    }

    if (bIsFolder) {
      return 1;
    }

    return 0;
  });

  // decide class for this list item
  if (open) {
    listItemClass = "open";
  }

  // assuming all indata represents a file, and not an empty folder
  // components without any subcomponents is categorized as a file
  if (subComponents.length === 0) {
    listItemClass = "file";
  }

  // render the component as a list item with the name of the component and its contents
  return (
    <li className={listItemClass} onClick={toggleOpenCloseFolder}>

      { /* render the name of this file tree component */ }
      {props.name}

      { /* only render the subcomponents list if there are any subcomponents
          render all subcomponents, but show them only if the enclosing folder is open
          this is done to keep the open state of subfolders intact,
          when a folder higher up in the hierarcy is closed */ }
      {subComponents.length > 0 ? <ul className={displayClass}>{subComponents}</ul> : ""}

    </li>
  );
}

// using prop types to get a warning if the component don't get the right props
FileTreeComponent.propTypes = {
  name: PropTypes.string.isRequired,
  subTree: PropTypes.object.isRequired
};

export default FileTreeComponent;
