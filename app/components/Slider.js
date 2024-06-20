import { Dimensions, View, Text, Image } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
const width = Dimensions.get('window').width;

const Slider = () =>{

    const slide = [
        // "https://source.unsplash.com/1024x768/?nature",
        // "https://source.unsplash.com/1024x768/?water",
        // "https://source.unsplash.com/1024x768/?girl",
        // "https://source.unsplash.com/1024x768/?tree",
       {
        id: 0,
        img: require('../../assets/images/amarachi.png'), 
       },
       {
        id: 1,
        img: require('../../assets/images/amarachi.png'),
       }        
      ]

    return(
        <View style={{flex: 1}}>
            <Carousel
                loop
                mode="parallax"
                width={width}
                height={width /1.5}
                autoPlay={true}
                data={slide}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) =>{}}
                renderItem={({item, index }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems:'center',
                        }}
                    >
                        <Image source={item?.img} style={{resizeMode:"contain", borderRadius: 10, width: width, height: width/ 1.5}}/>
                    </View>
                )}
            />
        </View>
    );
}

export default Slider;