import $ from "jquery";
import JSZip from "jszip";

/** 
 * Initialize Drag & Drop Field and handle Files.
 * 
 * @author michael.flucher@student.tugraz.at
 */

let instance = null;
export class FileDropper {
  constructor(share, container, renderProgram) {
    this.usedFiles = {};
    this.share = share;
    this.container = container;
    this.renderProgram = renderProgram;
  }

  static createInstance(share, container, renderProgram) {
    if (instance != null) {
      return instance;
    }
    instance = new FileDropper(share, container, renderProgram);
    return instance;
  }

  static getInstance() {
    return instance;
  }

  enableDragAndDrop() {
    const $ele = $('#catblocks-file-dropper');

    $ele.on('drag dragstart dragend dragover dragenter dragleave drop', e => {
      e.preventDefault();
      e.stopPropagation();
    }).on('dragover dragenter', () => {
      $ele.addClass('hover');
    }).on('dragleave dragend drop', () => {
      $ele.removeClass('hover');
    }).on('drop', this._handleFileDrop);

    $('#dropper-file-input').on('change', this._handleInputChange);

    $ele.css('display', 'flex');
  }

  _handleFileDrop(e) {
    const files = e.originalEvent.dataTransfer.files;
    if (files && files.length > 0) {
      FileDropper.getInstance().computeFiles(files);
    }
  }

  _handleInputChange(e) {
    const files = e.originalEvent.target.files;
    if (files && files.length > 0) {
      FileDropper.getInstance().computeFiles(files);
    }
  }

  _updateView(event) {
    switch (event) {
    case "onStart": {
      $('#catblocks-file-dropper > .dropper-inner').hide();
      $('#catblocks-file-dropper > #dropper-loader').show();
      break;
    }
    case "onDone": {
      $('#catblocks-file-dropper').hide();
      $('#catblocks-file-dropper > #dropper-loader').hide();
      break;
    }
    default: {
      console.warn(`Ignore file dropper event: ${event}`);
    }
    }
  }


  /**
   * Returns the Base64 Src String for HTML.
   * @param {string} fileName relative Path to File
   * @param {string} fileExt contains either exact file ending or a string which should contain the file ending
   * @param {string} base64 encoded file
   * @memberof FileDropper
   */
  _generateBase64Src(fileName, fileExt, base64) {
    
    if (fileExt.toLowerCase() === 'png' || fileExt.toLowerCase().includes('png')) {
      return 'data:image/png;charset=utf-8;base64,' + base64;
    } 
    if (fileExt.toLowerCase() === 'jpg' || fileExt.toLowerCase().includes('jpg')) {
      return 'data:image/jpg;charset=utf-8;base64,' + base64;
    }
    if (fileExt.toLowerCase() === 'jpeg' || fileExt.toLowerCase().includes('jpeg')) {
      return 'data:image/jpeg;charset=utf-8;base64,' + base64;
    }

    if (fileExt.toLowerCase() === 'wav' || fileExt.toLowerCase().includes('wav')) {
      return 'data:audio/wav;charset=utf-8;base64,' + base64;
    }
    if (fileExt.toLowerCase() === 'mp3' || fileExt.toLowerCase().includes('mp3')) {
      return 'data:audio/mp3;charset=utf-8;base64,' + base64;
    }

    if (fileExt.toLowerCase() === 'mp4' || fileExt.toLowerCase().includes('mp4')) {
      return 'data:video/mp4;charset=utf-8;base64,' + base64;
    }

    // last try
    if (fileName.includes('/images/')) {
      console.warn('FileDropper: guessing Image type for ' + fileName);
      return 'data:image/png;charset=utf-8;base64,' + base64;
    }
    if (fileName.includes('/sounds/')) {
      console.warn('FileDropper: guessing Sound type for ' + fileName);
      return 'data:audio/mp3;charset=utf-8;base64,' + base64;
    }

    // ignore the rest
    console.warn('FileDropper: Ignoring File ' + fileName);
    return "";
  }

  computeFiles(inputFiles) {
    this._updateView('onStart');
    let containerCounter = 0;

    for (const containerfile of inputFiles) {
      const fileArray = containerfile.name.split('.');
      const ext = fileArray[fileArray.length - 1];

      if (ext === 'zip' || ext === 'catrobat') {
        // open ZIP
        const zip = new JSZip();
        zip.loadAsync(containerfile, {
          createFolders: true
        }).then(element => {

          if (element.files['code.xml'] == null) {
            throw new Error('Code.xml not found');
          }

          const fileMap = {};
          let codeXML = "";

          const zipFileKeys = Object.keys(element.files);
          const filePromises = [];

          for (const key of zipFileKeys) {
            const file = element.files[key];

            if (!file.dir) {

              if (file.name.toLowerCase() === 'code.xml') {
                const promise = zip.file(file.name).async('string');
                filePromises.push(promise);

                promise.then(str => {
                  codeXML = str;
                });

              } else {
                const promise = zip.file(file.name).async('base64');
                filePromises.push(promise);

                promise.then(base64 => {
                  let fileEnding = file.name.split('.');

                  if (fileEnding.length > 1) {
                    fileEnding = fileEnding[fileEnding.length - 1];
                    fileMap[file.name] = this._generateBase64Src(file.name, fileEnding, base64);
                  } else {
                    fileMap[file.name] = this._generateBase64Src(file.name, atob(base64).substr(0, 32), base64);
                  }
                  
                });
              }
            }
          }

          Promise.all(filePromises).then(response => {
            if (response.length !== Object.keys(fileMap).length + 1) {
              console.error('Number of Files in ZIP do not match number of read files');
            }
            this._updateView('onDone');
            const fd = FileDropper.getInstance();
            fd.renderProgram(fd.share, fd.container, codeXML, containerfile.name, containerCounter++, fileMap);
          });
        });
      }
    }
  }
}