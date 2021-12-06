import React from 'react';
import {StyleSheets} from 'react-native';

const styles = StyleSheet.create(
    {
      container: { //this is for the first text box (phone) stle "look"
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      input: { // this is for the second (name) style
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '90%',
        marginBottom: 1, //creates a space between the boxes
        borderRadius: 5
      }
    }
  );

  export default styles;