import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Platform, StatusBar} from 'react-native'
import PropTypes from 'prop-types';

const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;
const StatusBarShape={
    backgroundColor: PropTypes.string,
    barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
    hide: PropTypes.bool
};

export default class NavigationBar extends Component {
    // 用户自定义属性
    static propTypes = {
        style: PropTypes.style,
        title: PropTypes.string,
        titleView: PropTypes.element,
        hide: PropTypes.bool,
        leftButton: PropTypes.element,
        rightButton: PropTypes.element,
        statusBar: PropTypes.shape(StatusBarShape)
    };

    // StatusBar 状态栏
    static defaultProps = {
        statusBar: {
            barStyle: 'light-content',
            hide: false
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            hide: false
        }
    }

    render() {
        let status = <View style={styles.statusBar}>
            <StatusBar {...this.props.statusBar}/>
        </View>;
        let titleView = this.props.titleView ? this.props.titleView : <Text style={styles.title}>{this.props.title}</Text>;
        let content = <View style={styles.navBar}>
            {this.props.leftButton}
            <View style={styles.titleViewContainer}>
                {titleView}
            </View>
            {this.props.rightButton}
        </View>;
        return (
            <View style={[styles.container, this.props.style]}>
                {status}
                {content}
            </View>
        )
    }
}

// Platform 判断 ios android 亦可判断 ios android 版本号

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EE6363'
    },
    navBar: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
        flexDirection: 'row'
    },
    titleViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top:0,
        bottom: 0
    },
    title: {
        fontSize: 20,
        color: 'white'
    },
    statusBar: {
        height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0
    }
});