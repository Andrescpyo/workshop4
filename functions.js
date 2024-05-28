async function callMessage() {
    
    location.href = 'http://localhost:8000/hello_ud';   //agregamos un redirect para que nos mande a la pagina 'hello_ud'

    try {
        const response = await fetch('http://localhost:8000/hello_ud'); //Cambio en URL (se agregó el puerto del localhost)
        const data = await response.text();
        document.getElementById('result').textContent = data;

    } catch (error) {
        console.error('Error:', error);
    }
}


//cambiamos el nombre de la funcion puesto que desde el html se llama a la función calltable()
async function callTable() {
    try {
        const response = await fetch('http://localhost:8000/data'); //Cambio en URL (se agregó el puerto del localhost)
        const data = await response.json();
        
        let table = '<table>';
        table += '<tr><th>ID</th><th>Name</th><th>Description</th></tr>';
        
        data.forEach(item => {
            table += `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.description}</td></tr>`;
        });
        
        table += '</table>';
        
        document.getElementById('result').innerHTML = table;
    } catch (error) {
        console.error('Error:', error);
    }
}