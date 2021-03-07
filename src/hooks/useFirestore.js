import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection) // access the collection on firestore
            .orderBy('createdAt', 'desc') // order the collected data descending by date/time created
            .onSnapshot((snap) => {          // takes a realtime "snapshot" of database - updating with any new images
                let documents = []; // empty array which will hold the data from the collection
                snap.forEach( doc => {   // funtion on each piece of data
                    documents.push({...doc.data(), id: doc.id, rating: 7}) // push the data to the documents array and attach the unique id of that piece of data
                }) ;                                            
                setDocs(documents);
            });

        return () => unsub(); // this calls the unsubscribe function above whenever no longer need to access it
    }, [collection]) 

    return { docs };
}

export default useFirestore;