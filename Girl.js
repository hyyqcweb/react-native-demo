import React from 'react';
import {View, Text, StyleSheet ,TouchableOpacity, Image} from 'react-native';
import NavigationBar from './NavigationBar'

export default class Boy extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    // TouchableOpacity 用户点击事件, 有个动画效果
    renderButton(image) {
        return <TouchableOpacity
                onPress={() => {
                    this.props.navigator.pop()
                  }
                }
            >
            <Image style={{width: 22, height: 22, margin: 5}} source={image} />
        </TouchableOpacity>
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'Girl'}
                    style={{
                        backgroundColor: '#EE6363'
                    }}
                    leftButton={
                       this.renderButton(require('./res/images/ic_arrow_back_white_36pt.png'))
                    }
                    rightButton={
                        this.renderButton(require('./res/images/ic_star.png'))
                    }
                />
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
   },
   text: {
       fontSize: 20
   }
});