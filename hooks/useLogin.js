import React, { useState } from 'react';
import { Alert } from 'react-native';
import { baseURL } from './baseUrl';

export const useLogin = () => {
    const [isLoginLoading, setIsLoginLoading] = useState(false);

    const LoginMutation = async (data) => {
       
        setIsLoginLoading(true);
        try {
        
        const response = await fetch(baseURL + 'auth/student/login', {
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
           setIsLoginLoading(false);
        }
    }

return { isLoginLoading, LoginMutation }
}