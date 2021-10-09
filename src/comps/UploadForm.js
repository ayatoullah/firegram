import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
const UploadForm = () => {
    const [file, setFile ] = useState(null);
    const [error, setError] = useState(null);
    const types = ["image/png", "image/jpeg"];
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
        } else {
            setFile(null);
            setError("please select an png image or jpeg image");
        }

        //console.log(selected);
    }
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
           
            {file && <h1>{file.name}</h1>}
            {error && <h1>{error}</h1>} 
            {file && <ProgressBar file={file} setFile={setFile}/>}
        </form>
        
    )
}
export default UploadForm;