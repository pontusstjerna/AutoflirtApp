import React, { Component } from 'react';
import generate from 'autoflirt';

import {
    View,
    Text,
    StyleSheet, 
    TouchableOpacity,
} from 'react-native';

class Generator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            line: 'Snopp',
        };

        this.generate = this.generate.bind(this);
    }

    generate() {
        this.setState({
            line: generate(),
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txtLine}>{this.state.line}</Text>
                <TouchableOpacity
                    onPress={this.generate}
                    style={styles.btnGenerate}
                >
                <Text style={styles.txtGenerate}>Generate!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Generator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft: 50,
        marginRight: 50,
    },
    btnGenerate: {
        marginTop: 20,
        marginBottom: 120,
        borderWidth: 0.5,
        padding: 10,
        backgroundColor: '#d47af4',
    },
    txtLine: {
        fontSize: 17
    },
    txtGenerate: {
        fontSize: 25
    }
  });
  