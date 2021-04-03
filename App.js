import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
//import defaultColors from "./data/defaultColors.json"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const sadImages = [
    require('./sadFolder/sadCat1.jpg'),
    require('./sadFolder/sadCat2.jpg'),
    require('./sadFolder/sadCat3.jpg'),
    require('./sadFolder/sadCat5.jpg')
  ]

  function getSadImage(){
    var imageSadGetter = sadImages[Math.floor(Math.random() * sadImages.length)];
    return imageSadGetter;
  }

  const tiredImages = [
    require('./tiredFolder/tiredCat2.jpg'),
    require('./tiredFolder/tiredCat3.jpg'),
    require('./tiredFolder/tiredCat4.jpg'),
  ]

  function getTiredImage(){
    var imageTiredGetter = tiredImages[Math.floor(Math.random() * tiredImages.length)];
    return imageTiredGetter;
  }


function firstScreen({ navigation: { navigate } }) {

  return (
    
    <View style = {[{flex: 1}, {flexDirection: 'column'}, {justifyContent: "space-around"}, {backgroundColor: "#faebd7"}]}>
    <View>
      <Text style = {styles.question}>What is your mood rn?</Text>
      </View>

      <View>
        <Text style = {styles.nextBox}>
          <Button
          title = "😔 Sad"
          color = "#8a2be2"
          onPress={() =>
          
          navigate('secondScreen')
        }
          />
        </Text>
      </View>
      <View>
        <Text style = {styles.nextBox}>
          <Button
          title = "👿 Angry"
          color = "red"
          onPress={() =>
          navigate('fourthScreen')
        }
          />
        </Text>
      </View>
      <View>
        <Text style = {styles.nextBox}>
          <Button
          title = "🥱 Tired"
          color = "pink"
          onPress={() =>
          navigate('thirdScreen')
        }
          />
        </Text>
      </View>
      </View>
  );
}

//===================================================END OF FIRST SCREEN

function secondScreen({ navigation: { navigate } }) {
  return (
   <View style={[{flex: 1, justifyContent: "center", backgroundColor: '#fffafa'}]}>
  
  <Image source={getSadImage()}
       style={{width: 400, height: 400}} />

  <Button
          title = "Start Over"
          color = "pink"
          onPress={() =>
          navigate('firstScreen')
        }
          />
  </View>
  );
}

function thirdScreen({ navigation: { navigate } }) {
  return (
   <View style={[{flex: 1, justifyContent: "center", backgroundColor: '#fffafa'}]}>
  
  <Image source={getTiredImage()}
       style={{width: 400, height: 400}} />

  <Button
          title = "Start Over"
          color = "pink"
          onPress={() =>
          navigate('firstScreen')
        }
          />
  </View>
  );
}

function fourthScreen({ navigation: { navigate } }) {
  return (
   <View style={[{flex: 1, justifyContent: "center", backgroundColor: '#fffafa'}]}>
  
  <Image source={require('./angryFolder/angryCat1.jpg')}
       style={{width: 400, height: 400}} />

  <Button
          title = "Start Over"
          color = "pink"
          onPress={() =>
          navigate('firstScreen')
        }
          />
  </View>
  );
}



const Stack = createStackNavigator();

export default function App() {
    const [backgroundColor, setBackgroundColor] = useState  ("pink")
  return (
    <NavigationContainer initialRouteName="firstScreen">
      <Stack.Navigator>
    <Stack.Screen name="firstScreen" component={firstScreen} options = {{headerShown: false}} />
    <Stack.Screen name="secondScreen" component={secondScreen} options = {{headerShown: false}} />
    <Stack.Screen name="thirdScreen" component={thirdScreen} options = {{headerShown: false}} />
    <Stack.Screen name="fourthScreen" component={fourthScreen} options = {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  question: {
    //fontSize: 50,
    fontSize: 50,
    margin: 5,
    padding: 10,
    borderWidth: 5,
    borderRadius: 50,
    textAlign: 'center',
    fontFamily: 'Iowan Old Style',
    //flex: 1,
    //justifyContent: "flex-start",
    //alignSelf: "stretch",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
    nextBox: {
    //fontSize: 70,
    fontSize: 70,
    textAlign: 'center',
    //height: 95,
    //width: 100,
    margin: 10,
    padding: 10,
    fontFamily: 'Iowan Old Style',
    //borderWidth: 10,
    //borderRadius: 10,
    
    //justifyContent: 'center',
    //alignSelf: "stretch",
    //backgroundColor: "rgba(255, 255, 255, 0.8)"
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  sample: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white"
  },
  nextNextBox: {
    //flexDirection: 'column',
    margin: 20,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'flex-center',
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    fontSize: 20,
    fontWeight: 'bold'
  }



});
