import React, {useState} from 'react';
import ProgressBar from './progressBar';


const UserInput = () => {

    const [file, setFile] = useState(null); 
    const [error, setError] = useState(null);

    const fileSelectHandler = event => {
        let selected = event.target.files[0]; // store file into variable (image to upload)

        const types = ['image/png', 'image/jpeg']; // set accepted file types

        if(selected && types.includes(selected.type)) {  // ensure a file has been selected (if selected will be truthy if a file is selected)
        setFile(selected) //set state to current file selected by user
        setError('')
        } else {
            setFile(null); // file selected set to null
            setError('Please upload a .png or .jpeg file') // error message 
            }        
        }
        
     return (
            <form>
                <p>Please Upload Your Image File Here: </p> 
                
                <input className="element"  type="file" onChange={fileSelectHandler}></input>{/* file selector input - user selects file here*/}                
                    <div className="output">
                        { error && <div className="error" >{error}</div> } {/* this creates the error message on the page for the user*/}
                        { file && <div className="file">{ file.name }</div>} 
                        { file && <ProgressBar file={file} setFile={setFile}/>}
                    </div>
                {/*<button type="submit" >Upload</button> {/* User submits file here to trigger function to post to feed -- later to also post to profile portfolio */}
            </form>
        )
    }

export default UserInput;