import './App.css';
import Folder from "./Folder";


const filePaths = [
  "marvel/black_widow/bw.png",
  "marvel/drdoom/the-doctor.png",
  "fact_marvel_beats_dc.txt",
  "dc/aquaman/mmmmmomoa.png",
  "marvel/black_widow/why-the-widow-is-awesome.txt",
  "dc/aquaman/movie-review-collection.txt",
  "marvel/marvel_logo.png",
  "dc/character_list.txt"
];

function createFileTree(paths) {

  // root represents the root of a file tree
  const root = {};

  // parse all file paths in the input
  paths.forEach((path) => {

    // get the parts of the file path
    const pathParts = path.split("/");

    // create a pointer to a position in the file tree and initiate it to "root"
    let folder = root;

    // index used when parsing the file path
    let i = 0;

    // handle all parts of the file path
    while (i < pathParts.length) {

      // part represents current folder or file
      const part = pathParts[i];

      // check if that folder or file exists at the current position in the file tree, add it if not
      if (!folder[part]) {

        // add a new folder in the current folder with the name stored in "part"
        folder[part] = {};
      }

      // update position in file tree and index in file path
      folder = folder[part];
      i++;
    }

  });

  return root;
}

function App() {

  // create an object representing the file structure
  const fileTree = createFileTree(filePaths);
  console.log(fileTree);

  return (
    <div className="App">
      <Folder name="root" subTree={fileTree} />
    </div>
  );
}

export default App;
