import { View, Text, SafeAreaView, Image, Dimensions, Alert, } from 'react-native';
import Button from '../../../components/Button';
import { useRouter } from 'expo-router';


const width = Dimensions.get('window').width;
const CertificateScreen = ()=>{

    const router = useRouter();

    return(
        <SafeAreaView style={{width:width, flex:1, backgroundColor:'white', padding: 20,}}>
            <View style={{marginTop: 50, alignItems:'center'}}>
                <Image style={{ width:180, height:100, resizeMode:'contain'}}
                source={require("../../../assets/images/logo.png")}/>
            </View>

            <View style={{marginTop: 20, alignItems:'center'}}>
            <Text style={{fontSize:25, fontWeight: 600, color:'#c60069'}}>
                APPROVED
            </Text>
            <Text style={{fontSize:25, fontWeight: 600, color:'#c60069'}}>
                CLEARANCE CERTIFICATE
            </Text>
            </View>

            <View style={{marginTop: 10,}}>
            <Text style={{fontSize:14, fontWeight: 400, color:'#000'}}>
             Hello, Merit.
            </Text>
            <Text style={{fontSize:14, fontWeight: 400, color:'#000'}}>
             Congratulations.
            </Text>

            <Text style={{fontSize:14, fontWeight: 400, color:'#000'}}>
            This is to notify you that your clearance has being
            approved. Kindly download your clearance certificate, print and come 
            along with it to the school.
            </Text>
           
            </View>

                {/* DOWNLOAD BUTTON */}

            <View>
            <Button buttonTitle="Download Certificate" onPress={()=>{
                    Alert.alert("Successfully");
                    router.push('/(home)/home')
                }} />
            </View>

               
        </SafeAreaView>
    )
}

export default CertificateScreen;