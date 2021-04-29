function changeElements() {
   document.querySelectorAll('.example').forEach( e => {
        e.style.backgroundColor = 'red';
        e.style.fontStyle = 'italic';
   });
}



export { changeElements };


// const examples = document.querySelectorAll('.example');
// for (let i = 0; i < examples.length; i++) {
//     examples[i].style.backgroundColor = 'red';
//     examples[i].style.fontStyle = 'italic';
// }