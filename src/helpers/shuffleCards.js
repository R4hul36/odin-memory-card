
const shuffleCards = (arr) => {
    // console.log(arr)
    const shuffledArr = [...arr]
  
    // console.log(shuffledArr)
    for(let i= shuffledArr.length-1; i>0; i--) {
        const n = Math.floor(Math.random() * (i+1));
        [shuffledArr[i], shuffledArr[n]] = [shuffledArr[n], shuffledArr[i]]
    }
    return shuffledArr
}

export default shuffleCards;