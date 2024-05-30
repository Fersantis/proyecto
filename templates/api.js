//**********metodo para consumir api ***************/

fetch('http://127.0.0.1:5000/productos')
.then(response => response.json())
.then(data => {
  const tableBody = document.getElementById('tableBody');
  console.log(data);
  data.forEach(prod => {
    const row = `<tr>
            <td>${prod.id}</td>
            <td>${prod.nombre}</td>
            <td>${prod.precio}</td>
            <td>${prod.stock}</td>
           </tr>`;
    tableBody.innerHTML += row;
  });
})

.catch(error => console.error('Error al consumir la API:', error));



fetch('http://127.0.0.1:5000/productos_epp')
.then(response => response.json())
.then(data => {
  const tableBody = document.getElementById('tableBodyepp');
  console.log(data);
  data.forEach(prod => {
    const row = `<tr>
            <td>${prod.id}</td>
            <td>${prod.nombre}</td>
            <td>${prod.precio}</td>
            <td>${prod.stock}</td>
           </tr>`;
    tableBody.innerHTML += row;
  });
})

.catch(error => console.error('Error al consumir la API:', error));

fetch('http://127.0.0.1:5000/productos_materiales')
.then(response => response.json())
.then(data => {
  const tableBody = document.getElementById('tableBodymateriales');
  console.log(data);
  data.forEach(prod => {
    const row = `<tr>
            <td>${prod.id}</td>
            <td>${prod.nombre}</td>
            <td>${prod.precio}</td>
            <td>${prod.stock}</td>
           </tr>`;
    tableBody.innerHTML += row;
  });
})

.catch(error => console.error('Error al consumir la API:', error));

fetch('http://127.0.0.1:5000/productos_fijaciones')
.then(response => response.json())
.then(data => {
  const tableBody = document.getElementById('tableBodyfijaciones');
  console.log(data);
  data.forEach(prod => {
    const row = `<tr>
            <td>${prod.id}</td>
            <td>${prod.nombre}</td>
            <td>${prod.precio}</td>
            <td>${prod.stock}</td>
           </tr>`;
    tableBody.innerHTML += row;
  });
})

.catch(error => console.error('Error al consumir la API:', error));

fetch('http://127.0.0.1:5000/productos_herramientas')
.then(response => response.json())
.then(data => {
  const tableBody = document.getElementById('tableBodyherramientas');
  console.log(data);
  data.forEach(prod => {
    const row = `<tr>
            <td>${prod.id}</td>
            <td>${prod.nombre}</td>
            <td>${prod.precio}</td>
            <td>${prod.stock}</td>
            <td>${prod.imagen_url}</td>
           </tr>`;
    tableBody.innerHTML += row;
  });
})

.catch(error => console.error('Error al consumir la API:', error));

fetch('http://127.0.0.1:5000/productos_equipos_medicion')
.then(response => response.json())
.then(data => {
  const tableBody = document.getElementById('tableBodyequipos');
  console.log(data);
  data.forEach(prod => {
    const row = `<tr>
            <td>${prod.id}</td>
            <td>${prod.nombre}</td>
            <td>${prod.precio}</td>
            <td>${prod.stock}</td>
           </tr>`;
    tableBody.innerHTML += row;
  });
})

.catch(error => console.error('Error al consumir la API:', error));





document.getElementById('loginForm').addEventListener('submit', function(event) {
  
  event.preventDefault();  // Evita el envío del formulario por defecto

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

//hasta aqui llegamos super bien
  fetch('/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
  })
  .then(response => response.json())
  .then(data => {   
    
      if (data.message) {
        alert('login realizado con exito');
      } else {
          // Login failed, show an error message
          alert('Invalid username or password');
      }
  })
  .catch(error => console.error('Error:', error));
});
