import React from 'react';
import { Constants, LinearGradient } from 'expo';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import CalcButton from './src/components/CalcButton';
import ResultDisplay from './src/components/ResultDisplay';
  
const initState = {
  firstNum: 0,
  secondNum: 0,
  operator: undefined,
  result: 0,
  operatorPresent: false,
  calculatedComplete: false
};

class App extends React.Component {
  state = initState

  reset = () => {
    this.setState(initState)
  }

  calculatedComplete = () => {
    this.setState({
      firstNum: 0,
      secondNum: 0,
      operator: undefined,
      operatorPresent: false,
      calculatedComplete: true
    })
  }


  operatorPress = (value) => {
    if (!this.state.operatorPresent) {
      this.setState({
        result: this.state.result + value,
        firstNum: this.state.result,
        operatorPresent: true,
        operator: value
      })
    }
  }
  
  dotPress = (value) => {
    if (!this.state.result.includes('.')) {
      this.setState({
        result: this.state.result + '.'
      })
    }
  }

  numPress = (value) => {
    if (this.state.result === 0 || this.state.calculatedComplete) {
      this.setState({
        result: value,
        calculatedComplete: false 
      })   
    }
    else {
      this.setState({
        result: this.state.result + value
      })
    }
  }
  percentPress = () => {
    this.setState({
      result: this.state.result / 100
    })
  }

  toggleNegativePress = () => {
    const { result } = this.state
    this.setState({
      result: (result.charAt(0) === '-') ? result.substring(1) : '-' + result
    })

  }

  equalPress = () => {
    const { result, firstNum, operator } = this.state
    const secondNum = result.substring(firstNum.length + 1, result.length)

    switch (operator) {
      case '+': {
        const calculation = parseFloat(firstNum) + parseFloat(secondNum)
        this.setState({
          result: calculation
        })
        break
      }
      case '-': {
        const calculation = parseFloat(firstNum) - parseFloat(secondNum)
        this.setState({
          result: calculation
        })
        break
      }
      case 'x': {
        const calculation = parseFloat(firstNum) * parseFloat(secondNum)
        this.setState({
          result: calculation
        })
        break
      }
      case '÷': {
        const calculation = parseFloat(firstNum) / parseFloat(secondNum)
        this.setState({
          result: calculation
        })
        break
      }
    }

    this.calculatedComplete()

  }

  render() {
    const { result } = this.state;
    return (
      <LinearGradient colors={['black', 'gray']} style={styles.linearGradientContainer}>
        <View style={styles.mainContainer}>
          {/* RESULT */}
          <View style={styles.resultContainer}>
            <ResultDisplay result={result} />
          </View>
          
          {/* BUTTONS */}
          <View style={styles.buttonsContainer}>
              <View style={styles.row}>
                <CalcButton handlePress={this.reset} background={'gray'} value={'AC'}/>
                <CalcButton handlePress={this.toggleNegativePress} background={'gray'} value={'+/-'}/>
                <CalcButton handlePress={this.percentPress} background={'gray'} value={'%'}/>
                <CalcButton handlePress={this.operatorPress} background={'orange'} value={'÷'}/>
              </View>

              <View style={styles.row}>
                <CalcButton handlePress={this.numPress} background={'gray'} value={'7'}/>
                <CalcButton handlePress={this.numPress} background={'gray'} value={'8'}/>
                <CalcButton handlePress={this.numPress} background={'gray'} value={'9'}/>
                <CalcButton handlePress={this.operatorPress} background={'orange'} value={'x'}/>
              </View>


              <View style={styles.row}>
                <CalcButton handlePress={this.numPress} background={'gray'} value={'4'}/>
                <CalcButton handlePress={this.numPress} background={'gray'} value={'5'}/>
                <CalcButton handlePress={this.numPress} background={'gray'} value={'6'}/>
                <CalcButton handlePress={this.operatorPress} background={'orange'} value={'-'}/>
              </View>

              <View style={styles.row}>
                <CalcButton handlePress={this.numPress} background={'gray'} value={'1'}/>
                <CalcButton handlePress={this.numPress} background={'gray'} value={'2'}/>
                <CalcButton handlePress={this.numPress} background={'gray'} value={'3'}/>
                <CalcButton handlePress={this.operatorPress} background={'orange'} value={'+'}/>
              </View>

              <View style={styles.row}>
                <CalcButton handlePress={this.numPress} background={'zero'} value={'0'}/>
                <CalcButton handlePress={this.dotPress} background={'gray'} value={'.'}/>
                <CalcButton handlePress={this.equalPress} background={'orange'} value={'='}/>
              </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 8,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    // borderColor: 'goldenrod',
    // borderWidth: 2,
    // height: height,
    // flexDirection: 'column',
  },
  resultContainer: {
    flex: 2,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 1
  },
  mainContainer: {
    flex: 1,
  },
  linearGradientContainer: {
    flex: 1,
    paddingTop: 30,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  
});

export default App;
