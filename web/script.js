//Solicitudes de Red 
fetch("http://localhost:5000/api/posts")
    .then((response) => response.json()) // Parse la respuesta como JSON
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));