const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Base directory for notes and posts
const basePath = path.join(__dirname, '../../');



// Function to read a directory and generate a graph
function readDirectory(directoryPath, targetNodeId) {
  const data = {
    nodes: [],
    links: []
  };
  
  // Adding a primary node for each section dynamically
  const targetNodeTitle = targetNodeId.charAt(0).toUpperCase() + targetNodeId.slice(1);
  data.nodes.push({ id: targetNodeId.toLowerCase(), url: `/${targetNodeId}/`, title: targetNodeTitle });
//   data.links.push({ source: "home", target: targetNodeId.toLowerCase() });

  fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error("Error reading directory", err);
      return;
    }

    files.forEach(file => {
      if (file.isFile() && file.name.endsWith('.md')) {
        const filePath = path.join(directoryPath, file.name);
        fs.readFile(filePath, 'utf8', (err, content) => {
          if (err) {
            console.error("Error reading file", err);
            return;
          }
          const match = content.match(/---\s*\n([\s\S]*?)\n---/);
          if (match) {
            const frontMatter = yaml.load(match[1]);
            const title = frontMatter.title || 'Untitled';

            const id = path.parse(file.name).name.toLowerCase();
            let url;
            if (targetNodeId.toLowerCase() === 'blog') {
              // Parse the URL one way for blog posts
              const fileNameWithoutExtension = file.name.replace(/\.md$/, '');
              url = `/${targetNodeId.toLowerCase()}/${fileNameWithoutExtension.split('-').slice(3).join('-')}`;
            } else {
              // Parse the URL another way for other files
              url = `/${targetNodeId.toLowerCase()}/${file.name.replace(/\.md$/, '')}`;
            }

            data.nodes.push({ id, url, title });
            data.links.push({ source: targetNodeId.toLowerCase(), target: id });
          }
        });
      }
    });

    // Use a timeout to ensure all files have been processed before writing to the JSON file
    setTimeout(() => {
      const outputPath = path.join(basePath, `assets/static/${targetNodeId.toLowerCase()}_nodes.json`);
      fs.writeFile(outputPath, JSON.stringify(data, null, 2), err => {
        if (err) {
          console.error("Error writing to file", err);
        } else {
          console.log(`Data written to file: ${outputPath}`);
        }
      });
    }, 2000);
  });
}

// Example usage
readDirectory(path.join(basePath, '_notes'), 'notes');
readDirectory(path.join(basePath, '_posts'), 'blog');
