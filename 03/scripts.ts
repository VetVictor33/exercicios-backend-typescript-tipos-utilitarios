type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

type ConnReturn = {
    driver: string,
    url: string
}

const conexao = (dados: Conn): Readonly<ConnReturn> => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}

const connection = conexao({ username: 'x', password: 'x2', 'host': 'x3', dbname: 'x4', port: 'x5' })
connection.url = 's'