import React, {Fragment} from 'react'

// conveção props - propriedades de input
export default props =>
    // React Fragment permite criar um componente com diversas tags
    <Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </Fragment>

// também pode retornar várias tags se tiverem dentro de uma array
// export default props => [
//         <h1 key="h1">Bom dia {props.nome}!</h1>,
//         <h2 key="h2">Até breve!</h2>
//     ]

// export default props =>
//     // encapsular todas as tags em uma tag
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>