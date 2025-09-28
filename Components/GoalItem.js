import { View, Text,StyleSheet, Pressable } from "react-native";


function GoalItem(props){
    return(
        
            <View style={styles.goalItem}>
                <Pressable android_ripple={{color:"#ddd"}}  onPress={props.onDeleteItem.bind(this,props.id)}>
                    <Text style={styles.goalText}>{props.text}</Text>
                </Pressable>
            </View>
        
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
    borderRadius:5,
    backgroundColor:'purple',
    padding:5,
    margin:5,
    color:'white',
  },
  goalText:{
    color:'white',
    padding:8,
  }
});