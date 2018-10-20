import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Boy extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    I am Girl
                </Text>
                <Text style={styles.text}>
                    {this.props.word}
                </Text>
                <Text style={styles.text}
                    onPress={() => {
                        this.props.onCallBack('巧克力');
                        this.props.navigator.pop()
                    }}
                >
                回赠巧克力
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: 'red',
       justifyContent: 'center'
   },
   text: {
       fontSize: 20
   }
});