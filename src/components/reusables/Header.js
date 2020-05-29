import React from 'react';
import {
    View, 
} from 'react-native';

export default class Header extends React.Component {
    render(){
        return (
            <View style = {{
                position: 'absolute', top: 0, left: 0, width: '100%',
                height: this.props.height? this.props.height : null, 
                backgroundColor: this.props.backgroundColor ? this.props.backgroundColor: '#ffffff'}}>    
            </View>
        )
    }
}