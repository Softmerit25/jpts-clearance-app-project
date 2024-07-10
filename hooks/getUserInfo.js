import { Alert } from 'react-native';
import { baseURL } from './baseUrl';

export const getUserInfo = async(token) => {

        try {
        const response = await fetch(baseURL + 'users/student/me', {
                method:'GET',
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": `${token}`,
                },
            });

            const payload = await response.json();
            
            if (!response.ok || payload.error) {
                throw new Error(payload.error);
            }

        return payload

        } catch (error) {
           Alert.alert(
            "Error message", error.message
           )
        } 

}