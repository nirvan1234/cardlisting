import React, { useState } from "react";
import { FaBurn } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
import { BsDot } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { Link } from "react-router-dom";
import Data from "./List";
import Modal from "./modal";
import "./card.css";

function Card(props) {
  const [list, setList] = useState(Data);
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(10);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 10);
  };

  const showDetails = () => {
    setIsOpen(true);
  };

  const searchCard = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm === "") {
      setList(Data);
    } else {
      const filterSearch = Data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
      console.log("search", filterSearch);
      setList(filterSearch);
    }
  };

  return (
    <div className="container">
      <div class="d-flex justify-content-end mb-2">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => searchCard(e)}
        />
        <button className="filter mx-2" onClick={() => showDetails()}>
          <BsFilter />
          Filters
        </button>
      </div>
      <Modal className="modal" open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="col-md-12">
          <h1 class="mx-1">Filters </h1>
          <p class="mx-1">Type</p>
          <span class="mx-1">
            <input type="checkbox" />
            <span>Subscription</span>
          </span>
          <span class="mx-2">
            <input type="checkbox" />
            <span>Burner</span>
          </span>
          <p class="mt-2 mx-1">Card Holder</p>
          <select
            className="dropdown mx-1 mt-0 w-50"
            name="Select CardHolder"
            id="cars"
          >
            <option value="Cardholder1">Cardholder1</option>
            <option value="Cardholder2">Cardholder2</option>
            <option value="Cardholder3">Cardholder3</option>
            <option value="Cardholder4">Cardholder4</option>
          </select>
          <div className="d-flex">
            <button className="apply-btn mx-1 mt-3 border-0 text-muted bg-danger">
              Apply
            </button>
            <button
              className=" clear-btn mx-2 mt-3 border-0 text-muted"
              onClick={() => setIsOpen(false)}
            >
              Clear
            </button>
          </div>
        </div>
      </Modal>

      
      <div className="row">
        {list.slice(0, visible).map((item) => {
          return (
                <div className="col-sm-6" key={item.owner_id}>
                  <div className="card mx-2 mt-2">
                    <div className="card-body">
                      <div class="d-flex justify-content-between">
                        <h5 className="card-title">{item.name}</h5>

                        <FaBurn />
                      </div>
                      <p>Vishal + Software Subscription</p>
                      <div className="d-flex justify-content-between">
                        <p className="cardType">{item.card_type}</p>
                        <p>Expires 9 Feb</p>
                      </div>
                      <div>
                        <ProgressBar variant="success" now={100} />
                      </div>
                      <p className="card-text mt-2">
                        <div className="d-flex justify-content-between">
                          <p>
                            <BsDot className="bsdot" />
                            Spent
                          </p>
                          <p>
                            {item.spent.value} {item.spent.currency}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>
                            <BsDot className="bsdot-second px-1" />
                            Available to Spend
                          </p>
                          <p>
                            {item.available_to_spend.value}{" "}
                            {item.available_to_spend.currency}
                          </p>
                        </div>
                      </p>
                      <Link to="/cardlisting" className="ms-2">
                        <button
                          onClick={() => {
                            props.fun(item.owner_id);
                          }}
                        >
                          send Id
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
          );
        })}
        </div>
      
      
      <div className="loadmore-btn">
        <button
          onClick={() => showMoreItems()}
          className="loadm-btn bg-danger border-0 text-white mt-2 mb-5"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default Card;
