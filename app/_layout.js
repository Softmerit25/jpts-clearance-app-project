import { Slot } from "expo-router";
import { AuthProvider } from "../context";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function Layout(){
    return(
        <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthProvider>
        <Slot />
        </AuthProvider>
        </GestureHandlerRootView>
    )
}