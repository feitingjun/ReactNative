import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';

export default class Page extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return  <View style={styles.container}>
                    <Text>新闻</Text>
                </View>
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
