// definição dos tipos de dados
// int, float, string, boolean, ID (key for data objects)
//[string] -> array de strings
// ! -> obrigatório

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
    avaliacoes: [Review]
    jogos: [Jogo]
    personagens: [Personagem]
}
`;