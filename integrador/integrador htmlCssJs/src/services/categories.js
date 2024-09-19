import { categoriaActiva } from "../../main.js";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store.js";

const handleFilterProductsByCategory = (categoryIn) => {
    const products = handleGetProductLocalStorage();
    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo": 
            handleRenderList(products);
            break
        case "Hamburguesas":
        case "Gaseosas":
        case "Papas":
            const result = products.filter((el) => el.categories === categoryIn);
            handleRenderList(result);
            break; // Agregar break aquí para evitar que continúe al default
        default:
            break;
        case "mayorPrecio":
            const mayorPrecio = products.sort((a, b) => b.precio - a.precio);
            handleRenderList(mayorPrecio);
            break;
        case "menorPrecio":
            const menorPrecio = products.sort((a, b) => a.precio - b.precio);
            handleRenderList(menorPrecio);
            break;
    }
};

export const renderCategories = () => {
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosa</li>
    <li id="mayorPrecio">Mayor precio</li>
    <li id="menorPrecio">Menor precio</li>
    `;
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement) => {
        liElement.addEventListener("click", () => handleClick(liElement));
    });

    const handleClick = (elemento) => {
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el) => {
            if (el.classList.contains("liActive")) {
                el.classList.remove("liActive");
            } else {
                if (elemento === el) {
                    el.classList.add("liActive");
                }
            }
        });
    };
};