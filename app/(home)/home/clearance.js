import { View, Text, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Alert, Pressable, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Button from '../../../components/Button';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import SelectCourses from '../../components/select-courses';
import { useState } from 'react';

import * as DocumentPicker from 'expo-document-picker';
import { useSendClearanceData } from '../../../hooks/useSendClearanceData';
import { handleFileUploads } from '../../../hooks/handleFileUpload';
import { useAuthContext } from '../../../context';

const width = Dimensions.get('window').width;
const Clearance = ()=>{
    const {user, setUser } = useAuthContext();

    const {isclearanceLoading, clearanceMutation }= useSendClearanceData();

    const router = useRouter();

    const [uploadOne, setUploadOne] = useState(null);
    const [uploadTwo, setUploadTwo] = useState(null); 
    const [uploadThree, setUploadThree] = useState(null);
    const [uploadFour, setUploadFour] = useState(null);

    const [openCourses, setOpenCourses] = useState(false);
    const [ program, setProgram] = useState('');
    const [inputValues, setInputValues] = useState({
        course:'',
        centre:'',
        session:'',
        phone:'',
        country:'',
        state:'',
        qualification: '',
      });
    
      const handleInputChange = (name, text) => {
        setInputValues((prevValues) => ({ ...prevValues, [name]: text }));
      };


    // HANDLE DOCUMENT UPLOAD
    const handleUploadOne = async ()=>{
        try {
           const docFile = await DocumentPicker.getDocumentAsync({
                type:'*/*',
            });
            //console.log('document', docFile)
            const result = docFile?.assets?.[0];
            setUploadOne(result);
        } catch (error) {
            console.log(`Error selecting file for upload: ${error}`)
            throw new Error(error);
        }
    }


    const handleUploadTwo = async ()=>{
        try {
           const docFile = await DocumentPicker.getDocumentAsync({
                type:'*/*',
            });
            //console.log('document', docFile)
            const result = docFile?.assets?.[0];
            setUploadTwo(result);
        } catch (error) {
            console.log(`Error selecting file for upload: ${error}`)
            throw new Error(error);
        }
    }



    const handleUploadThree = async ()=>{
        try {
           const docFile = await DocumentPicker.getDocumentAsync({
                type:'*/*',
            });
            //console.log('document', docFile)
            const result = docFile?.assets?.[0];
            setUploadThree(result);
        } catch (error) {
            console.log(`Error selecting file for upload: ${error}`)
            throw new Error(error);
        }
    }


    const handleUploadFour = async ()=>{
        try {
           const docFile = await DocumentPicker.getDocumentAsync({
                type:'*/*',
            });
            //console.log('document', docFile)
            const result = docFile?.assets?.[0];
            setUploadFour(result);
        } catch (error) {
            console.log(`Error selecting file for upload: ${error}`)
            throw new Error(error);
        }
    }


// validate form
function validateForm(){
    if(!program){
        Alert.alert("Input Error", "Programme is required");
        return false;
    }


    if(inputValues?.course.trim() === ""){
        Alert.alert("Input Error", "Course is required");
        return false;
    }
    if(inputValues?.centre.trim() === ""){
        Alert.alert("Input Error", "Study Centre is required");
        return false;
    }

    if(inputValues?.session.trim() === ""){
        Alert.alert("Input Error", "Session is required");
        return false;
    }

    return true;
}

//  HANDLE CLEARANCE FORM SUBMIT
const handleSubmitClearance = async () =>{

    const validate = validateForm();
    if(!validate) return;

    const data = {
        programme: program,
        course_of_study: inputValues?.course,
        study_centre: inputValues?.centre,
        session: inputValues?.session,
        phone: inputValues?.phone,
        country: inputValues?.country,
        state: inputValues?.state,
        qualification: inputValues?.qualification,
    }


    //HANDLE DOCUMENTS UPLOAD
    if(uploadOne){
        const link = await handleFileUploads(uploadOne);
        data.yearOneDocumentUpload = link;
    }

    if(uploadTwo){
        const link = await handleFileUploads(uploadTwo);
        data.yearTwoDocumentUpload = link;
    }

    if(uploadThree){
        const link = await handleFileUploads(uploadThree);
        data.yearThreeDocumentUpload = link;
    }

    if(uploadFour){
        const link = await handleFileUploads(uploadFour);
        data.yearFourDocumentUpload = link;
    }
   

    const payload = await clearanceMutation(data);
    if(payload) {
            setUser(payload);
            setUploadOne(null);
            setUploadTwo(null); 
            setUploadThree(null);
            setUploadFour(null);
            setProgram('');
            setInputValues({
                course:'',
                centre:'',
                session:'',
                phone:'',
                country:'',
                state:'',
                qualification: '',
            });

        Alert.alert("Clearance Data Sent", 
            "Your information has being sent for processing. However, you still have changes of updating until its approved!")
        }
    router.push('/(home)/home');
}

    return(
        <SafeAreaView style={{width:width, flex:1, backgroundColor:'white', padding: 20,}}>
            <ScrollView showsVerticalScrollIndicator={false} vertical>

            <View style={{marginTop:50}}>
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
                    editable={user?.course_of_study ? false : true}
                    selectTextOnFocus={user?.course_of_study ? false : true}
                    value={inputValues?.course}
                    onChangeText={(text)=>handleInputChange('course', text)} 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:"100%",
                    }}
                    placeholderTextColor={user?.course_of_study ? "#000" : ""}
                     placeholder={user?.course_of_study ? user?.course_of_study : 'Course of Study'}
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
                    editable={user?.study_centre ? false: true}
                    selectTextOnFocus={user?.study_centre ? false : true}
                     value={inputValues?.centre}
                     onChangeText={(text)=> handleInputChange('centre', text)}
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:"100%",
                    }}
                     placeholder={user?.study_centre ? user?.study_centre : 'Study Centre'}
                     placeholderTextColor={user?.study_centre ? "#000" : ""}
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
                    editable={user?.country ? false: true}
                    selectTextOnFocus={user?.country ? false : true}
                    value={inputValues?.country}
                    onChangeText={(text)=>handleInputChange('country', text)} 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:"100%",
                    }}
                     placeholder={user?.country ? user?.country : 'Country'}
                     placeholderTextColor={user?.country ? "#000" : ""}
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
                    editable={user?.state ? false: true}
                    selectTextOnFocus={user?.state ? false : true}
                    value={inputValues?.state}
                    onChangeText={(text)=>handleInputChange('state', text)} 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:"100%",
                    }}
                     placeholder={user?.state ? user?.state : 'State/City'}
                     placeholderTextColor={user?.state ? "#000" : ""}
                     keyboardType="default"
                    />
                </View>


                {/* HIGHEST QUALIFICATION */}
                <View style={{
                    backgroundColor:'#E5E4E2', 
                     borderRadius: 5, 
                     marginTop: 10,
                }}>
                    <TextInput
                    value={inputValues?.qualification}
                    onChangeText={(text)=>handleInputChange('qualification', text)} 
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        width:"100%",
                    }}
                     placeholder='Enter Higest Qualification'
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
            onPress={handleUploadOne}
            style={{
                backgroundColor:'#E5E4E2', 
                borderRadius: 4,
                padding: 6, 
            }}>
                <Text style={{color:'#c60069', fontSize: 14,}}>Upload One</Text>
                <Text style={{color:'#000', fontSize: 14,}}>Upload Year 1 Semester 1 & 2 Payment Receipts</Text>
                
                <View style={{flexDirection:'row', gap:10, alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{color:'#c60069', fontSize: 10,}}>Tap to upload.</Text>
                {uploadOne && <Text style={{color:'#c60069', fontSize: 10,}}>Uploaded File: {uploadOne?.name} </Text>}
                </View>
            </Pressable>

            <Pressable 
            onPress={handleUploadTwo}
            style={{
                backgroundColor:'#E5E4E2', 
                borderRadius: 4,
                padding: 6, 
            }}>
                <Text style={{color:'#c60069', fontSize: 14,}}>Upload Two</Text>
                <Text style={{color:'#000', fontSize: 14,}}>Upload Year 2 Semester 1 & 2 Payment Receipts</Text>
                
                <View style={{flexDirection:'row', gap:10, alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{color:'#c60069', fontSize: 10,}}>Tap to upload.</Text>
                {uploadTwo && <Text style={{color:'#c60069', fontSize: 10,}}>Uploaded File: {uploadTwo?.name} </Text>}
                </View>
            </Pressable>

            <Pressable 
            onPress={handleUploadThree}
            style={{
                backgroundColor:'#E5E4E2', 
                borderRadius: 4,
                padding: 6, 
            }}>
                <Text style={{color:'#c60069', fontSize: 14,}}>Upload Three</Text>
                <Text style={{color:'#000', fontSize: 14,}}>Upload Year 3 Semester 1 & 2 Payment Receipts</Text>

                <View style={{flexDirection:'row', gap:10, alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{color:'#c60069', fontSize: 10,}}>Tap to upload.</Text>
                {uploadThree && <Text style={{color:'#c60069', fontSize: 10,}}>Uploaded File: {uploadThree?.name} </Text>}
                </View>

            </Pressable>

            <Pressable 
            onPress={handleUploadFour}
            style={{
                backgroundColor:'#E5E4E2', 
                borderRadius: 4,
                padding: 6, 
            }}>
                <Text style={{color:'#c60069', fontSize: 14,}}>Upload Four</Text>
                <Text style={{color:'#000', fontSize: 14,}}>Upload Year 4 Semester 1 & 2 Payment Receipts</Text>
                
                <View style={{flexDirection:'row', gap:10, alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{color:'#c60069', fontSize: 10,}}>Tap to upload.</Text>
                {uploadFour && <Text style={{color:'#c60069', fontSize: 10,}}>Uploaded File: {uploadFour?.name} </Text>}
                </View>

            </Pressable>
            </View>

            <Text style={{color:'#c60069', fontSize: 10, marginTop: 10}}>NOTE: ALL RECEIPTS SHOULD BE IN ONE PDF FILE FOR EACH YEAR.</Text>
            </View>

                {/* SUBMIT BUTTON */}

                <Button buttonTitle={isclearanceLoading ? "Processing..." : user?.course_of_study ? "UPDATE INFORMATION" : "Submit for Review"} 
                onPress={handleSubmitClearance} />

          

            
            </KeyboardAvoidingView>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Clearance;