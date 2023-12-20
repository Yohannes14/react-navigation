import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import TweetContent from '../../components/TweetContent';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

const TweetDetailsScreen = ({ route }) => {
    const { tweet } = route.params;
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: tweet.author.name
        })


    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TweetContent tweet={tweet} />
        </SafeAreaView>
    )
}

export default TweetDetailsScreen

const styles = StyleSheet.create({})