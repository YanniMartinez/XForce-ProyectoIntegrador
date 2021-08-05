const articleForm = document.querySelector('#article-form'); // Conectamos con el form


// console.log(parseFloat(precio.value)-);

/**
 * Si el form es SUBMIT, se ejecuta el siguiente algoritmo
 */
articleForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitamos que el dormulario ejecute el codigo por default

    console.log(articleForm);
    
});