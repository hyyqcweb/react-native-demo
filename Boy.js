import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Girl from './Girl'
import NavigationBar from './NavigationBar'

export default class Boy extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            word: ''
        }
    }

    render() {
        return (
            <View style={[styles.container, this.props.statusBar]}>
                <NavigationBar
                    title={'Boy'}
                    statusBar={{
                        backgroundColor: '#EE6363'
                    }}
                />
                <Text style={styles.text}>
                    I am boy
                </Text>
                <Text style={styles.text} onPress={() => {this.props.navigator.push({
                    component: Girl,
                    params: {
                        word:'一支玫瑰',
                        onCallBack:(word) => {
                            this.setState({
                                word: word
                            })
                        }
                    }
                })}}>
                    送女孩一支玫瑰
                </Text>
                <Text style={styles.text}>
                    女孩送给男孩的巧克力: {this.state.word}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
   },
    text: {
       fontSize: 20
    }
});