import { storage, db } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const uploadInspectionPhoto = async (file: File, inspectionId: string, metadata: object) => {
  try {
    // 1. Create a unique path in your new 'Storage Admin' bucket
    const storageRef = ref(storage, `inspections/${inspectionId}/${file.name}`);
    
    // 2. Upload with metadata (VIN, GPS, etc.)
    const uploadTask = await uploadBytes(storageRef, file, { customMetadata: { ...metadata } });
    
    // 3. Get the high-res URL
    const downloadURL = await getDownloadURL(uploadTask.ref);
    
    // 4. Log the success to Firestore
    await addDoc(collection(db, "media_logs"), {
      inspectionId,
      url: downloadURL,
      type: 'photo',
      timestamp: serverTimestamp()
    });

    return downloadURL;
  } catch (error) {
    console.error("Storage Admin Upload Failed:", error);
    throw error;
  }
};
