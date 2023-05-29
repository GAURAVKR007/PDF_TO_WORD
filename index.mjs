import { PDFNet } from '@pdftron/pdfnet-node/lib/pdfnet.node.js';

// Rest of your code


const wrapper = document.querySelector('.wrapper');
const form = document.querySelector('#form1');
const fileInput = document.querySelector('#file');
const submitBtn = document.querySelector('.submit');

async function main() {
  await PDFNet.addResourceSearchPath('./lib/');

  // check if the module is available
  if (!(await PDFNet.StructuredOutputModule.isModuleAvailable())) {
    return;
  }

  await PDFNet.Convert.fileToWord(fileInput, 'output.docx');
}

PDFNet.runWithCleanup(main, 'demo:1685272401794:7db90cec0300000000c72301abd72bd2a99403ff09f3e3f11d861849c7');

submitBtn.addEventListener('click', () => {
  main();
});
