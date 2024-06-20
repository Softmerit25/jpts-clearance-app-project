import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


export default function Layout(){
    return(
        <>
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle:{
                height: 60,
                backgroundColor:'#fff',
                borderTopWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
            }
        }}>
        <Tabs.Screen name="home" options={{
            tabBarLabel: ()=> null,
            tabBarIcon: ({focused})=> <AntDesign name="home" size={24} color={focused ? "#c60069" : "black"} />
            
        }}/>


        <Tabs.Screen name="news" options={{
            tabBarLabel: ()=> null,
            tabBarIcon: ({focused})=> <Ionicons name="calendar-clear-outline" size={24} color={focused ? "#c60069" : "black"}/>
            
        }}/>


        <Tabs.Screen name="notifications" options={{
            tabBarLabel: ()=> null,
            tabBarIcon: ({focused})=> <MaterialIcons name="notifications-none" size={24} color={focused ? "#c60069" : "black"} />
            
        }}/>


        <Tabs.Screen name="settings" options={{
            tabBarLabel: ()=> null,
            tabBarIcon: ({focused})=> <SimpleLineIcons name="settings" size={24} color={focused ? "#c60069" : "black"} />
            
        }}/>
        </Tabs>
        </>
    )
}