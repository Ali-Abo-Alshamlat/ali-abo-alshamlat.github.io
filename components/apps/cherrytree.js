import React from 'react'
import {useState} from 'react'

// Import Worker
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Cherrytree() {

  // creating new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // pdf file onChange state
  const [pdfFile, setPdfFile]=useState(null);

  // pdf file error state
  const [pdfError, setPdfError]=useState('');


  // handle file onChange event
  const allowedFiles = ['application/pdf'];
  const handleFile = (e) =>{
    let selectedFile = e.target.files[0];
    // console.log(selectedFile.type);
    if(selectedFile){
      if(selectedFile&&allowedFiles.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend=(e)=>{
          setPdfError('');
          setPdfFile(e.target.result);
        }
      }
      else{
        setPdfError('Not a valid pdf: Please select only PDF');
        setPdfFile('');
      }
    }
    else{
      console.log('please select a PDF');
    }
  } 
  return (
    <div className="container">

      {/* Upload PDF */}
      <form>
       <div className='bg-ub-green w-28 text-center rounded'>
        <label ><h2 className='text-ubt-red'>Upload PDF</h2></label> </div>
        <br></br>

        <input type='file' className="form-control text-ubt-grey"
        onChange={handleFile}></input>

        {/* we will display error message in case user select some file
        other than pdf */}
        {pdfError&&<span className='text-danger'>{pdfError}</span>}

      </form>

      {/* View PDF */}
      <h5 className='text-ubt-blue'>View PDF</h5>
      <div className="viewer text-ubt-grey">

        {/* render this if we have a pdf file */}
        {pdfFile&&(
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfFile}
            plugins={[defaultLayoutPluginInstance]}></Viewer>
          </Worker>
        )}

        {/* render this if we have pdfFile state null   */}
        {!pdfFile&&<>No file is selected yet</>}

      </div>

    </div>
  );

}
export const displayCherrytree = () => {
  return <Cherrytree />;
}
