import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { View, SafeAreaView, Text, Dimensions, Pressable } from "react-native"
import { useAuthContext } from "../../context";

const { width } = Dimensions.get('window');

const Settings = () =>{

const router = useRouter();

const { setUser } = useAuthContext();



// HANDLE STUDENT SIGNOUT
const handleLogout = async() =>{
  await AsyncStorage.removeItem('xt');
    setUser(null);
    setTimeout(()=>{
    router.replace('/(auth)/login');
    }, 100)
}


return(
        <SafeAreaView style={{width: width, flex: 1, backgroundColor:'#fff', alignItems:'center', justifyContent:'center'}}>
        <View style={{padding: 10,}}>
        <View style={{width: width - 20, paddingVertical: 15,  backgroundColor:"#c60069" }}>
            <Text style={{textAlign:'center', color:'#fff', fontWeight:'600'}}>Settings</Text>
        </View>


        <View style={{marginTop: 20, alignItems:'center'}}>
            <Text>Comming Soon!</Text>
        </View>

        <Pressable onPress={handleLogout}>
        <View style={{width: 100, marginTop: 100, paddingVertical: 15,  backgroundColor:"#767676", borderRadius: 5, alignSelf:'center' }}>
            <Text style={{textAlign:'center', color:'#fff', fontWeight:'600'}}>
                Log out
            </Text>
        </View>
        </Pressable>
        </View>
        </SafeAreaView>
    )
}


export default Settings