export const products = [
      {
            id: 1,
            image: '/Images/products/casualshirts.jpg',
            title: 'Casual Full Sleeves Shirt',
            description: 'Unique quality and beautiful and soft stuff.',
            price: 700,
            category: 'Casual Shirt',
            rating: 5

      },
      {
            id: 2,
            image: '/Images/products/casualshirts.jpg',
            title: 'Casual Full Sleeves Shirt',
            description: 'Unique quality and beautiful and soft stuff.',
            price: 200,
            category: 'Casual Shirt',
            rating: 4
      },
      {
            id: 3,
            image: '/Images/products/dresspant.jpg',
            title: 'Strech and comfortable',
            description: 'Unique quality and beautiful and soft stuff.',
            price: 300,
            category: 'Dress Pant',
            rating: 3
      },
      {
            id: 4,
            image: '/Images/products/t-shirt.jpg',
            title: 'Unique and Soft Stuff',
            description: 'Unique quality and beautiful and soft stuff.',
            price: 400,
            category: 'T-Shirt',
            rating: 2

      },
      {
            id: 5,
            image: '/Images/products/casualshirts.jpg',
            title: 'Casual Full Sleeves Shirt',
            description: 'Unique quality and beautiful and soft stuff.',
            price: 500,
            category: 'Casual Shirt',
            rating: 1
      },
      {
            id: 6,
            image: '/Images/products/dresspant.jpg',
            title: 'Strech and comfortable',
            description: 'Unique quality and beautiful and soft stuff.',
            price: 600,
            category: 'Dress Pant',
            rating: 5
      },
      {
            id: 7,
            image: '/Images/products/jeanspant.png',
            title: '100% Pure Cotton',
            description: 'Unique quality and beautiful and soft stuff.',
            price: 700,
            category: 'Jeans Pant',
            rating: 4

      },
      {
            id: 8,
            image: '/Images/products/jeanspant.png',
            title: '100% Pure Cotton',
            description: 'Unique quality and beautiful and soft stuff.',
            price: 800,
            category: 'Jeans Pant',
            rating: 3
      },
      {
            id: 9,
            image: '/Images/products/t-shirt.jpg',
            title: 'Unique and Soft Stuff',
            description: 'Unique quality and beautiful and soft stuff.',
            price: 900,
            category: 'T-Shirt',
            rating: 2
      },
      {
            id: 10,
            image: '/Images/products/jeanspant.png',
            title: '100% Pure Cotton',
            description: 'Unique quality and beautiful and soft stuff.',
            price: 700,
            category: 'Jeans Pant',
            rating: 4

      },
      {
            id: 11,
            image: '/Images/products/t-shirt.jpg',
            title: 'Unique and Soft Stuff',
            description: 'Unique quality and beautiful and soft stuff.',
            price: 900,
            category: 'T-Shirt',
            rating: 4
      },
      {
            id: 12,
            image: '/Images/products/casualshirts.jpg',
            title: 'Casual Full Sleeves Shirt',
            description: 'Unique quality and beautiful and soft stuff.',
            price: 500,
            category: 'Casual Shirt',
            rating: 1
      },
      {
            id: 13,
            image: '/Images/products/dresspant.jpg',
            title: 'Strech and comfortable',
            description: 'Unique quality and beautiful and soft stuff.',
            price: 300,
            category: 'Dress Pant',
            rating: 3
      }
];


export const getProductById =(id)=>{
      return products.find(product=>product.id===Number(id)); 
}

const findPriceRange = () => {
      let min = products[0].price;
      let max = 0;
      products.forEach(p => {
            if (p.price < min) min = p.price;
            if (p.price > max) max = p.price;
      });
      return { min, max };
}

// get price range in an array i.e., [min, max]
export const priceRange = findPriceRange();
