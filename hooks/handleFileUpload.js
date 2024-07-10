import axios from "axios";
import { Alert } from "react-native";

export const handleFileUploads = async (file) =>{
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'jpts_clearance');

    try{
        const res = await axios.post('https://api.cloudinary.com/v1_1/softmerit/auto/upload', data);
        const { secure_url } = res.data;
        return secure_url;

    } catch (error) {
        Alert.alert("File Upload Error", error.message);
    }
}