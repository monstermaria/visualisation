import PropTypes from "prop-types";


function Folder(props) {

  // create an array for storing the sub folder components
  const subFolders = [];

  for (const folderName in props.subTree) {
    const folder = <li key={folderName}><Folder name={folderName} subTree={props.subTree[folderName]} /></li>;
    subFolders.push(folder);
  }

  return (
    <div>
      {props.name}
      <ul>{subFolders}</ul>
    </div>
  );
}

Folder.propTypes = {
  name: PropTypes.string.isRequired,
  subTree: PropTypes.object.isRequired
};

export default Folder;
