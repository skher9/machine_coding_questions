import React from 'react'
import { useState,useEffect } from 'react';
import {ProductsContainer, ProductCard, ProductImage, ProductTitle, PaginationButton, PaginationContainer,Wrapper,Heading} from "./styles"

function Pagination() {
const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();

    console.log(data);

    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page) {
      setPage(selectedPage);
    }
  };

  return (
    <>
    <Wrapper>
        <Heading>Pagination Implementation</Heading>
    </Wrapper>
      {products.length > 0 && (
        <ProductsContainer>
          {products.slice(page * 10 - 10, page * 10).map((prod) => (
            <ProductCard key={prod.id}>
              <ProductImage src={prod.thumbnail} alt={prod.title} />
              <ProductTitle>{prod.title}</ProductTitle>
            </ProductCard>
          ))}
        </ProductsContainer>
      )}

      {products.length > 0 && (
        <PaginationContainer>
          <PaginationButton
            onClick={() => selectPageHandler(page - 1)}
            disabled={page <= 1}
          >
            ◀
          </PaginationButton>

          {[...Array(Math.ceil(products.length / 10))].map((_, i) => (
            <PaginationButton
              key={i}
              selected={page === i + 1}
              onClick={() => selectPageHandler(i + 1)}
            >
              {i + 1}
            </PaginationButton>
          ))}

          <PaginationButton
            onClick={() => selectPageHandler(page + 1)}
            disabled={page >= products.length / 10}
          >
            ▶
          </PaginationButton>
        </PaginationContainer>
      )}
    </>
  );
}

export default Pagination
