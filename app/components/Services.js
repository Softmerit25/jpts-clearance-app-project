import { useRouter } from 'expo-router';
import {View, Image, Text, TouchableOpacity, Dimensions, Alert } from 'react-native'
import { useAuthContext } from '../../context';

const { width } = Dimensions.get('window');

const Services = () =>{
    const { user } = useAuthContext();
    const router = useRouter();

    const serviceData = [
        {
            id: 0,
            title: 'Apply for Clearance',
            icon: require('../../assets/images/apply.png'),
            bgColor: "#DCA4B4"
        },

        {
            id: 1,
            title: 'Check Clearance Status',
            icon: require('../../assets/images/check.png'),
            bgColor: "#E4F4E4"
        },
        {
            id: 2,
            title: 'Print Clearance Certificate',
            icon: require('../../assets/images/print.png'),
            bgColor: "#D2E2EB"
        },
        {
            id: 3,
            title: 'Other Services',
            icon: require('../../assets/images/services.png'),
            bgColor: "#C60069"
        }
    ]


    return(
        <View style={{ width: width, flexDirection:'row', gap:20, flexWrap: 'wrap' }}>
          {serviceData && serviceData.map((item, index)=>(
            <TouchableOpacity key={index} 
            onPress={()=> {
                index === 0 ? router.push('/(home)/home/clearance')
                : index === 1 ? (
                    user?.clearanceStatus === "approved" ? 
                    Alert.alert("Clearance Status", "Contragulations!. Your Clearance has being approved. Kindly click okay to download your clearance certificate.", 
                        [
                            {
                                text: 'Okay',
                                onPress: ()=> router.push('/(home)/home/certificate')
                            },
                            {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel'
                            },
                        ]) :
                    Alert.alert("Clearance Status", "Your Clearance Status is Pending and in process...Keep checking.")
                ) : index === 2 ? (
                    user?.clearanceStatus === "approved" ? router.push('/(home)/home/certificate') : 
                    Alert.alert("Print Clearance", "Your Clearance Status is Pending and in process...Keep checking.")
                ) :
                index === 3 ? Alert.alert("Coming Soon!"): null;
            }} 
            activeOpacity={0.8} style={{
                backgroundColor: `${item?.bgColor}`,
                padding: 15,
                borderRadius: 5,
                width: 160,
                height: 150,
            }}>
            <Text style={{fontSize:16, fontWeight:400}} numberOfLines={2}>{item?.title}</Text>
            <Image source={item?.icon} style={{
                width: 80, height: 80, resizeMode:'contain',
                marginTop: 10,
            }} />
            </TouchableOpacity>
          ))}
        </View>
    )
}

export default Services;