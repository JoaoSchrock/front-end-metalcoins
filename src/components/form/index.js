import React, { useState } from "react"
import { Text, TextInput, View, Button, StyleSheet } from "react-native"
import ResultLogin from "../form/resultLogin/index"
import styles from './style'


export default function Form() {
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [messageLogin, setMessageLogin] = useState("Insira seus dados de acesso")
    const [login, setLogin] = useState(null)
    const [textButton, setTextButton] = useState("Login")

    function authenticate() {
        if (email != null && password != null) {
            setMessageLogin(`Seja bem-vindo! Um e-mail foi enviado para: ${email}`)


            if (handleEmailChange && handlePasswordChange) {
                email = null
                password = null
            }
            return
        }
    }

    const handleEmailChange = email => {
        setEmail(email);
    };

    const handlePasswordChange = password => {
        setPass(password);
    };

    return (
        <View>
            <Text style={styles.text}>{messageLogin}</Text>
            
            <TextInput style={styles.input}
                placeholder="E-mail"
                onChangeText={handleEmailChange}
                value={email}
                keyboardType="email-address" />

            <TextInput style={styles.input}
                onChangeText={handlePasswordChange}
                value={password}
                placeholder="Senha"
                secureTextEntry={true} />

            <Button style={styles.submit}
                onPress={() => authenticate()}
                title="Login" />
        </View>
    )
}
