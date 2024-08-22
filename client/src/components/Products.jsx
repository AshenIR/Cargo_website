import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-LEFT: 20px;
  margin-bottom: 20px;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([
    { title: "AAA", desc: "aaaaa", price: '333', img: "https://media.istockphoto.com/id/1297720584/vector/diversity-hand-team-work-help-vector-icon-illustration.jpg?s=2048x2048&w=is&k=20&c=Vqi6NycqvMfvh9-pM-0mANa96K4ch8mXEvvNm8s2G_Q=", color: ['red', 'black'], size: ['Large', 'Medium'] },
    { title: "AAA", desc: "aaaaa", price: '333', img: "https://media.istockphoto.com/id/1153375994/vector/support-service-with-headphones-customer-support-icon-consultation-telemarketing-consultant.jpg?s=2048x2048&w=is&k=20&c=hKt3rtvCiNIXIYCRIL8siPGMAVIb4f29Y_DsUIWY4M8=", color: ['red', 'black'], size: ['Large', 'Medium'] },
    { title: "AAA", desc: "aaaaa", price: '333', img: "https://media.istockphoto.com/id/1297720584/vector/diversity-hand-team-work-help-vector-icon-illustration.jpg?s=2048x2048&w=is&k=20&c=Vqi6NycqvMfvh9-pM-0mANa96K4ch8mXEvvNm8s2G_Q=", color: ['red', 'black'], size: ['Large', 'Medium'] },
    { title: "AAA", desc: "aaaaa", price: '333', img: "https://media.istockphoto.com/id/1153375994/vector/support-service-with-headphones-customer-support-icon-consultation-telemarketing-consultant.jpg?s=2048x2048&w=is&k=20&c=hKt3rtvCiNIXIYCRIL8siPGMAVIb4f29Y_DsUIWY4M8=", color: ['red', 'black'], size: ['Large', 'Medium'] },
    { title: "AAA", desc: "aaaaa", price: '333', img: "https://media.istockphoto.com/id/1297720584/vector/diversity-hand-team-work-help-vector-icon-illustration.jpg?s=2048x2048&w=is&k=20&c=Vqi6NycqvMfvh9-pM-0mANa96K4ch8mXEvvNm8s2G_Q=", color: ['red', 'black'], size: ['Large', 'Medium'] }]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
      <Title>Clients Logos</Title>
      <Container>
        {cat
          ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
          : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
      </Container>
    </>
  );
};

export default Products;
