const cardContainers = document.querySelectorAll(".conteiner");

        const products = [
            {
                id: 0,
                imgSrc: "./src/image/1.png",
                productName: "Ягненок",
                productWeight: "Вес: 225 г",
                productDescription: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
                productPrice: "620 ₽"
            },
            {
                id: 1,
                imgSrc: "./src/image/2.png",
                productName: "Индейка",
                productWeight: "Вес: 225 г",
                productDescription: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
                productPrice: "450 ₽"
            },
            {
                id: 2,
                imgSrc: "./src/image/3.png",
                productName: "Гусь",
                productWeight: "Вес: 225 г",
                productDescription: "Фаршированный яблоками",
                productPrice: "7900 ₽"
            },
            {
                id: 3,
                imgSrc: "./src/image/4.png",
                productName: "Утка",
                productWeight: "Вес: 225 г",
                productDescription: "Фаршированная рисом, курагой и аршами",
                productPrice: "3230 ₽"
            },
            {
                id: 4,
                imgSrc: "./src/image/1.png",
                productName: "Ягненок",
                productWeight: "Вес: 225 г",
                productDescription: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
                productPrice: "620 ₽"
            },
            {
                id: 5,
                imgSrc: "./src/image/2.png",
                productName: "Индейка",
                productWeight: "Вес: 225 г",
                productDescription: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
                productPrice: "450 ₽"
            },
            {
                id: 6,
                imgSrc: "./src/image/3.png",
                productName: "Гусь",
                productWeight: "Вес: 225 г",
                productDescription: "Фаршированный яблоками",
                productPrice: "7900 ₽"
            },
            {
                id: 7,
                imgSrc: "./src/image/4.png",
                productName: "Утка",
                productWeight: "Вес: 225 г",
                productDescription: "Фаршированная рисом, курагой и аршами",
                productPrice: "3230 ₽"
            }
        ];

        function createProductCards(array, container){
            for(let i = 0; i < array.length; i++){
                const productCard = document.createElement("div");
                productCard.className = "productCard";
                productCard.id = `productCard${i}`;
                productCard.innerHTML =`<img src="${array[i].imgSrc}" alt="">
                                        <div class="productCard_podBlock1">
                                            <p class="productName">${array[i].productName}</p>
                                            <p class="productWeight">${array[i].productWeight}</p>
                                            <p class="productDescription">${array[i].productDescription}</p>
                                        </div>
                                        <div class="productCard_podBlock2">
                                            <p class="productPrice">${array[i].productPrice}</p>
                                            <button class="addCard">В корзину <img src="./img/basketImg.svg" alt=""></button>
                                        </div>`;
                container.appendChild(productCard);
            }
        }

        cardContainers.forEach(container => createProductCards(products, container));