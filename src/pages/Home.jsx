import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import "../styles/home.css";

const Home = () => {
  const [data, setData] = useState(products);
  const year = new Date().getFullYear;
  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === "chair"
    );
    setData(filteredProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make your Interior More Minimalist & Modern</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore minus officiis numquam nemo molestias nisi fugit
                  voluptas culpa esse a!
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={data} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
