import { View, Text, TouchableOpacity } from "react-native"

const SelectCourses = ({setProgram, setOpenCourses})=>{
const courses = [
    {
        id: 0,
        title: "Online Topup"
    },
    {
        id: 1,
        title: "Professional Certificate Level 1"
    },
    {
        id: 2,
        title: "Professional Certificate Level 4"
    },
    {
        id: 3,
        title: "Professional Certificate Level 5"
    },
    {
        id: 4,
        title: "Professional Certificate Level 6"
    },
    {
        id: 5,
        title: "Professional Certificate Level 9 (PhD Supervison)"
    },
    {
        id: 6,
        title: "Professional Courses"
    }
]
    return(
        <View style={{
            backgroundColor:'#E5E4E2', 
            borderRadius: 5, 
            alignItems:'flex-start',
            padding: 15,
            gap: 10,
        }}>
        {courses && courses.map((item)=>(
             <TouchableOpacity
             onPress={()=> {
             setProgram(item?.title);
             setOpenCourses(false);
             }} activeOpacity={0.8} key={item?.id}>
             <Text>{item?.title}</Text>
            </TouchableOpacity>
        ))}
        </View>
    )
}

export default SelectCourses;