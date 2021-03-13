import PropTypes from "prop-types";
import React from "react";


function FileTreeComponent(props) {

  // create an array for storing the subfolder components
  const subFolders = [];

  // assuming all indata represents a file, and not an empty folder
  // "folders" without any subfolders is categorised as a file
  let isFile = true;

  // loop through the properties (subfolders) of the sub tree prop
  for (const folderName in props.subTree) {

    // this folder has subfolders, that means it is not a file
    isFile = false;

    // create a list item that contains a FileTreeComponent component
    const folder = <li key={folderName}><FileTreeComponent name={folderName} subTree={props.subTree[folderName]} /></li>;

    // add the list item to the list of sub folders
    subFolders.push(folder);
  }

  // a file has been detected and is rendered in another way than a folder
  if (isFile) {
    return (
      <React.Fragment>
        {props.name + " (file)"}
      </React.Fragment>
    );
  }

  // render the name of the folder and its contents
  return (
    <React.Fragment>
      {props.name}
      <ul>{subFolders}</ul>
    </React.Fragment>
  );
}

// using prop types to get a warning if the component don't get the right props
FileTreeComponent.propTypes = {
  name: PropTypes.string.isRequired,
  subTree: PropTypes.object.isRequired
};

export default FileTreeComponent;
