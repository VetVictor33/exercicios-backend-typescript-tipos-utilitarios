type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}
type UsuarioSemRg = Omit<Usuario, 'rg'>
type UsuarioCompulsorio = Required<UsuarioSemRg>

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}

const cadastrarUsuarioSemRg = (info: UsuarioCompulsorio) => {
    return info
}

const meninoDoRg: Usuario = {
    nome: 'Lukinha',
    email: 'lukinha@email.com',
    cpf: '12345678910',
    rg: '09876543210',
    dataNacimento: '01/08/1992 8:00 AM'
}

const meninoSemRg: UsuarioCompulsorio = {
    nome: 'Lukinha',
    email: 'lukinha@email.com',
    cpf: '12345678910',
    dataNacimento: '01/08/1992 8:00'
}

console.log(cadastrarUsuário(meninoDoRg), '\n', cadastrarUsuarioSemRg(meninoSemRg))