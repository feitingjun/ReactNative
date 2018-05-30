import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Button } from 'antd-mobile';

export default class Page extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return  <View style={styles.container}>
                    <Text>首页</Text>
                </View>
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
