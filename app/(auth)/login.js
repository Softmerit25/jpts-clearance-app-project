import { View, Text, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Alert, Pressable, Dimensions } from 'react-native';
import Button from '../../components/Button';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const width = Dimensions.get('window').width;
const LoginScreen = ()=>{

    const router = useRouter();
    const [loginInput, setLoginInput] = useState({
        matricno:'',
        password:'',
    })

    const handleLoginInputChange = (name, text)=>{
        setLoginInput((prevInput)=> ({...prevInput, [name]: text}))
    }


    return(
        <SafeAreaView style={{width:width, flex:1, backgroundColor:'white', padding: 20,}}>
           <KeyboardAvoidingView>
            <View style={{marginTop: 50, alignItems:'center'}}>
                <Image style={{ width:180, height:100, resizeMode:'contain'}}
                source={require("../../assets/images/logo.png")}/>
            </View>

            <View style={{marginTop: 20, alignItems:'center'}}>
            <Text style={{fontSize:25, fontWeight: 600, color:'#c60069'}}>JPTS STUDENT</Text>
            <Text style={{fontSize:25, fontWeight: 600, color:'#c60069'}}>CLEARANCE PORTAL</Text>
            </View>

            <View style={{marginTop: 10, alignItems:'center'}}>
            <Text style={{fontSize:16, fontWeight: 400, color:'#000'}}>
                Sign in to continue
            </Text>
            </View>

            
                <View style={{marginTop:30,}}>
                <View style={{
                    backgroundColor:'#E5E4E2', 
                     borderRadius: 5, 
                }}>
                    <TextInput 
                     value={loginInput?.matricno}
                     onChangeText={(text)=> handleLoginInputChange('matricno', text)}
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:'100%',
                    }}
                     placeholder='Enter Matric No. e.g REG/44101'
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
                    value={loginInput?.password}
                    onChangeText={(text)=> handleLoginInputChange('password', text)}
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:'100%'
                    }}
                     placeholder='Password'
                     secureTextEntry={true}
                     keyboardType="number-pad"
                    />
                </View>
                </View>

                {/* LOGIN BUTTON */}

                <Button buttonTitle="Login" onPress={()=>{
                    Alert.alert("Login Successful");
                    router.push('/(home)/home')
                }} />

                {/* FORGOT PASSWORD */}

                <Pressable style={{
                    marginTop: 10,
                    alignItems:'flex-end',
                }}>
                    <Text style={{
                        textDecorationLine:'underline',
                        color:'blue',
                        fontSize:12,
                        fontWeight: 300
                    }}>
                        Forgot password
                    </Text>
                </Pressable>


                {/* REGISTER */}

                <View style={{flexDirection:'row', gap:5, marginTop:30, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 400,
                    }}>
                        Don't have an account?
                    </Text>

                    <Pressable onPress={()=>{
                        router.push("/(auth)/register");
                    }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: "#c60069"
                    }}>
                            Register
                        </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen;