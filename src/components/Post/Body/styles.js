import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create ({
    image: {
width:Dimensions.get('window').width,
height:Dimensions.get('window').height
  },
name : {
alignSelf:'center',
fontWeight:'bold',
color:"#3c3c3c"

},

})

export default styles;