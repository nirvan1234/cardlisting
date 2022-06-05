import React, { useContext } from "react";
import { AppContext } from "./context";
import { BsDot } from "react-icons/bs";
import { FaBurn } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";

function CardListing() {
  const { selectedCard } = useContext(AppContext);

  console.log(selectedCard);

  return (
    <div>
      {selectedCard.map((item) => {
        return (
          <div className="container">
            <div className="row " key={item.owner_id}>
              <div className="col-sm-6">
                <div className="card mx-2">
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
                    <ProgressBar variant="success" now={100} />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardListing;
