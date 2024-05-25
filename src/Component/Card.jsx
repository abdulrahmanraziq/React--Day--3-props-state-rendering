import React, { useState } from "react";

function Card({ dataset, setCart }) {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="col-md-3 col-sm-12 col-xs-12 mb-5">
        <div className="card h-100">
          {dataset.sale && (
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              {dataset.saleText}
            </div>
          )}
          <img className="card-img-top" src={dataset.image} alt={dataset.title} />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{dataset.title}</h5>
              {dataset.star && (
                <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                </div>
              )}
              {dataset.isStrikePrice && (
                <span className="text-muted text-decoration-line-through">
                  {dataset.strikePrice}
                </span>
              )}
              {dataset.price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {toggle ? (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => {
                    setToggle((currentValue) => !currentValue);
                    setCart((currentValue) => currentValue + 1);
                  }}
                >
                  Add To Cart
                </button>
              ) : (
                <button
                  className="btn btn-outline-danger mt-auto"
                  onClick={() => {
                    setToggle((currentValue) => !currentValue);
                    setCart((currentValue) => currentValue - 1);
                  }}
                >
                  Remove From Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
