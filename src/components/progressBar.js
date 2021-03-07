import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';


const ProgressBar = ({ file, setFile }) => {

    const { url, progress } = useStorage(file) // accessing the url and progress from the usStorage hook
    
    useEffect(() => {
        if(url){        
            setFile(null) // return the file status to null
        }
    },[url, setFile]) // dependancies for useEffect function - this will remove the progress bar once fully uploaded - url has been provided

    return (
        <div className="progress-bar" style={{width: progress + '%' /*matches width to progress percentage of upload*/}}></div> 
    )
}

export default ProgressBar;