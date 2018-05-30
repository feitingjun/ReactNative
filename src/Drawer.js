import React from 'react';
import { StyleSheet,View,Image,Text } from 'react-native';
import { List } from 'antd-mobile';
import { DrawerNavigator } from 'react-navigation';
import Tabs from './Tabs';
import headerImg from './images/header.jpg';
class DrawerPage extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imgBox}>
                    <Image style={styles.header} source={headerImg}/>
                    <Text style={styles.name}>你是逗比</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    imgBox:{
        alignItems: 'center',
        paddingTop: 20,
    },
    header:{
        width:100,
        height:100,
        borderRadius: 50,
    },
    name:{
        paddingTop: 10,
        fontSize: 16,
    }
})

const Drawer = DrawerNavigator({
    screen:Tabs
},{
    drawerWidth: 200,
    drawerPosition: 'left',
    contentComponent: DrawerPage
})
export default Drawer;