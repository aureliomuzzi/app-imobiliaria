import React from 'react'
import {View, TextField, Text, Button} from 'react-native-ui-lib';
//faltou importar o database
import DataBase from '../services/database'


export default class HomeScreen extends React.Component{
    constructor(props){
        super(props)
        //faltou essas duas linhas abaixo
        this.db = new DataBase
        this.navigation = props.navigation
        
    }
    render(){
        return(
            <View flex paddingH-15 paddingT-20>
                <Text blue10 text20>Bem Vindo</Text>
                <Button
                    text50
                    label='Listagem'
                    onPress={() => {this.navigation.push('Listagem',{})}}
                />
                
                <Button
                    text50
                    label='Cadastro'
                    onPress={() => {this.navigation.push('Cadastro',{})}}
                />
            </View>
        )
    }
}