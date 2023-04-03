import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('./prueba.db')

export const getData = () => {
    db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS prueba (id INTEGER PRIMARY KEY AUTOINCREMENT)')
    },
        (txObj, error) => console.log('error:', error),
        (txObj, resultSet) => console.log('resultado:', resultSet)
    )

    db.transaction(tx => {
        tx.executeSql('SELECT * FROM prueba', null, 
            (txObj, resultSet) => console.log(resultSet),
            (txObj, error) => console.log(error)
        )
    })
}