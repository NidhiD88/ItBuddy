import React from 'react';
import {
    View,
    Dimensions,
} from 'react-native';
import BaseActivity from './../reusables/BaseActivity';
import {CustomCard, CustomTextInput, CustomButton} from './../reusables/Components';
import {strings} from '../../components/constants/string';

export default class LoginScene extends React.Component {

    loginClicked() {
        alert("Work in progress")
    }

    render() {
        return (
            <BaseActivity>
                <View>
                    <View style = {{height: '60%', backgroundColor: '#fc9803'}}>
                    </View>
                    <View style = {{height: '40%'}}>
                    </View> 
                    <View style = {{width: '100%', position: 'absolute', 
                            top: (Dimensions.get('window').height / 3),
                            paddingHorizontal: 16}}>
                        <CustomCard style = {{paddingHorizontal: 16, paddingVertical: 32}}> 
                            <CustomTextInput placeholder = {strings.enterDomainId}/> 
                            <CustomTextInput style = {{marginTop: 16}}
                            placeholder = {strings.password} secureTextEntry = {true}/> 
                            <CustomButton style = {{backgroundColor: '#404040', marginTop: 32, }} 
                                title = {strings.logIn}
                                customClick = {this.loginClicked.bind(this)}/>
                            <View style = {{flexDirection: 'row', paddingHorizontal: 16, 
                                paddingVertical: 32}}> 
                            </View>
                        </CustomCard>
                    </View>
                </View>
            </BaseActivity>     
        )
    }
}