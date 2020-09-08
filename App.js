import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, StatusBar, Image } from 'react-native';
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

  checkPassword(text){
    if (text === email)
    {
      
    }
  }

  render(){
  return (
    <View style={styles.container}>
        <StatusBar hidden={true} />
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
        <TouchableOpacity style={styles.loginBtn} onPress={
          ()=> this.props.navigation.navigate('Articles List')}>

          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Stack = createStackNavigator();


class ArticlesList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: ""
    }
  }
  componentDidMount() {
    //console.log('componentdidmount')
    this.apiCall()
}


  async apiCall() {
    let response = await fetch("https://reactnative.dev/movies.json")
    let responseJson = await response.json()
    console.log(responseJson)
    this.setState({
        data: responseJson.movies
    })
  }

  componentDidUpdate() {
    //console.log('componentDidUpdate')
  }

  render(){
    return (
      <View style={styles.flatListView}>
        <StatusBar hidden={true} />
        <FlatList
          data={this.state.data}
          renderItem={({item, id})=> <TouchableOpacity style={styles.list} onPress={
            ()=> this.props.navigation.navigate('Article',{item: item})}>
            
            <Text style={styles.flatListText}>{item.title}</Text>
            <Text style={styles.flatListText}>{item.releaseYear}</Text>
          </TouchableOpacity>}
        
        />
      </View>
    );
  }
}

function ArticleDisplay(props){
  const item = props.route.params.item;
  return (
    <View style={styles.container}>
        <Image style={styles.image}
          source={require('./assets/flag.png')}>
        </Image>
        <View style={styles.articleTextView}>
          <Text style={styles.articleText} > Article {item.id}</Text>
          <Text style={styles.articleText} > Title: {item.title}</Text>
          <Text style={styles.articleText} > Release Year {item.releaseYear}</Text>
        </View>
    </View>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Articles List" component={ArticlesList}/>
        <Stack.Screen name="Article" component={ArticleDisplay}/>
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
    width:"70%",
    backgroundColor:"blue",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginText:{
    color:"white"
  },
  flatListText:{
    color:"white"
  },
  loginBtn:{
    width:"70%",
    backgroundColor:"blue",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:20,
    padding: 20
  },
  list:{
    backgroundColor: 'blue',
    width: "80%",
    justifyContent: 'space-around',
    padding: 5,
    elevation: 1,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40
  },
  flatListView:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "100%",
    height: undefined,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    resizeMode: 'contain',
    backgroundColor: 'black'
  },
  articleTextView: {
    width: "100%",
    height: undefined,
    backgroundColor: "black",
    flex: 2,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  articleText: {
    fontSize: 20,
    color: 'white'
  }
});
