import React from 'react'
import dva, { connect } from './utils/dva';
import { AppRegistry,View,Text } from 'react-native';
import Router from './router'
import login from './models/login';

const app = dva({
    models: [login],
    onError(e) {
        console.log('onError', e);
    },
})
export default app.start(<Router/>);