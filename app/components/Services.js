import {View, Image, Text, TouchableOpacity, Dimensions } from 'react-native'

const { width } = Dimensions.get('window');

const Services = () =>{


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