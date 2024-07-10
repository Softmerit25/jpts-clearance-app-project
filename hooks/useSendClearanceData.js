import React, { useState } from 'react';
import { Alert } from 'react-native';
import { baseURL } from './baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useSendClearanceData = () => {

    const [isclearanceLoading, setIsClearanceLoading] = useState(false);

    const clearanceMutation = async (data) => {
               
        try {
        setIsClearanceLoading(true);
        const response = await fetch(baseURL + 'users/student/clearance', {
                method:'POST',
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": `${await AsyncStorage.getItem('xt')}`,
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
           setIsClearanceLoading(false);
        }
    }

return { isclearanceLoading, clearanceMutation }
}