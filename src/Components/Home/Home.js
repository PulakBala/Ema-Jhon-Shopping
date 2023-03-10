import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/tv-removebg-preview.png";
import image2 from "../../images/xbox.png";
import image3 from "../../images/headphone.png";
import watch from "../../images/watch.png";
import shoes from "../../images/shoes.png";
import bag from "../../images/bag.png";
import save from "../../images/save.jpeg";
import fashionShoe from "../../images/fashion-shoe.webp";
import { Container, Row, Col } from "react-bootstrap";

import "./Home.css";
import { Link, useLoaderData } from "react-router-dom";
import PopulerProducts from "../PopulerProducts/PopulerProducts";
import Commnet from "../Comment/Commnet";

const Home = () => {
  const populerProduct = useLoaderData();

  const [comments, setComments] = useState(["this is the first comment"]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = event.target.elements.comment.value;
    setComments([...comments, newComment]);
    event.target.reset();
  };

  return (
    <div className="bg">
      <Carousel indicators={false}>
        <Carousel.Item className="mt-5">
          <img
            className="d-block m-auto"
            src={image1}
            alt="First slide"
            style={{ width: "480px", height: "550px" }}
          />
          {/* <Carousel.Caption className="text-danger">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block m-auto mb-5"
            src={image2}
            alt="Second slide"
            style={{ width: "550px", height: "550px" }}
          />

          {/* <Carousel.Caption className="text-danger">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item className="mt-5">
          <img
            className="d-block m-auto"
            src={image3}
            alt="Third slide"
            style={{ width: "380px", height: "550px" }}
          />
        </Carousel.Item>
      </Carousel>

      <div>
        <h1 className="text-center mt-5 ">Welcome to Ema-John!!</h1>
        <p className=" fs-5 m-auto  py-5 mb-5" style={{ width: "750px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          necessitatibus quos expedita, deleniti eveniet labore assumenda
          exercitationem officia eius culpa pariatur repellat nihil est quo
          maiores laudantium voluptas consequuntur fugiat. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Minima, iure.
        </p>
      </div>

      {/* catagoris */}
      <div class="container text-center">
        <div class="row g-4 catagoris">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="p-3 border rounded-3 bg-warning d-flex align-items-center justify-content-around">
              <h1 class="text-white">Watch</h1>
              <img src={watch} alt="" />
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="p-3 border rounded-3 bg-danger d-flex align-items-center justify-content-around">
              <h1 class="text-white">Shoes</h1>
              <img src={shoes} alt="" />
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="p-3 border rounded-3 bg-primary d-flex align-items-center justify-content-around">
              <h1 class="text-white">Bag</h1>
              <img src={bag} alt="" />
            </div>
          </div>
        </div>

        <div class="card mt-5">
          <div class="row g-0">
            <div class="col-md-6">
              <img style={{ width: "557px" }} src={save} alt="..." />
            </div>
            <div class="col-md-6 bg">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text fs-5 ">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Vitae eos quis maxime modi mollitia nulla beatae
                  consequuntur aut odio voluptate magni laboriosam, ipsam iure
                  voluptatum? Accusamus porro aut aspernatur, sapiente molestias
                  nostrum nisi nulla impedit atque ratione cum, tempora iure?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  rerum repudiandae commodi. Cum voluptas dignissimos minima
                  distinctio! Cum laudantium corrupti aperiam magni illo
                  laboriosam neque labore iure animi, assumenda pariatur magnam
                  ipsum eveniet! Voluptatum magnam fuga esse, impedit magni amet
                  quis perferendis dolor, eius similique facere praesentium,
                  doloremque assumenda aspernatur.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mt-5">
          <div class="row g-0">
            <div class="col-md-6">
              <div class="card-body bg">
                <h5 class="card-title">Card title</h5>
                <p class="card-text fs-5">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Vitae eos quis maxime modi mollitia nulla beatae
                  consequuntur aut odio voluptate magni laboriosam, ipsam iure
                  voluptatum? Accusamus porro aut aspernatur, sapiente molestias
                  nostrum nisi nulla impedit atque ratione cum, tempora iure?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  rerum repudiandae commodi. Cum voluptas dignissimos minima
                  distinctio! Cum laudantium corrupti aperiam magni illo
                  laboriosam neque labore iure animi, assumenda pariatur magnam
                  ipsum eveniet! Voluptatum magnam fuga esse, impedit magni amet
                  quis perferendis dolor, eius similique facere praesentium,
                  doloremque assumenda asper?
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 16 mins ago</small>
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <img
                style={{ width: "557px", height: "554px" }}
                src={fashionShoe}
                alt="..."
              />
            </div>
          </div>
        </div>

        {/* populer collection */}
        <div className="grd">
          {populerProduct.map((populer) => (
            <PopulerProducts
              populer={populer}
              className="grid-item"
            ></PopulerProducts>
          ))}
        </div>
      </div>

      <div className="comment-section">
        <h2>Comments</h2>
        <div className="comments">
          {comments.map((comment, index) => (
            <Commnet key={index} comment={comment}></Commnet>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="comment">Leave a comment:</label>
          <input type="text" id="comment" name="comment" required />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* footer section  */}
      <footer className="mt-5 bg-black text-white text-center">
        <Container className="py-5">
          <Row>
            <Col md={4}>
              <h5>About Us</h5>
              <p>
                We are a team of developers building amazing web applications.
              </p>
            </Col>
            <Col md={4}>
              <h5>Contact Us</h5>
              <p>
                Email: info@example.com
                <br />
                Phone: (555) 555-5555
              </p>
            </Col>
            <Col md={4}>
              <h5>Follow Us</h5>
              <p>Stay connected on social media:</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link>Facebook</Link>
                </li>
                <li className="list-inline-item">
                  <Link>Twitter</Link>
                </li>
                <li className="list-inline-item">
                  <Link>Instagram</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <hr />
          <p className="text-center">&copy; 2023 My Awesome App</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
