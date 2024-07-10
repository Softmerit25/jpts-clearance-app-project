import { View, Text, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Alert, Pressable, ScrollView, Dimensions } from 'react-native';
import Button from '../../components/Button';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useRegister } from '../../hooks/useRegister';

const width = Dimensions.get('window').width;

const RegisterScreen = ()=>{

    const router = useRouter();

    const [registerInput, setRegisterInput] = useState({
        surname:'',
        othernames:'',
        email:'',
        username:'',
        matricno:'',
        password:'',
    })

    const handleRegisterInputChange = (name, text)=>{
        setRegisterInput((prevInput)=> ({...prevInput, [name]: text}))
    }

const {Register, isRegisterLoading } = useRegister();



// validate register inputs
function validateRegisterInput(){
    if(registerInput?.surname.trim()=== ""){
        Alert.alert("Input Error", "Surname is required!");
        return false;
    }
    if(registerInput?.othernames.trim() === ""){
        Alert.alert("Input Error", "Othernames is required!");
        return false;
    }

    if(registerInput?.email.trim() === ""){
        Alert.alert("Input Error", "Email is required!");
        return false;
    }
    if(registerInput?.username.trim() === ""){
        Alert.alert("Input Error", "Jpts portal username is required!");
        return false;
    }
    if(registerInput?.matricno.trim() === ""){
        Alert.alert("Input Error", "Matricno is required!");
        return false;
    }
    if(registerInput?.password.trim() === ""){
        Alert.alert("Input Error", "Password is required!");
        return false;
    }

    return true;
}


const handleRegister = async () =>{

    const validate = validateRegisterInput();
    if(!validate) return;

   const res = await Register(registerInput);
   if(res){
    Alert.alert("Success", res.message);

    router.push('/(auth)/login');
    setRegisterInput({
        surname:'',
        othernames:'',
        email:'',
        username:'',
        matricno:'',
        password:'',
    })
   }
}


return(
        <SafeAreaView style={{width:width, flex:1, backgroundColor:'white', padding: 20,}}>
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
                     value={registerInput?.surname}
                     onChangeText={(text)=> handleRegisterInputChange('surname', text)} 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width: "100%"
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
                    value={registerInput?.othernames}
                    onChangeText={(text)=> handleRegisterInputChange('othernames', text)} 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                         width: "100%"
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
                    value={registerInput?.email}
                    onChangeText={(text)=> handleRegisterInputChange('email', text)} 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                         width: "100%"
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
                    value={registerInput?.username}
                    onChangeText={(text)=> handleRegisterInputChange('username', text)} 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                         width: "100%"
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
                    value={registerInput?.matricno}
                    onChangeText={(text)=> handleRegisterInputChange('matricno', text)} 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                         width: "100%"
                    }}
                     placeholder='Matric No. eg. Reg/44xxx'
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
                    value={registerInput?.password}
                    onChangeText={(text)=> handleRegisterInputChange('password', text)}  
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width: "100%"
                    }}
                     placeholder='Create Password'
                     secureTextEntry={true}
                     keyboardType="number-pad"
                    />
                </View>
                </View>

                {/* LOGIN BUTTON */}

                <Button buttonTitle={isRegisterLoading ? "Processing..." : "Register"} onPress={handleRegister} />

          

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