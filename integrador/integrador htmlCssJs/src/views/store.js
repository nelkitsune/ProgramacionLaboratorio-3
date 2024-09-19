import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { setProductoActivo, openModal } from "../../main.js";

export const handleGetProductsToStorage = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
};

export const handleRenderList = (productosIn) => {
    console.log('Productos obtenidos:', productosIn); // Verifica si tienes productos en el array
    const burgers = productosIn.filter((el) => el.categories === "Hamburguesas");
    const papas = productosIn.filter((el) => el.categories === "Papas");
    const gaseosa = productosIn.filter((el) => el.categories === "Gaseosas");

    const renderProductGroup = (productos, title) => {
        console.log(`${title}:`, productos);  // Verifica qué productos se están filtrando
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `
                <div class="containerTargetItem" id="product-${producto.categories}-${index}">
                <div>
                <img src="${producto.imagen}"/>
                <div>
                <h2>${producto.nombre} </h2>
                </div>
                <div>
                <p><b>Precio:</b>$ ${producto.precio}</p>
                <p><b>Categoria:</b> ${producto.categories}</p>
                </div>
                </div>
                </div>
                `;
            }).join("");  // Unimos el array de strings

            return `
            <section class="sectionStore">
            <h3 class="nombreH3">${title}</h3>
            <div class="containerProductStore">
            ${productosHTML}
            </div>
            </section>
            `;
        } else {
            console.log(`No hay productos para ${title}`);
            return "";
        }
    };

    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosa, "Gaseosas")}
    `;

    const addEvents = (productosIn) => {
        productosIn.forEach((element, index) => {
            const productContainer = document.getElementById(`product-${element.categories}-${index}`);
            if (productContainer) {
                productContainer.addEventListener("click", () => {
                    setProductoActivo(element);
                    openModal();
                });
            }
        });
    };

    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosa);
};