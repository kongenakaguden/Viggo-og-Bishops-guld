const fs = require("fs");
const path = require("path");
const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");

async function jsFilesToPDF(directory) {
    try {
        const pdfDoc = await PDFDocument.create();
        console.log("Created new PDF document.");

        // Recursive function to process JS files in the directory and its subdirectories
        const processDirectory = async (dir) => {
            const files = fs.readdirSync(dir);
            console.log(`Processing directory: ${dir}`);

            for (const file of files) {
                const filePath = path.join(dir, file);

                // If it's a directory, call the function recursively
                if (fs.statSync(filePath).isDirectory()) {
                    await processDirectory(filePath);
                } else if (file.endsWith(".js")) {
                    console.log(`Processing file: ${filePath}`);
                    const content = fs.readFileSync(filePath, "utf-8");

                    // Replace characters that can't be encoded by the font
                    const sanitizedContent = content.replace(/[^\x20-\x7E]/g, ''); // Removes non-ASCII characters

                    // Use Times-Roman font for the text
                    const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
                    const fontSize = 12;
                    const lineHeight = fontSize + 2;
                    const margin = 50;
                    let page = pdfDoc.addPage([600, 800]); // Create the first page
                    let y = page.getHeight() - margin; // Set y position to top of page

                    const lines = sanitizedContent.split("\n");

                    // Iterate through each line in the file
                    for (const line of lines) {
                        // Check if the current line fits in the page
                        if (y <= margin + lineHeight) {
                            // Start a new page if there's no space left
                            page = pdfDoc.addPage([600, 800]);
                            y = page.getHeight() - margin; // Reset Y position for new page
                            console.log("No space left on current page, adding new page...");
                        }

                        // Draw the text on the current page
                        page.drawText(line, { x: margin, y, size: fontSize, font, color: rgb(0, 0, 0) });
                        y -= lineHeight; // Move y-position down after each line
                    }

                    console.log(`Added ${filePath} to PDF.`);
                }
            }
        };

        await processDirectory(directory);

        // Save the generated PDF directly in the main directory (overwrites the existing file)
        const outputFile = path.join(".", "all-js-files.pdf");
        console.log(`Saving PDF to: ${outputFile}`);

        const pdfBytes = await pdfDoc.save();
        fs.writeFileSync(outputFile, pdfBytes);
        console.log(`PDF saved as ${outputFile}`);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Use the script
const inputDir = "."; // Directory to start processing (can change)

jsFilesToPDF(inputDir).catch(console.error);