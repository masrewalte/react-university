import React from "react";
import "./FaqAccordion.css";
import Accordion from "react-bootstrap/Accordion";
function FaqAccordion() {
  return (
    <div className="faq-section">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center text-capitalize mb-5">
          Frequently Asked Questions
        </h2>
        <p className="text-center mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          pariatur commodi, modi molestiae quo necessitatibus impedit! Fugit
          totam laborum quibusdam est pariatur iure voluptatem eveniet
          doloremque, nam animi consequatur voluptatum ea, odit officiis labore
          corporis ipsam maiores unde dignissimos aliquam!
        </p>
        <Accordion defaultActiveKey="" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>First question ? </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore, dicta. Asperiores necessitatibus labore itaque nam
              commodi mollitia iusto quisquam corporis fugiat ducimus quia
              numquam animi repudiandae quas ad tempora eum illo totam fugit,
              quibusdam facere! Odit corporis pariatur quis vitae!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Second question ? </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore, dicta. Asperiores necessitatibus labore itaque nam
              commodi mollitia iusto quisquam corporis fugiat ducimus quia
              numquam animi repudiandae quas ad tempora eum illo totam fugit,
              quibusdam facere! Odit corporis pariatur quis vitae!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Third question ? </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore, dicta. Asperiores necessitatibus labore itaque nam
              commodi mollitia iusto quisquam corporis fugiat ducimus quia
              numquam animi repudiandae quas ad tempora eum illo totam fugit,
              quibusdam facere! Odit corporis pariatur quis vitae!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Fourth question ? </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore, dicta. Asperiores necessitatibus labore itaque nam
              commodi mollitia iusto quisquam corporis fugiat ducimus quia
              numquam animi repudiandae quas ad tempora eum illo totam fugit,
              quibusdam facere! Odit corporis pariatur quis vitae!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default FaqAccordion;
