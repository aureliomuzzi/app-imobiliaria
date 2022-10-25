import Anuncio from '../models/anuncio'
import LDatabase from './ldatabase'

export default class Database{
    constructor(){
        this.table_name = 'anuncios'
        this.db = new LDatabase('Anunciosdata.db', (db) => {
            db.executeQuery(`CREATE TABLE IF NOT EXISTS ${this.table_name}(id integer primary key autoincrement, name text, price integer, image text, address text, final integer, type integer);`, () => {}, (error) => {console.log(error)})
            console.log("Banco de dados iniciado")
        })
    }
    loadAnuncios(){
        return new Promise(resolve => {
            this.db.executeQuery(`SELECT * FROM ${this.table_name}`, (_, res) => {
                resolve(res.rows._array)
            }, (e)=>console.log(e))
        })
    }

    loadAnunciosByType(anuncio = Anuncio) //Por tipo de imóvel: CASA | APARTAMENTO ...
    {
        console.log(anuncio)
        return new Promise(resolve => {
            this.db.executeQuery(`SELECT * FROM ${this.table_name} WHERE type = ${anuncio}`,(_,res) => {
                resolve(res.rows._array)
            }, (e)=>console.log(e))
        })
    }

    loadAnunciosByFinal(anuncio = Anuncio) //Por tipo de finalidade:  ALUGUEL | VENDA ...
    {
        console.log(anuncio)
        return new Promise(resolve => {
            this.db.executeQuery(`SELECT * FROM ${this.table_name} WHERE final = ${anuncio}`,(_,res) => {
                resolve(res.rows._array)
            }, (e)=>console.log(e))
        })
    }

    delAnuncio(id) //Deletar Anuncio
    {

    }

    loadAnuncioById(id) //Ver Anuncio
    {

    }

    addNewAnuncio(anuncio=new Anuncio()){
        return new Promise(resolve => {
            if(anuncio.isValidWithOutId()){
                const query = `INSERT INTO ${this.table_name} (name, price, image, address, final, type) VALUES ('${anuncio.name}', ${anuncio.price}, '${anuncio.image}', '${anuncio.address}', ${anuncio.final}, ${anuncio.type});`
                this.db.executeQuery(query, ()=>resolve(true), (_)=>{console.log(_); resolve(false)})
            }else resolve(false)
        })
    }

}
