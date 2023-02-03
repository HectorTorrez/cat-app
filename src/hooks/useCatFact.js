import { useEffect, useState } from "react"

export const useCatFact = () => {
    const [fact, setFact] = useState()
    const [threeWords, setThreeWords] = useState()
    useEffect(() => {
        fetch('https://catfact.ninja/fact')
            .then(response => response.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
                const threeFirstWords = fact.split(' ', 3).join(' ')
                console.log(threeFirstWords)
                setThreeWords(threeFirstWords)

            })

    }, [])

    const refreshFact = () => {
        fetch('https://catfact.ninja/fact')
            .then(response => response.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
                const threeFirstWords = fact.split(' ', 3).join(' ')
                console.log(threeFirstWords)
                setThreeWords(threeFirstWords)

            })
    }

    return {
        fact,
        threeWords,
        refreshFact
    }
}