import React, { useEffect, useState } from 'react';
import { projectStorage, projectFireStore,timestamp } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setURL] = useState(null);
    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFireStore.collection('images');
        storageRef.put(file).on('state_changed', (snap) => {
            console.log("snap",snap);
            let percentage = (snap.bytesTransferred / snap.totalBytes)*100;
            console.log(percentage);
            setProgress(percentage);
        } , (err) => {
            setError(err);
        } , async() => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({url, createdAt})
            console.log("url",url);
            setURL(url);
        },[file]);
    });
    return {progress,  url , error};
}


export default useStorage;