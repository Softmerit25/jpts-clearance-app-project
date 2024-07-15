import { View, Text, ScrollView, Dimensions, SafeAreaView, Image, TouchableOpacity } from "react-native";
import Slider from "../../components/Slider";
import Services from "../../components/Services";
import { useAuthContext } from "../../../context";
import { useRouter } from "expo-router";



const {width, height } = Dimensions.get('window');


const Index = ()=>{

   const { user } = useAuthContext();

   if(!user) return;

    const router = useRouter();

    return(
       <SafeAreaView style={{flex: 1, padding:10, backgroundColor:'#fff', width:width, height: height}}>
        <ScrollView  
        vertical
        showsVerticalScrollIndicator={false}>
        
        {user ? (
            <View style={{flexDirection:'row', marginTop:50,  alignItems:'center', justifyContent:'space-between'}}>
            <View>
                <Text style={{fontSize:18, fontWeight:'500'}}>Hi, {user?.surname}  {user?.othernames}</Text>
                <Text style={{fontSize: 14, fontWeight:'300'}}>
                  <Text style={{fontSize: 14, fontWeight:'bold'}}>
                  MATRIC NO:
                  </Text>
                   {user?.matricno}
                </Text>
                <Text style={{fontSize: 14, fontWeight:'300'}}>
                {user?.course_of_study ? <Text style={{fontSize: 14, fontWeight:'bold'}}>
                Course: {user?.course_of_study.substring(0, 20) +"..."}
                </Text>  : " "}
            </Text>
            </View>
    
    
           
            <TouchableOpacity activeOpacity={0.8} onPress={()=>{
                router.push('/(home)/settings')
            }}>
            <Image 
                style={{resizeMode:'cover', borderRadius:50, width: 60, height: 60, borderWidth: 2, borderColor:'#ccc'}}
                source={{uri: user?.profilePic}} />
            </TouchableOpacity>
            </View>
        ): null}

        <View style={{marginTop: user ? 5 : 50,}}>
            <Slider />
        </View>


        {/* SERVICE AREAS */}
        <View style={{marginBottom: 20}}>
            <Services />
        </View>

        </ScrollView>
       </SafeAreaView>
    )
}

export default Index;