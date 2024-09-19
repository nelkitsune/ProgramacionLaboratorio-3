import { renderCategories } from "./src/services/categories";
import { setInLocalStorage, handleGetProductLocalStorage } from "./src/persistence/localstorage";
import { handleSearchProductByName } from "./src/services/searchBar";
import { handleRenderList } from "./src/views/store";
import Swal from "sweetalert2";
import "./style.css";

export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};

export let productoActivo = null;
export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
};

export const openModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "flex";
    const buttonDelete = document.getElementById("deleteButton");
    if (productoActivo) {
        buttonDelete.style.display = "block";
    } else {
        buttonDelete.style.display = "none";
    }

    if (productoActivo) {
        const nombre = document.getElementById("nombre"),
            imagen = document.getElementById("img"),
            categories = document.getElementById("categoria"),
            precio = document.getElementById("precio");
        imagen.value = productoActivo.imagen;
        nombre.value = productoActivo.nombre;
        precio.value = productoActivo.precio;
        categories.value = productoActivo.categories;
    }
};

export const closeModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "none";
    resetModal();
};

const resetModal = () => {
    const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        categories = document.getElementById("categoria"),
        precio = document.getElementById("precio");
    imagen.value = "";
    nombre.value = "";
    precio.value = 0;
    categories.value = "Seleccione una categoría";
};

const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById("nombre").value;
    const imagen = document.getElementById("img").value;
    const precio = document.getElementById("precio").value;
    const categories = document.getElementById("categoria").value;
    let object = null;
    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories,
        };
    } else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories,
        };
    }
    setInLocalStorage(object);
    handleGetProductsToStorage();
    closeModal();
};

const handleCancelButton = () => {
    closeModal();
};

const handleGetProductsToStorage = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
};


// Asegúrate de que las funciones estén definidas antes de ser utilizadas
const handleDeleteProduct = () => {
    Swal.fire({
        title: "desea eliminarlo?",
        text: "sera eliminado de forma permanente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "si, elimina!"
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== productoActivo.id);
            localStorage.setItem("products", JSON.stringify(result));
            const newproducts = handleGetProductLocalStorage();
            handleRenderList(newproducts);
            closeModal()
        }
    });


}

handleGetProductsToStorage();
renderCategories();
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", () => {
    openModal();
});

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", () => {
    handleCancelButton();
});

const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
    handleSaveOrModifyElements();
});

const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () => {
    console.log("Buscar producto por nombre");
    handleSearchProductByName()
});

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", () => {
    handleDeleteProduct();
});
