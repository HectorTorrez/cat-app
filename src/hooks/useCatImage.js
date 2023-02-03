import { useEffect, useState } from "react"

export const useCatImage = () => {
    const [imageUrl, setImageUrl] = useState()


    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => res.json())
            .then(data => {
                const { 0: { url } } = data
                setImageUrl(url)
            })
    }, [])


    const refresh = () => {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => res.json())
            .then(data => {
                const { 0: { url } } = data
                setImageUrl(url)
            })
    }



    return {
        imageUrl,
        refresh
    }
}