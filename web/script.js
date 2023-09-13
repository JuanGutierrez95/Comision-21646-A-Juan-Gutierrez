//Solicitudes de Red

const contenedor = document.getElementById("container-row");
console.log(contenedor);

let html = "";

fetch("http://localhost:5000/api/posts")
  .then((response) => response.json()) // Parse la respuesta como JSON
  .then((data) => {
    console.log(data);
    data.forEach((post) => {
      html += `
        <article class="col-4 d-flex justify-content-center mb-3" data-id="${post.id}">
            <!--Post-->
            <div class="card" style="width: 18rem">
              <img
                src="${post.imgUrl}"
                class="card-img-top"
                alt="nuevo titulo"
              />
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.content}</p>
                <div>
                  <button class="btn btn-secondary">Edit</button>
                  <button class="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </article>
        `;
      contenedor.innerHTML = html;
    });
  });
