import {useState, useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';


const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name); // reference to storage
        const collectionRef = projectFirestore.collection('images'); // reference to firestore collection of images to use to enable posting from database

        storageRef.put(file).on('state_change', (snap) => {  // Put method to send file to the storage reference
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; // Math to produce percentage of upload progress 
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
           const url = await storageRef.getDownloadURL(); // get the url of the uploaded image in the storage
           const createdAt = timestamp();
           collectionRef.add({ url, createdAt }); // add the created file url and a "timestamp" for chronological posting
           setUrl(url);       
        })
    }, [file]);

    return { progress, url, error }

}

export default useStorage;