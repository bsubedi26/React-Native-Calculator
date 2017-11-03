import React from 'react';
import { Text, StyleSheet } from 'react-native';

class ResultDisplay extends React.Component {
  render() {
    const { result } = this.props
    return (
      <Text style={s.text}>{result}</Text>
    )
  }
}


const s = StyleSheet.create({
  text: {
    backgroundColor: 'black', 
    fontSize: 42,
    color: 'white'
  }
})

export default ResultDisplay
