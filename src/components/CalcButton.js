import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';


export default class CalcButton extends React.Component {
  render() {
    const { background, value, handlePress } = this.props
    return (
        <TouchableOpacity onPress={handlePress.bind(this, value)} style={getButtonColor(background)}>
            <Text style={styles.text}>
                { value }
            </Text>
        </TouchableOpacity>
      
    )
  }
}

const getButtonColor = (background) => {
  if (background === 'gray') return styles.grayCircle
  if (background === 'orange') return styles.orangeCircle
  if (background === 'zero') return styles.grayCircle
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: 'white',
  },
  orangeCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    width: 70,
    height: 70,
    borderRadius: 70,
    margin: 5,
    flex: 1,
  },
  grayCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    width: 70,
    height: 70,
    borderRadius: 70,
    margin: 5,
    flex: 1,
  },
})
