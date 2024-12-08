const fs = require('fs');
const path = require('path');

const directory = './';  // Root directory for your JS files

// Function to remove non-ASCII characters
const removeNonASCII = (text) => {
  return text.replace(/[^\x00-\x7F]/g, '');  // This will remove any non-ASCII characters
};

// Recursively process files in the directory
const processFiles = (dir) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);

    // If it's a directory, process files inside it
    if (fs.statSync(filePath).isDirectory()) {
      processFiles(filePath);
    } else if (file.endsWith('.js')) {
      // Read the content of each .js file
      let content = fs.readFileSync(filePath, 'utf-8');

      // Remove non-ASCII characters from the content
      const cleanedContent = removeNonASCII(content);

      // Write the modified content back to the file
      fs.writeFileSync(filePath, cleanedContent, 'utf-8');
      console.log(`Removed non-ASCII characters from ${filePath}`);
    }
  });
};

processFiles(directory);