import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Rating from './rating';

const Feed = () => {
    const { docs } = useFirestore('images') // uses useFirestore hook to collect the data from the firebase database
    console.log(docs)


    return (
           <div>
               {/* to display file which has been uploaded and to wrap that file in a UI which holds rating checkbox (1-10 or 1-5) this rating then applid to portfolio pic */}
                { docs && docs.map(doc => (
                    <div className="images" key={doc.id}>
                        <figure>
                            <img src={doc.url} alt="uploaded picture"></img>
                            <figcaption>This picture was rated and Average:<span> {doc.rating} </span> out of 5</figcaption>
                            <Rating />
                        </figure>
                        
                    </div>
                ))}
                {/* also a text area option for other users to leave comments on models displayed */}
               
           </div>
        )
    
};

export default Feed;