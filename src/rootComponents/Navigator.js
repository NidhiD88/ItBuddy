import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Login from './../components/login/Login';

const Navigator = createStackNavigator({
    Login: { screen: Login },
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});

const navigator = createAppContainer(Navigator);

export default navigator;