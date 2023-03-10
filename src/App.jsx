import { useCatFact } from "./hooks/useCatFact"
import { useCatImage } from "./hooks/useCatImage"
import  '../style.css'


export const App = () => {

    const { fact, threeWords, refreshFact} = useCatFact()
    const { imageUrl, refresh } = useCatImage()

    return(
        <main>
            <h1>Kitten app</h1>
            { fact && <h3>{fact}</h3>}
            { imageUrl && <img src={imageUrl} alt={{imageUrl}} /> }
            { threeWords && <p>{ threeWords }</p>}
            <button onClick={() => {
                refresh()
                refreshFact()
            }}>Get new Cat</button>
            
        </main>
    )
}