import { Alert } from "react-native";
import { baseURL } from "./baseUrl";
import { useState } from "react";

const useFileUploader =  () =>{

        const [isLoadingFile, setIsLoadingFile] = useState(false);

    const handleFileUpload = async (file)=> {
        if(!file) return;

        setIsLoadingFile(true);
    try{
        const res = await fetch(baseURL + '/uploader', {
            method: 'POST',
            body: file,
            headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
        },
        });

        if(!res) return;
        const payload = await res.json();
        return payload;

    } catch (error) {
        Alert.alert("File Upload Error", error.message);
    }finally{
        setIsLoadingFile(false);
    }
}
return { isLoadingFile, handleFileUpload }
}

export default useFileUploader;