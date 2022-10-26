import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import Anuncio from '../models/anuncio'
//import styles from '../styles/all_styles'
//import Resolution from '../utils/Resolution'

export default function AnuncioItem(props){
    const anuncio = new Anuncio(props.anuncio)
    return <TouchableOpacity  onPress={props.onPress}>
        <Image style={{
            //height: Resolution.height / 4,
            width: '100%',
            borderRadius: 6,
        }} source={{uri: anuncio.image}}/>
        <View >
            <Text style={{textAlignVertical: "center",textAlign: "center",}} >{anuncio.final == 1 ? 'Imóveis para Aluguel' : anuncio.final == 2 ? 'Imóveis à Venda' : '?'}</Text>
        </View>
        <View>
            <Text style={{fontSize: anuncio.name.length > 12 ? 16 : 20,}}>{anuncio.name}</Text>
            <Text style={{fontWeight: 'bold', marginTop: 5}}>R${anuncio.price.toFixed(0)}</Text>
            {/* <Text style={{fontSize: anuncio.type.length > 12 ? 16 : 20,}}>
                {
                    anuncio.type == 1 ? 'CASA' : 
                    anuncio.type == 2 ? 'APARTAMENTO' : 
                    anuncio.type == 3 ? 'COMÉRCIO' : '?'
                }
            </Text> */}
        </View>
    </TouchableOpacity>
}