import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// typeDefs
const typeDefs = `#graphql

type Jogo{
    id:ID!,
    titulo: String!,
    plataforma: [String!]! 
}   

type Avaliacao{
    id: ID!,
    nota: Int!,
    conteudo: String!
}

type Personagem{
    id: ID!,
    nome: String!,
    verificado: Boolean!
}

type Query{
    avaliacoes: [Avaliacao]
    jogos: [Jogo]
    personagens: [Personagem]
}
`;

// db
let jogos = [
    {id:'1', titulo:'Mario Kart', plataforma: ['Super Nintendo', 'Nintendo 64', 'Switch']},
    {id:'2', titulo: 'Super Smash Bros', plataforma: ['Nintendo 64', 'Switch']},
    {id:'3', titulo:'Zelda Ocarina of Time', plataforma:['Nintendo 64']},
    {id:'4', titulo:'Super Punch-Out', plataforma:['Super Nintendo']}
]

let personagens = [
    {id:'1', nome:'Mario', verificado: true},
    {id:'2', nome: 'Link', verificado: true},
    {id:'3', nome: 'Bowser', verificado: false}
]

let avaliacoes = [
    {id:'1', nota: '10', comentario:'n/a', id_jogo:'3', id_personagem:'2'},
    {id:'2', nota:'9', comentario:'n/a', id_jogo:'2', id_personagem:'1'},
    {id:'3', nota:'9', comentario:'n/a', id_jogo:'1', id_personagem:'3'}
]
   
//resolvers
const resolvers = {
    Query: {
        jogos(){
            return jogos;
        },
        avaliacoes(){
            return avaliacoes;
        },
        personagens(){
            return personagens;
        }
    }
}

const server = new ApolloServer({
    typeDefs, //definição de tipos de dados
    resolvers, 
});


const {url} = await startStandaloneServer(server, { 
    listen : {port: 4000}
});


console.log('Servidor pronto');     