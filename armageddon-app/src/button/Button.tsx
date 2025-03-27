export function Button() {
    const test="some word"
    return <button onClick= {()=>click(test)}>Custom Button</button>
}

function click(test) {
    console.log("click",test)
}

function hello(){
    console.log("hello")
}