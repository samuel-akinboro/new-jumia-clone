import React, {useEffect} from 'react'
import useStorage from "../../Hooks/useStorage";

function UploadModal({images, file, setFile, setImage}) {
    const { url} = useStorage(file.file)
    
    useEffect(() => {
        if (url) {
            switch (file.id) {
                case 'main-image':
                    setImage({
                      ...images,
                      firstImage: url,
                    });
                    break;
                case 'image2':
                    setImage({
                        ...images,
                        secondImage: url,
                    });
                    break;
                default:
                    setImage({
                ...images,
                thirdImage: url
                    })
            }
            
        }
     }, [url, file.id, images, setImage])
    
    return (
        <div>
            
        </div>
    )
}

export default UploadModal
