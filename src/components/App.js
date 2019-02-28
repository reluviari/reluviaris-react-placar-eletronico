import React from 'react'
import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: 'Pacaembu/SP',
        data: '03/03/2019',
        horario: '22h'
    },
    casa: {
        nome: 'Corinthians'
    },

    visitante: {
        nome: 'Palmeiras'
    }
}

export default class App extends React.Component {
    render() {
        return (
                <PlacarContainer {...dados} />
                // <PlacarContainer
                //     partida = {dados.partida}
                //     casa = {dados.casa}
                //     visitante = {dados.visitante}/>
        )
    }
}

// const App = React.createClass({
//   render: function () {
//     return <h1>Aplicação</h1>
//   }
// })

// export default App

// export default class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Contador />
//             </div>
//         )
//     }
// }
