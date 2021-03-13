import PropTypes from "prop-types";


function Folder(props) {

  // create an array for storing the sub folder components
  const subFolders = [];

  // loop through the properties (sub folders) of the sub tree prop
  for (const folderName in props.subTree) {

    // create a list item that contains a Folder component
    const folder = <li key={folderName}><Folder name={folderName} subTree={props.subTree[folderName]} /></li>;

    // add the list item to the list of sub folders
    subFolders.push(folder);
  }

  // render the name of the folder and its contents
  return (
    <div>
      {props.name}
      <ul>{subFolders}</ul>
    </div>
  );
}

// using prop types to get a warning if the component don't get the right props
Folder.propTypes = {
  name: PropTypes.string.isRequired,
  subTree: PropTypes.object.isRequired
};

export default Folder;
