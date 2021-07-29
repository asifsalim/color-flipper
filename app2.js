const hex = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const magicFunc = () => {
    let hash = '#';
    for( let i = 0 ; i < 6 ; i++){
        let randNumb = generateNumb()
        hash += hex[randNumb]
        document.body.style.backgroundColor = hash
        color.textContent = hash
        console.log(hash)
    }
}

btn.addEventListener('click',magicFunc)

function generateNumb(){
    return Math.floor(Math.random() * hex.length)
}