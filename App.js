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
      data: [
        {key: '1', title: 'ARTICLE I: Legislative Branch', summary: 'Signed in convention September 17, 1787. Ratified June 21, 1788. A portion of Article I, Section 2, was changed by the 14th Amendment; a portion of Section 9 was changed by the 16th Amendment; a portion of Section 3 was changed by the 17th Amendment; and a portion of Section 4 was changed by the 20th Amendment'},
        {key: '2', title: 'ARTICLE II: Executive Branch',  summary: 'Signed in convention September 17, 1787. Ratified June 21, 1788. Portions of Article II, Section 1, were changed by the 12th Amendment and the 25th Amendment'},
        {key: '3', title: 'ARTICLE III: Judicial Branch', summary: 'Signed in convention September 17, 1787. Ratified June 21, 1788. A portion of Article III, Section 2, was changed by the 11th Amendment'},
        {key: '4',title: 'ARTICLE IV: States, Citizenship, New States', summary: 'Signed in convention September 17, 1787. Ratified June 21, 1788. A portion of Article IV, Section 2, was changed by the 13th Amendment'},
        {key: '5',title: 'ARTICLE V: Amendment Process', summary: 'Signed in convention September 17, 1787. Ratified June 21, 1788'},
        {key: '6',title: 'ARTICLE VI: Debts, Supremacy, Oaths, Religious Tests', summary: 'Signed in convention September 17, 1787. Ratified June 21, 1788'},
        {key: '7',title: 'ARTICLE VII: Ratification', summary: 'Signed in convention September 17, 1787. Ratified June 21, 1788'}
      ]
    }
  }
  render(){
    const {data} = this.state
    return (
      <View style={styles.flatListView}>
        <StatusBar hidden={true} />
        <FlatList
          data={data}
          renderItem={({item, key})=> <TouchableOpacity style={styles.list} onPress={
            ()=> this.props.navigation.navigate('Article ' + item.key)}>
            
            <Text style={styles.flatListText}>{item.title}</Text>
            <Text style={styles.flatListText}>{item.summary}</Text>
          </TouchableOpacity>}
        
        />
      </View>
    );
  }
}

const Article = (props) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image}
          source={require('./assets/flag.png')}>
        </Image>
        <View style={styles.articleTextView}>
          <Text style={styles.articleText} > Article {props.num}</Text>
          <Text style={styles.articleText} > Content:</Text>
          <Text style={styles.articleText} > *Placeholder Text*</Text>
        </View>
    </View>
  )
}

class Article1 extends React.Component {
  render(){
    return(
        <Article num = '1'/>
    );
  }
}

class Article2 extends React.Component { render() { return(<Article num = '2'/>); } }
class Article3 extends React.Component { render() { return(<Article num = '3'/>); } }
class Article4 extends React.Component { render() { return(<Article num = '4'/>); } }
class Article5 extends React.Component { render() { return(<Article num = '5'/>); } }
class Article6 extends React.Component { render() { return(<Article num = '6'/>); } }
class Article7 extends React.Component { render() { return(<Article num = '7'/>); } }


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Articles List" component={ArticlesList}/>
        <Stack.Screen name="Article 1" component={Article1}/>
        <Stack.Screen name="Article 2" component={Article2}/>
        <Stack.Screen name="Article 3" component={Article3}/>
        <Stack.Screen name="Article 4" component={Article4}/>
        <Stack.Screen name="Article 5" component={Article5}/>
        <Stack.Screen name="Article 6" component={Article6}/>
        <Stack.Screen name="Article 7" component={Article7}/>
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
