const { PDFNet } = require('@pdftron/pdfnet-node');

async function main() {
  await PDFNet.addResourceSearchPath('./lib/');

  // check if the module is available
  if (!(await PDFNet.StructuredOutputModule.isModuleAvailable())) {
    return;
  }

  await PDFNet.Convert.fileToWord('./task.pdf', 'output.docx');  // Give your input file location here
}

PDFNet.runWithCleanup(main, 'YOUR_LICENSE_KEY');  // Get your license key from PDFTron. 


// Run the application by writing the command  : node index.js