
import React, { useEffect } from 'react';
import useFirestore from '../hooks/useFirestore';
const ImageGrid = () => {
    const {docs} = useFirestore('images');
    console.log('docs',docs);
    return (
        <div className="img-grid">

            {docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}>
                    <img src={doc.url} alt="uploadedPic" />
                </div>

             ))}
        </div>
    )
}
export default ImageGrid;