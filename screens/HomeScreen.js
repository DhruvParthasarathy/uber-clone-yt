import React from 'react'
import GlobalStyles from '../GlobalStyles'
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import tw from "tailwind-react-native-classnames"

const HomeScreen = () => {
    return (
        <SafeAreaView 
        style={
            GlobalStyles.droidSafeArea,
            tw`bg-white h-full p-5`
            }>
            <View>
                <Image
                style={{
                    width: 100, height: 100, resizeMode: "contain"
                }
                }
                source={{
                    uri: "https://links.papareact.com/gzs"
                }}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({


})
