import React from 'react';
import {
    View,
} from 'react-native';
import Header from './Header';

export default class BaseActivity extends React.Component {
    render(){
        return (
            <View style = {{flex: 1}}>
                <Header height = {this.props.height} backgroundColor = {this.props.backgroundColor}>
                </Header>
                <View style = {{height: '100%', marginTop: this.props.height? this.props.height: null}}>
                    <View style = {{marginTop: this.props.height? this.props.height: null}}>
                        {this.props.children}
                    </View>
                </View>
            </View>
        )
    }
}