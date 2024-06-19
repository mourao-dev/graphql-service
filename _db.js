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
   

export default {jogos, personagens, avaliacoes}
