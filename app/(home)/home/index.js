import { View, Text, ScrollView, Dimensions, SafeAreaView, Image, TouchableOpacity } from "react-native";
import Slider from "../../components/Slider";
import Services from "../../components/Services";


const {width, height } = Dimensions.get('window');
const Index = ()=>{
    return(
       <SafeAreaView style={{flex: 1, padding:10, backgroundColor:'#fff', width:width, height: height}}>
        <ScrollView  
        vertical
        showsVerticalScrollIndicator={false}>
        
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View>
            <Text style={{fontSize:25, fontWeight:'700'}}>Hi, Merit</Text>
            <Text style={{fontSize: 14, fontWeight:'300'}}>
              <Text style={{fontSize: 14, fontWeight:'bold'}}>
              MATRIC NO:
              </Text>
                 REG/44101
            </Text>
            <Text style={{fontSize: 14, fontWeight:'300'}}>
            <Text style={{fontSize: 14, fontWeight:'bold'}}>
            Course:
            </Text> Computer Science
        </Text>
        </View>


       
        <TouchableOpacity activeOpacity={0.8}>
        <Image 
            style={{resizeMode:'cover', borderRadius:50, width: 60, height: 60, borderWidth: 2, borderColor:'#ccc'}}
            source={require('../../../assets/images/download.png')} />
        </TouchableOpacity>
        </View>

        <View style={{marginTop: 5,}}>
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