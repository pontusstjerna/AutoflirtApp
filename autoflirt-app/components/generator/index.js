import React, { Component } from 'react';
import { generateSE } from 'autoflirt';

import {
    View,
    Text,
    StyleSheet, 
    TouchableOpacity,
} from 'react-native';

const version = '2.0';

class Generator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            line: '',
        };

        this.generate = this.generate.bind(this);
    }

    generate() {
        this.setState({
            line: generateSE(),
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txtHeader}>Raggningsreplikgenerator {version}</Text>
                <Text style={styles.txtLine}>{this.state.line}</Text>
                <TouchableOpacity
                    onPress={this.generate}
                    style={styles.btnGenerate}
                >
                <Text style={styles.txtGenerate}>Generera!</Text>
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
        backgroundColor: '#eee',
    },
    txtLine: {
        fontSize: 17
    },
    txtGenerate: {
        fontSize: 25,
    },
    txtTitle: {
        fontSize: 32,
    }
  });
  