// Масив зображень
const images = [
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
        description: "Hokkaido Flower",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
        description: "Container Haulage Freight",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
        description: "Aerial Beach View",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
        description: "Flower Blooms",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
        description: "Alpine Mountains",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
        description: "Mountain Lake Sailing",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
        description: "Alpine Spring Meadows",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
        description: "Nature Landscape",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
        description: "Lighthouse Coast Sea",
    },
];

// Отримуємо посилання на контейнер галереї
const galleryContainer = document.querySelector(".gallery");

/**
 * Створює розмітку елемента галереї на основі об'єкта зображення.
 * @param {object} image - Об'єкт зображення з властивостями preview, original, description.
 * @returns {string} Рядок HTML-розмітки для елемента галереї.
 */
function createGalleryItemMarkup({ preview, original, description }) {
    return `
                <li class="gallery-item">
                    <a class="gallery-link" href="${original}">
                        <img
                            class="gallery-image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                        />
                    </a>
                </li>
            `;
}

// Генеруємо розмітку для всіх зображень
const galleryMarkup = images.map(createGalleryItemMarkup).join("");

// Додаємо розмітку в контейнер галереї
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

/**
 * Обробник кліку на елементах галереї.
 * Відкриває модальне вікно з повнорозмірним зображенням.
 * @param {Event} event - Об'єкт події кліку.
 */
function onGalleryClick(event) {
    // Забороняємо поведінку за замовчуванням (перехід за посиланням)
    event.preventDefault();

    // Перевіряємо, чи був клік саме на зображенні галереї
    const isGalleryImage = event.target.classList.contains("gallery-image");

    if (!isGalleryImage) {
        return; // Якщо клік не на зображенні, виходимо
    }

    const originalImageUrl = event.target.dataset.source;
    const imageDescription = event.target.alt;

    // Створюємо екземпляр basicLightbox
    const instance = basicLightbox.create(`
                <img src="${originalImageUrl}" alt="${imageDescription}">
            `);

    // Відкриваємо модальне вікно
    instance.show();
}

// Додаємо слухача подій на контейнер галереї (делегування)
galleryContainer.addEventListener("click", onGalleryClick);
