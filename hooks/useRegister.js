import React, { useState } from 'react';
import { Alert } from 'react-native';
import { baseURL } from './baseUrl';

export const useRegister = () => {
    const [isRegisterLoading, setIsRegisterLoading] = useState(false);

    const Register = async (data) => {
       
        setIsRegisterLoading(true);
        try {
        
        const response = await fetch(baseURL + 'auth/student/register', {
                method:'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });

            const payload = await response.json();
            
            if (!response.ok || payload.error) {
                throw new Error(payload.error);
            }
        
        return payload;

        } catch (error) {
           Alert.alert(
            "Error message", error.message
           )
        } finally {
            setIsRegisterLoading(false);
        }
    }

return { isRegisterLoading, Register }
}