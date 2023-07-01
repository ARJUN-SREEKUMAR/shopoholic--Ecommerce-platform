import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { useEffect, useState } from 'react';

// Initialize Firebase Storage
const storage = getStorage();

const Getimg = ({ imageName }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        // Create a reference to the image file
        const imageRef = ref(storage, imageName);
        
        // Get the download URL
        const url = await getDownloadURL(imageRef);
        
        // Set the image URL in the component state
        setImageUrl(url);
      } catch (error) {
        // Handle any errors
        console.log('Error fetching image:', error);
      }
    };

    fetchImageUrl();
  }, [imageName]);

  return imageUrl;
};

export default Getimg;
