import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

export default class CalMid extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
        x1: '0',
        y1: '0',
        x2: '0',
        y2: '0',
        xmidpoint: '0',
        ymidpoint: '0',
    };
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.label}>
            X1
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(x) => {
                this.setState({
                    x1: x,
                    xmidpoint: ((Number(x) + Number(this.state.x2))/2).toString(),
                })
            }}
            value={this.state.x1}
            keyboardType={'numeric'}
            selectTextOnFocus={true}
          />
        </View>
        <View>
          <Text style={styles.label}>
            Y1
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(y) => {
                this.setState({
                    y1: y,
                    ymidpoint: ((Number(y) + Number(this.state.y2))/2).toString(),
                })
            }}
            value={this.state.y1}
            keyboardType={'numeric'}
            selectTextOnFocus={true}
          />
        </View>

        <View>
          <Text style={styles.label}>
            X2
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(x) => {
                this.setState({
                    x2: x,
                    xmidpoint: ((Number(x) + Number(this.state.x1))/2).toString(),
                })
            }}
            value={this.state.x2}
            keyboardType={'numeric'}
            selectTextOnFocus={true}
          />
        </View>
        <View>
          <Text style={styles.label}>
            Y2
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(y) => {
                this.setState({
                    y2: y,
                    ymidpoint: ((Number(y) + Number(this.state.y1))/2).toString(),
                })
            }}
            value={this.state.y2}
            keyboardType={'numeric'}
            selectTextOnFocus={true}
          />
        </View>
        <View>
          <Text style={styles.label}>
            Midpoint
          </Text>
          <TextInput
            style={styles.result}
            value={'(' +this.state.xmidpoint + ', ' + this.state.ymidpoint + ')'}
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
    fontSize: 15,
    margin: 3,
  },
  input: {
    color: 'red',
    fontSize: 15,
    margin: 3,
    textAlign: 'right',
  },
  result: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 3,
    textAlign: 'center',
  }
});