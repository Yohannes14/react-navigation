
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '../screens/tabScreens/Feed';
import TweetDetailsScreen from '../screens/homeStack/TweetDetailsScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Feed" component={Feed} />
            <HomeStack.Screen name="TweetDetailsScreen" component={TweetDetailsScreen}
                options={{ presentation: "modal" }} />
        </HomeStack.Navigator>
    )
}

export default HomeStackNavigator
