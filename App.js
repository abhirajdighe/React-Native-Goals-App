import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList 
} from 'react-native';
import { useState } from 'react';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }
  
  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText){
    setCourseGoals((currentCourseGoals) =>[
      ...currentCourseGoals, 
      {text:enteredGoalText,id:Math.random().toString()},

    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals=>{
      return currentCourseGoals.filter((goal)=>goal.id != id);
    });
  }

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#ffffffff" />
    <View style={styles.appContainer}>
      <Button style={styles.buttonContent} title='Add New Goal' color="#8e4de4ff" onPress={startAddGoalHandler} />
      <GoalInput 
        visible={modalIsVisible} 
        onAddGoal={addGoalHandler} 
        onCancel={endAddGoalHandler}
      /> 
      <FlatList data={courseGoals} renderItem ={(itemData)=>{
        return (
          <GoalItem 
            text={itemData.item.text} 
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler}
            />
        );
      }}
      keyExtractor={(item,index)=>{
        return item.id;
      }}
      style={styles.goalsContainer}/>
        
    </View>
    </>
    

    // Section 1 code :

    // <View style={styles.container}>
    //   <Text>Welcome Abhiraj!!!</Text>
    //   <Text style={{margin: 16, borderWidth:2, borderColor:'red'}}>This is my first React Native App</Text>
    //   <View>
    //     <Text style={styles.dummyText}>Here is the Button</Text>
    //     <Button title="Tap me!" />
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({

  appContainer:{
    paddingTop:50,
    flex:1,
  },
  goalsContainer:{
    flex:4,
  },
  buttonContent:{
    // padding:36,
    // borderRadius:50,
    // width:"50%",
  }

  // Section 1 code :

  // container: {
  //   flex: 1,
  //   backgroundColor: '#d7e4e6ff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // dummyText:{
  //   margin: 16, 
  //   borderWidth:2, 
  //   borderColor:'blue'
  // }
});
