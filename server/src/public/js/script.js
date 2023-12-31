//Solicitudes de Red

const contenedor = document.getElementById("container-row");
const btnCrear = document.getElementById("btn-new");
const myModal = new bootstrap.Modal(document.getElementById("myModal"));
const btnSave = document.getElementById("btn-save");
const form = document.getElementById("formulario");
let html = "";
let option = "";
let idForm = "";

const inputTitle = document.getElementById("inputTitle");
const inputContent = document.getElementById("inputContent");
const inputImg = document.getElementById("inputImg");

btnCrear.addEventListener("click", () => {
  option = "new";
  btnSave.textContent = "new";
  inputTitle.value = "";
  inputContent.value = "";
  inputImg.value = "";
  myModal.show();
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#btn-delete")) {
    const article = event.target.closest(".col-4");
    const idArticle = article.dataset.id;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/api/posts/${idArticle}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.ok) {
              article.remove();
            }
          })
          .catch((err) => {
            console.error(err);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
});

/*
document.addEventListener('click', (event) => {
  if(event.target.matches('#btn-delete')){
    const article = event.target.closest('.col-4')
    const idArticle = article.dataset.id
    
    fetch(`http://localhost:5000/api/posts/${idArticle}`,{
      method: 'DELETE'
    }).then(res => {
      if(res.ok){
        article.remove()
      }
    }).catch(err => {
      console.error(err)
    })
  }
})
*/

document.addEventListener("click", (event) => {
  if (event.target.matches("#btn-edit")) {
    const article = event.target.closest(".col-4");
    const idArticle = article.dataset.id;
    const urlPostEdit = article.children[0].children[0].src;
    const titleEdit = article.children[0].children[1].children[0].textContent;
    const contentEdit = article.children[0].children[1].children[1].textContent;

    idForm = idArticle;
    inputTitle.value = titleEdit;
    inputContent.value = contentEdit;
    inputImg.value = urlPostEdit;
    option = "edit";
    btnSave.textContent = "edit";
    myModal.show();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (option === "new") {
    const newPost = {
      title: inputTitle.value,
      content: inputContent.value,
      imgUrl: inputImg.value,
    };
    fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    }).then((res) => {
      if (res.ok) {
        Swal.fire({
          icon: 'sucess',
          title: '¡Post created!😃',
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          myModal.hide();
          location.reload()
        })
      }
    }).catch(err => {
      console.error(err)
    });
  }

  if (option === "edit") {
    const newPost = {
      title: inputTitle.value,
      content: inputContent.value,
      imgUrl: inputImg.value,
    };
    fetch(`http://localhost:5000/api/posts/${idForm}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    }).then((res) => {
      if (res.ok) {
        alert("Post edited successfully");
        myModal.hide();
        location.reload();
      }
    });
  }
});

