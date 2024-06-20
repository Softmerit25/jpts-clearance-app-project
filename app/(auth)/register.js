import { View, Text, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Alert, Pressable, ScrollView } from 'react-native';
import Button from '../../components/Button';
import { useRouter } from 'expo-router';

const RegisterScreen = ()=>{

    const router = useRouter();

    return(
        <SafeAreaView style={{width:'100%', flex:1, backgroundColor:'white', padding: 20, alignItems:'center'}}>
            <ScrollView showsVerticalScrollIndicator={false} vertical>
           <KeyboardAvoidingView>
            <View style={{marginTop: 30, alignItems:'center'}}>
                <Image style={{ width:180, height:80, resizeMode:'contain'}}
                source={require("../../assets/images/logo.png")}/>
            </View>

            <View style={{marginTop: 10, alignItems:'center'}}>
            <Text style={{fontSize:25, fontWeight: 600, color:'#c60069'}}>JPTS STUDENT</Text>
            <Text style={{fontSize:25, fontWeight: 600, color:'#c60069'}}>CLEARANCE PORTAL</Text>
            </View>

            <View style={{marginTop: 10, alignItems:'center'}}>
            <Text style={{fontSize:25, fontWeight: 400, color:'#000'}}>
                Welcome
            </Text>
            </View>

            
                <View style={{marginTop:30}}>
                <View style={{
                    backgroundColor:'#E5E4E2', 
                     borderRadius: 5, 
                }}>
                    <TextInput 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:300,
                    }}
                     placeholder='Surname'
                     keyboardType='default'
                    />
                </View>

                <View style={{
                    backgroundColor:'#E5E4E2', 
                     borderRadius: 5, 
                     marginTop: 10,
                }}>
                    <TextInput 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:300,
                    }}
                     placeholder='FirstName & Other name'
                     keyboardType='default'
                    />
                </View>


                <View style={{
                    backgroundColor:'#E5E4E2', 
                     borderRadius: 5, 
                    marginTop: 10,
                }}>
                    <TextInput 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:300,
                    }}
                     placeholder='Email'
                     keyboardType='default'
                    />
                </View>


                <View style={{
                    backgroundColor:'#E5E4E2', 
                     borderRadius: 5,
                     marginTop: 10, 
                }}>
                    <TextInput 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:300,
                    }}
                     placeholder='JPTS portal username'
                     keyboardType='default'
                    />
                </View>

                <View style={{
                    backgroundColor:'#E5E4E2', 
                     borderRadius: 5, 
                     marginTop: 10,
                }}>
                    <TextInput 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:300,
                    }}
                     placeholder='Matric No.'
                     keyboardType='default'
                    />
                </View>

                {/* PASSWORD */}
                <View style={{
                    backgroundColor:'#E5E4E2', 
                     borderRadius: 5, 
                     marginTop: 10,
                }}>
                    <TextInput 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:300,
                    }}
                     placeholder='Create Password'
                     secureTextEntry={true}
                     keyboardType="number-pad"
                    />
                </View>
                </View>

                {/* LOGIN BUTTON */}

                <Button buttonTitle="Register" onPress={()=>{
                    Alert.alert("Registration Successful")
                }} />

          

                {/* REGISTER */}

                <View style={{flexDirection:'row', gap:5, marginTop:30, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 400,
                    }}>
                        Already have an account?
                    </Text>

                    <Pressable onPress={()=>{
                        router.push("/(auth)/login");
                    }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: "#c60069"
                    }}>
                        Login
                        </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterScreen;