import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

export default class Calculator extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
        x: '0',
        y: '0',
        sum: '0',
        difference: '0',
        product: '0'
    };
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.label}>
            First Number
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(x) => {
                this.setState({
                    x: x,
                    sum: (Number(x) + Number(this.state.y)).toString(),
                    difference: (Number(x) - Number(this.state.y)).toString(),
                    product: (Number(x) * Number(this.state.y)).toString(),
                })
            }}
            value={this.state.x}
            keyboardType={'numeric'}
            selectTextOnFocus={true}
          />
        </View>
        <View>
          <Text style={styles.label}>
            Second Number
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(y) => {
                this.setState({
                    y: y,
                    sum: (Number(this.state.x) + Number(y)).toString(),
                    difference: (Number(this.state.x) - Number(y)).toString(),
                    product: (Number(this.state.x) * Number(y)).toString(),
                })
            }}
            value={this.state.y}
            keyboardType={'numeric'}
            selectTextOnFocus={true}
          />
        </View>
        <View>
          <Text style={styles.label}>
            Sum
          </Text>
          <TextInput
            style={styles.result}
            value={this.state.sum}
            editable={false}
          />
        </View>
        <View>
          <Text style={styles.label}>
            Difference
          </Text>
          <TextInput
            style={styles.result}
            value={this.state.difference}
            editable={false}
          />
        </View>
        <View>
          <Text style={styles.label}>
            Product
          </Text>
          <TextInput
            style={styles.result}
            value={this.state.product}
            editable={false}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 24,
    margin: 5,
  },
  input: {
    color: 'red',
    fontSize: 24,
    margin: 5,
    textAlign: 'right',
  },
  result: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'right',
  }
});