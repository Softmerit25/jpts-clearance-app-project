import { TouchableOpacity, Text, View, Dimensions, } from "react-native";

const Button = ({buttonTitle, onPress}) =>{
    return(
        <TouchableOpacity 
        style={{width:'100%', alignSelf:'center'}}
        activeOpacity={0.8} 
        onPress={onPress}>
            <View style={{
                width: "100%",
                backgroundColor:'#c60069',
                borderRadius: 5,
                paddingVertical: 15,
                paddingHorizontal: 10,
                alignItems:'center',
                marginTop: 30,
                alignSelf:'center',
                justifyContent:'center',
                alignItems:'center',
            }}>
            <Text style={{
                fontSize: 16,
                fontWeight: 600,
                color: 'white',
                textTransform:'uppercase'
            }}>
            {buttonTitle}
            </Text>
            </View>
        </TouchableOpacity>

    )
}

export default Button;