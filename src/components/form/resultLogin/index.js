import React from "react"
import { View, Text } from "react-native"

export default function login(props) {
    return (
        <View>
            <Text>{props.resultLogin}</Text>
            <Text>{props.messageLogin}</Text>
        </View>
    )
}