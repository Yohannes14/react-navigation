import { Image, Pressable, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { tweets } from '../../data/tweets'
import Tweet from "../../components/Tweet"

const Feed = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={() => navigation.openDrawer()}>
                    <Image source={require("../../assets/beto.jpeg")}
                        style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 15 }}
                    />

                </Pressable>
            )
        })

    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={tweets.slice(0, 30)}
                keyExtractor={(item) => {
                    return item?.id
                }}
                renderItem={({ item }) => {
                    return <Tweet tweet={item} />
                }}
                ListHeaderComponentStyle={{ backgroundColor: "#ccc" }}
                ItemSeparatorComponent={() => <View style={styles.divider} />}
            />
        </SafeAreaView>
    )
}

export default Feed

const styles = StyleSheet.create({
    divider: {
        width: "100%",
        height: StyleSheet.hairlineWidth,
        backgroundColor: "#DDD"
    }
})