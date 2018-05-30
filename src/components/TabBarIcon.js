import React, { Component } from 'react';
import { StyleSheet,View,Image,Text } from 'react-native';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return  <View style={styles.container}>
                    <Image style={styles.image}
                            source={!this.props.focused ? this.props.img:this.props.ActiveImg}
                        />
                    <Text style={{color:!this.props.focused ? '#888':'#18bf4c'}}>{this.props.tabBarLabel}</Text>
                </View>
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    image:{
        width:24,
        height:24,
        marginBottom:2
    }
})