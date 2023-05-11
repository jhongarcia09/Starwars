export const getPlanetas=async ()=>{
    const url ="https://swapi.dev/api/planets//?cin"
    const request = await fetch(url)
    const info =await request.json()

    return info
}
export const getEspecies=async ()=>{
    const url ="https://swapi.dev/api/species//"
    const request = await fetch(url)
    const info =await request.json()

    return info
}