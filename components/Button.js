import { TouchableOpacity, Text, View, } from "react-native";

TouchableOpacity
const Button = ({buttonTitle, onPress}) =>{
    return(
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={{
                backgroundColor:'#c60069',
                borderRadius: 5,
                paddingVertical: 15,
                alignItems:'center',
                marginTop: 30,
            }}>
            <Text style={{
                fontSize: 16,
                fontWeight: 600,
                color: 'white'
            }}>
            {buttonTitle}
            </Text>
            </View>
        </TouchableOpacity>

    )
}

export default Button;