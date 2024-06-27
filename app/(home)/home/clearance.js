import { View, Text, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Alert, Pressable, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Button from '../../../components/Button';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import SelectCourses from '../../components/select-courses';
import { useState } from 'react';

import * as DocumentPicker from 'expo-document-picker';

const width = Dimensions.get('window').width;
const Clearance = ()=>{

    const router = useRouter();
    const [openCourses, setOpenCourses] = useState(false);
    const [file, setFile] = useState([]);
    const [ program, setProgram] = useState('');
    const [inputValues, setInputValues] = useState({
        course:'',
        centre:'',
        session:'',
        phone:'',
        country:'',
        state:'',
      });
    
      const handleInputChange = (name, text) => {
        setInputValues((prevValues) => ({ ...prevValues, [name]: text }));
      };


    // HANDLE DOCUMENT UPLOAD
    const handleDocUpload = async ()=>{
        try {
           const docFile = await DocumentPicker.getDocumentAsync({
                type:'*/*',
            });
            //console.log('document', docFile)
            const result = docFile?.assets?.[0];
            setFile((prev)=> [...prev, result]);
        } catch (error) {
            console.log(`Error selecting file for upload: ${error}`)
            throw new Error(error);
        }
    }

    return(
        <SafeAreaView style={{width:width, flex:1, backgroundColor:'white', padding: 20,}}>
            <ScrollView showsVerticalScrollIndicator={false} vertical>

            <Pressable onPress={()=> router.back()}>
            <Ionicons name="chevron-back-circle-outline" size={32} color='#c60069' />
            </Pressable>
           
           <KeyboardAvoidingView>

            <View style={{marginTop: 15, alignItems:'center'}}>
            <Text style={{fontSize:25, fontWeight: 600, color:'#c60069'}}>
                CLEARANCE FORM
            </Text>
            </View>

            <View style={{marginTop:5, alignItems:'center'}}>
            <Text style={{fontSize:14, textAlign:'center', fontWeight: 400, color:'#000'}}>
            Kindly input correct details to avoid delay in approval.
            </Text>
            </View>

            <View style={{position:'relative'}}>
                <View style={{marginTop:30}}>
                <TouchableOpacity onPress={()=> setOpenCourses((prev)=> !prev)}
                activeOpacity={0.8} style={{
                    backgroundColor:'#E5E4E2', 
                     borderRadius: 5, 
                     flexDirection:'row',
                     alignItems:'center',
                     padding: 15,
                     justifyContent:'space-between'
                }}>
                <Text style={{fontSize:14, }}>
                    {program ? program : "Select Program"}
                </Text>
                <FontAwesome name="chevron-down" size={14} color="gray" />
                </TouchableOpacity>

                {openCourses && (
                    <View style={{marginTop:5,
                    }}>
                        <SelectCourses setProgram={setProgram} setOpenCourses={setOpenCourses} />
                    </View>
                )}

                </View>


                {/* COURSES */}
                <View style={{
                    backgroundColor:'#E5E4E2', 
                     borderRadius: 5, 
                     marginTop: 10,
                }}>
                    <TextInput
                    value={inputValues?.course}
                    onChangeText={(text)=>handleInputChange('course', text)} 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:"100%",
                    }}
                     placeholder='Course of Study'
                     keyboardType='default'
                    />
                </View>

                {/* CENTRE */}
                <View style={{
                    backgroundColor:'#E5E4E2', 
                     borderRadius: 5, 
                    marginTop: 10,
                }}>
                    <TextInput
                     value={inputValues?.centre}
                     onChangeText={(text)=> handleInputChange('centre', text)}
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:"100%",
                    }}
                     placeholder='Study Centre'
                     keyboardType='default'
                    />
                </View>

                {/* SESSION */}
                <View style={{
                    backgroundColor:'#E5E4E2', 
                     borderRadius: 5,
                     marginTop: 10, 
                }}>
                    <TextInput 
                    value={inputValues?.session}
                    onChangeText={(text)=> handleInputChange('session', text)}
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:"100%",
                    }}
                     placeholder='Enter Session eg. 2023/2024'
                     keyboardType='default'
                    />
                </View>

                <View style={{
                    backgroundColor:'#E5E4E2', 
                     borderRadius: 5, 
                     marginTop: 10,
                }}>
                    <TextInput 
                    value={inputValues?.phone}
                    onChangeText={(text)=>handleInputChange('phone', text)}
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:"100%",
                    }}
                     placeholder='Phone'
                     keyboardType='phone-pad'
                    />
                </View>

                {/* COUNTRY */}
                <View style={{
                    backgroundColor:'#E5E4E2', 
                     borderRadius: 5, 
                     marginTop: 10,
                }}>
                    <TextInput
                    value={inputValues?.country}
                    onChangeText={(text)=>handleInputChange('country', text)} 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:"100%",
                    }}
                     placeholder='Country'
                     keyboardType="default"
                    />
                </View>

                {/* STATE AND CITY */}
                <View style={{
                    backgroundColor:'#E5E4E2', 
                     borderRadius: 5, 
                     marginTop: 10,
                }}>
                    <TextInput
                    value={inputValues?.state}
                    onChangeText={(text)=>handleInputChange('state', text)} 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:"100%",
                    }}
                     placeholder='State/City'
                     keyboardType="default"
                    />
                </View>

                </View>

            {/* PAYMENT OF FEES UPLOADS */}
            <View>
                <Text style={{color:'#c60069', fontSize: 14, margin:6}}>
                    Payment of fess Upload:
                </Text>

            <View style={{
                gap: 10,
            }}>
            <Pressable 
            onPress={handleDocUpload}
            style={{
                backgroundColor:'#E5E4E2', 
                borderRadius: 4,
                padding: 6, 
            }}>
                <Text style={{color:'#c60069', fontSize: 14,}}>Upload One</Text>
                <Text style={{color:'#000', fontSize: 14,}}>Upload Year 1 Semester 1 & 2 Payment Receipts</Text>
                
                <View style={{flexDirection:'row', gap:10, alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{color:'#c60069', fontSize: 10,}}>Tap to upload.</Text>
                {file?.length > 0 && <Text style={{color:'#c60069', fontSize: 10,}}>Uploaded File: {file?.[0]?.name} </Text>}
                </View>
            </Pressable>

            <Pressable 
            onPress={handleDocUpload}
            style={{
                backgroundColor:'#E5E4E2', 
                borderRadius: 4,
                padding: 6, 
            }}>
                <Text style={{color:'#c60069', fontSize: 14,}}>Upload Two</Text>
                <Text style={{color:'#000', fontSize: 14,}}>Upload Year 2 Semester 1 & 2 Payment Receipts</Text>
                
                <View style={{flexDirection:'row', gap:10, alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{color:'#c60069', fontSize: 10,}}>Tap to upload.</Text>
                {file?.length > 0 && <Text style={{color:'#c60069', fontSize: 10,}}>Uploaded File: {file?.[1]?.name} </Text>}
                </View>
            </Pressable>

            <Pressable 
            onPress={handleDocUpload}
            style={{
                backgroundColor:'#E5E4E2', 
                borderRadius: 4,
                padding: 6, 
            }}>
                <Text style={{color:'#c60069', fontSize: 14,}}>Upload Three</Text>
                <Text style={{color:'#000', fontSize: 14,}}>Upload Year 3 Semester 1 & 2 Payment Receipts</Text>

                <View style={{flexDirection:'row', gap:10, alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{color:'#c60069', fontSize: 10,}}>Tap to upload.</Text>
                {file?.length > 0 && <Text style={{color:'#c60069', fontSize: 10,}}>Uploaded File: {file?.[2]?.name} </Text>}
                </View>

            </Pressable>

            <Pressable 
            onPress={handleDocUpload}
            style={{
                backgroundColor:'#E5E4E2', 
                borderRadius: 4,
                padding: 6, 
            }}>
                <Text style={{color:'#c60069', fontSize: 14,}}>Upload Four</Text>
                <Text style={{color:'#000', fontSize: 14,}}>Upload Year 4 Semester 1 & 2 Payment Receipts</Text>
                
                <View style={{flexDirection:'row', gap:10, alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{color:'#c60069', fontSize: 10,}}>Tap to upload.</Text>
                {file?.length > 0 && <Text style={{color:'#c60069', fontSize: 10,}}>Uploaded File: {file?.[3]?.name} </Text>}
                </View>

            </Pressable>
            </View>

            <Text style={{color:'#c60069', fontSize: 10, marginTop: 10}}>NOTE: ALL RECEIPTS SHOULD BE IN ONE PDF FILE FOR EACH YEAR.</Text>
            </View>

                {/* SUBMIT BUTTON */}

                <Button buttonTitle="Submit for Review" onPress={()=>{
                    Alert.alert("Registration Successful")
                }} />

          

            
            </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Clearance;