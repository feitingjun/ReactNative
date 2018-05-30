import React, { Component } from 'react';
import { StyleSheet,View,Text,PanResponder,TouchableOpacity,Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { TabBar,Button } from 'antd-mobile';
import Home from './views/Home';
import Message from './views/Message';
import TabBarIcon from './components/TabBarIcon';
import HomeImg from './images/home.png';
import HomeActive from './images/homeActive.png';
import MessageImg from './images/message.png';
import MessageActive from './images/messageActive.png';
import headerImg from './images/header.jpg';
const tabsTitle = {
    Home:'首页',
    Message:'消息'
}
const Tabs = TabNavigator({
    Home: {
        screen:Home,
        navigationOptions:({navigator}) => ({
            tabBarLabel:'首页',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarIcon
                    focused={focused}
                    tabBarLabel='首页'
                    img={HomeImg}
                    ActiveImg={HomeActive}
                    navigator={navigator}
                />
            )
        })
    },
    Message: {
        screen:Message,
        navigationOptions:({navigator}) => ({
            tabBarLabel:'消息',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarIcon
                    focused={focused}
                    tabBarLabel='消息'
                    img={MessageImg}
                    ActiveImg={MessageActive}
                    navigator={navigator}
                />
            )
        })
    }
},{
    tabBarPosition:'bottom',
    lazy:true,
    trueinitialRouteName:'Home',
    swipeEnabled:true,
    tabBarOptions:{
        indicatorStyle:{
            height:0
        },
        activeTintColor:'#18bf4c',
        inactiveTintColor:'#888',
        style:{
            backgroundColor:'#fff',
            height:55
        },
        showIcon:true,
        showLabel:false,
        labelStyle:{
            
        },
        iconStyle:{
            top:-4,
            height:52
        }
    }
})

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:tabsTitle.Home
        }
    }
    onDrawer = () => {
        this.props.navigation.navigate('DrawerOpen');
    }
    onNavigationStateChange = (prevState, currentState) => {
        this.setState({
            title:tabsTitle[currentState.routes[currentState.index].key]
        })
    }
    render() {
        return  <View style={styles.container}>
                    <View style={styles.navigation}>
                        <TouchableOpacity onPress={this.onDrawer}>
                            <Image style={styles.headerImg} source={headerImg}/>
                        </TouchableOpacity>
                        <Text style={styles.title}>{this.state.title}</Text>
                        <Text style={styles.right}></Text>
                    </View>
                    <Tabs style={{backgroundColor:'#fff'}} onNavigationStateChange={this.onNavigationStateChange} screenProps={{...this.props.screenProps}}/>
                </View>
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    navigation:{
        height:70,
        backgroundColor:'#373737',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:10,
        paddingTop:20,
        justifyContent: 'space-between',
    },
    headerImg:{
        width:36,
        height:36,
        borderRadius: 18,
    },
    title:{
        margin: 'auto',
        color:'#ccc',
        fontSize: 18,
    },
    right:{
        width:36
    }
})
