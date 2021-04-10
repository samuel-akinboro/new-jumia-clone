import { useState, useEffect } from 'react'
import {db, photoDB } from '../Firebase'

const useStorage = (file) => {
    const [progress, setProgress] = useState(null);
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        const photoRef = photoDB.ref(file.name);
        photoRef.put(file).on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage)
        }, (err) => setError(err), async () => {
                const url = await photoRef.getDownloadURL();
                setUrl(url)
        })
    }, [file])

    return {progress, url, error}
}

export default useStorage