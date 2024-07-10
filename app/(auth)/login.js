import { View, Text, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Alert, Pressable, Dimensions } from 'react-native';
import Button from '../../components/Button';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserInfo } from '../../hooks/getUserInfo';
import { useAuthContext } from '../../context';
const width = Dimensions.get('window').width;


const LoginScreen = ()=>{
    const { isLoginLoading, LoginMutation } = useLogin();
    const router = useRouter();
   const { setUser } = useAuthContext()

    const [loginInput, setLoginInput] = useState({
        matricno:'',
        password:'',
    })

    const handleLoginInputChange = (name, text)=>{
        setLoginInput((prevInput)=> ({...prevInput, [name]: text}))
    }

    

    // CHECK USER LOG IN STATE
    useEffect(()=>{
        const checkLoginStatus = async() =>{
           try {
            const token = await AsyncStorage.getItem('xt');
            if(token){
            const result = await getUserInfo(token);
            setUser(result);
            setTimeout(()=>{
                router.replace('/(home)/home');
            }, 5);

            }

           } catch (error) {
             Alert.alert("Error", error.message);
           }
        }

     checkLoginStatus();
    },[])




// validate login input
function validateLoginInput(){
    if(loginInput?.matricno.trim() === ""){
        Alert.alert("Input Error", "Matricno is required!");
        return false;
    }

    if(loginInput?.password.trim() === ""){
        Alert.alert("Input Error", "Password is required!");
        return false;
    }

    return true;
}
// HANDLE LOGIN FUNCTION
const handleLogin = async()=>{
        const validate = validateLoginInput();
        if(!validate) return;
        
      const payload = await LoginMutation(loginInput);

      if(payload){
        setUser(payload?.data);
        await AsyncStorage.setItem('xt', payload?.xt);
        router.replace('/(home)/home');
        Alert.alert("Success", "Login Successful!");
        setLoginInput({
            matricno:'',
            password:'',
        })
 
      }
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

                <Button buttonTitle={isLoginLoading ? "Processing..." : "Login"} onPress={handleLogin} />

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