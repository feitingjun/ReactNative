import React, { Component } from 'react';
import { StyleSheet,View,PanResponder } from 'react-native';
import { TabBar,Button } from 'antd-mobile';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    panResponder = () => {
        let pageX = 0;
        return {
            onStartShouldSetResponder: () => true,//申请响应触摸开始事件
            onMoveShouldSetResponder: () => true,//申请响应触摸进行中事件
            onResponderStart: (e) =>{//手指按下时的事件
                console.log(11111111)
                pageX = e.nativeEvent.pageX
            },
            onResponderMove: (e) => {//手指移动时的事件
                
            },
            onResponderRelease: (e) => {//触摸完成事件
                let a = e.nativeEvent.pageX ;
                if(e.nativeEvent.pageX - pageX>150) this.props.navigation.navigate('DrawerOpen');
            },
            onResponderEnd: (e) => {//组件事件响应结束
                
            }
        }
    }
    DrawerOpen = () => {
        this.props.navigation.navigate('DrawerOpen');
    }
    render() {
        return  <View style={styles.container} { ...this.panResponder()}>
                    <TabBar>
                        <TabBar.Item title='首页'>
                            <Button onClick={this.DrawerOpen} type='primary'>侧边栏</Button>
                        </TabBar.Item>
                    </TabBar>
                </View>
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
