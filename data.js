function randomizer(){
    let obj = {}
    for(let i = 0; i < 7; i++){
        obj[Math.random().toString(36).substring(7)] = Math.floor(Math.random() * 2000) + 1
    }
    return obj
}

export {randomizer}