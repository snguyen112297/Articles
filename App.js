import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { withNavigation } from 'react-navigation';
import { registerRootComponent } from 'expo';

class HomeScreen extends React.Component{
  state={
    email:"",
    password:""
  }
  email = "snguyen@fandm.edu"
  password = "abcxyz"
  email_check = false
  password_check = false

  render(){
  return (
    <View style={styles.container}>
        <Text style={styles.logo}>Articles</Text>
        <View style={styles.inputView}>
          <TextInput 
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#FFFFFF"
            onChangeText={text=>this.setState({email:text})}/>
        </View>
        <View style={styles.inputView}>
          <TextInput 
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor="#FFFFFF"
              onChangeText={text=>this.setState({password:text})}/>
        </View>
        <Button title="LOGIN" onPress={()=> this.props.navigation.navigate('Articles List')}/>
      </View>
    );
  }
}

const Stack = createStackNavigator();


function ArticlesList({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Articles List</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Articles List" component={ArticlesList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight:"bold",
    fontSize:50,
    color:"red",
    marginBottom:40
  },
  inputView:{
    width:"60%",
    backgroundColor:"blue",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginText:{
    color:"white"
  },
});
