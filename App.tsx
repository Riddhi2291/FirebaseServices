import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

function App(): JSX.Element {

  firestore()
  .collection('Users')
  .add({
    name: 'Ada Lovelace',
    age: 30,
  })
  .then(() => {
    console.log('User added!');
  })
  .catch((error) => {
    console.log('error.......', error);
  });

  return (
    <SafeAreaView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
