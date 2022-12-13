const fs = require("fs");
/**
 * File Handling
 * Digunakan untuk CRUD file
 */

let sebuahData = {
  name: "Mahrus Sayid",
  age: 23,
  state: "Indonesia",
};

class FileHandler {
  create(path, data) {
    fs.appendFile(path, data, (err) => {
      if (err) throw err;
      console.log(`Creating data ${data}...`);
      console.log("Successfully created");
    });
  }

  read(path) {
    fs.readFile(path, (err, data) => {
      if (err) throw err;
      console.log(`Reading ${path}\n ${data}`);
    });
  }

  update(path, newData) {
    // Replace existting file
    if (typeof newData === 'object') JSON.stringify(newData);
    fs.writeFile(path, newData, (err) => {
      if(err) throw err;
      console.log(`Successfully updated ${path}`);
    })
    console.log("File updated");
  }

  delete(path) {
    console.log(`Deleting ${path}`);
    fs.unlink(path, (err) => {
      if (err) throw err;
      console.log("File successfully deleted");
    })
  }

  rename(path, newPath){
    console.log('Renaming ${path} to ${newPath}');
    fs.rename(path, newPath, (err) => {
      if (err) throw err;
      console.log("Successfully renamed ${path} to ${newPath}");
    })
  }
}

let run = new FileHandler();


sebuahData = JSON.stringify(sebuahData) + ",\n";

// run.create("./files/written-file.txt", data);
// run.create(`${__dirname}/files/write-file.txt`, sebuahData);
// run.read("./files/written-file.txt");
// run.update("./files/written-file.txt", "Hello World!");
run.delete("./files/written-file.txt")
// run.rename("./files/written-file.txt", "./files/renamed-file.txt")