const zip = document.querySelector("#zip");
console.log(zip);
zip.addEventListener('change',e => {
    fetch(`https://forcsec.com/ejemplos-api/codigos-postales/${zip.value}`)
    .then(resp => resp.json())git 
    .then(data => console.log(data))
});