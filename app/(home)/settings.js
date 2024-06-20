import { View, SafeAreaView, Text, Dimensions } from "react-native"

const { width } = Dimensions.get('window');

const Settings = () =>{
    return(
        <SafeAreaView style={{width: width, flex: 1, backgroundColor:'#fff', alignItems:'center', justifyContent:'center'}}>
        <View style={{padding: 10,}}>
        <View style={{width: width - 20, paddingVertical: 15,  backgroundColor:"#c60069" }}>
            <Text style={{textAlign:'center', color:'#fff', fontWeight:'600'}}>Settings</Text>
        </View>


        <View style={{marginTop: 20, alignItems:'center'}}>
            <Text>Comming Soon!</Text>
        </View>
        </View>
        </SafeAreaView>
    )
}


export default Settings