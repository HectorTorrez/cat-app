export const getFact = () => {
     fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
        return data
    })

}