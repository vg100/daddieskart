import React from 'react';
import Button from '../../../components/base/Button';
import Section from '../../../components/base/Section';
import { Col, Form, Row } from 'react-bootstrap';
import EcomAddressTable from '../../../components/tables/EcomAddressTable';
import { shippingDetailsAddress } from '../../../data/e-commerce';
import DeliveryType from '../../../components/modules/e-commerce/checkout/DeliveryType';
import { PaymentMethod } from '../../../components/modules/e-commerce/checkout/PaymentMethod';
import { currencyFormat } from '../../../helpers/utils';
import CheckoutSummaryCard from '../../../components/modules/e-commerce/checkout/CheckoutSummaryCard';
import PageBreadcrumb from '../../../components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from '../../../data/commonData';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const { selectaddres }:any = useSelector<any>(state => state?.user)
  const navigate = useNavigate();


  const payhandler=()=>{

  }
  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <h2 className="mb-5">Check out</h2>
        <Row className="justify-content-between">
          <Col lg={7}>
            <form>
              <div className="d-flex align-items-end mb-4">
                <h3 className="mb-0 me-3">Shipping Details</h3>
                <Button onClick={() => navigate(-1)} variant="link" className="p-0" type="button">
                  Edit
                </Button>
              </div>
              <EcomAddressTable data={selectaddres} />
              <hr className="my-6" />
              <DeliveryType />
              <hr className="my-6" />
              <PaymentMethod />

              <div className="d-flex flex-column flex-sm-row gap-2 mb-7 mb-lg-0">
                <Button onClick={payhandler} variant="primary" className="w-100">
                  Pay {currencyFormat(695.2)}
                </Button>

                <Button
                  variant="phoenix-secondary"
                  type="submit"
                  className="text-nowrap"
                >
                  Save Order and Exit
                </Button>
              </div>
            </form>
          </Col>
          <Col lg={5} xl={4}>
            <div className="position-sticky top-0">
              <CheckoutSummaryCard />
            </div>
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default Checkout;
