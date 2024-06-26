import { Dispatch, SetStateAction } from 'react';
import { Nav } from 'react-bootstrap';
import React from 'react'
import blueFront from '../../assets/img/products/details/blue_front.png';
import blueBack from '../../assets/img/products/details/blue_back.png';
import blueSide from '../../assets/img/products/details/blue_side.png';

import redFront from '../../assets/img/products/details/red_front.png';
import redBack from '../../assets/img/products/details/red_back.png';
import redSide from '../../assets/img/products/details/red_side.png';

import greenFront from '../../assets/img/products/details/green_front.png';
import greenBack from '../../assets/img/products/details/green_back.png';
import greenSide from '../../assets/img/products/details/green_side.png';

import purpleFront from '../../assets/img/products/details/purple_front.png';
import purpleBack from '../../assets/img/products/details/purple_back.png';
import purpleSide from '../../assets/img/products/details/purple_side.png';

import silverFront from '../../assets/img/products/details/silver_front.png';
import silverBack from '../../assets/img/products/details/silver_back.png';
import silverSide from '../../assets/img/products/details/silver_side.png';

import yellowFront from '../../assets/img/products/details/yellow_front.png';
import yellowBack from '../../assets/img/products/details/yellow_back.png';
import yellowSide from '../../assets/img/products/details/yellow_side.png';

import orangeFront from '../../assets/img/products/details/orange_front.png';
import orangeBack from '../../assets/img/products/details/orange_back.png';
import orangeSide from '../../assets/img/products/details/orange_side.png';

import classNames from 'classnames';
import { useSelector } from 'react-redux';

type Variant = {
  id: string;
  variant: string;
  thumb: string;
  value?:any;
  images: string[];
};

const colorVariants: Variant[] = [
  {
    id: 'blue',
    variant: 'Blue',
    thumb: blueFront,
    images: [blueFront, blueBack, blueSide]
  },
  {
    id: 'red',
    variant: 'Red',
    thumb: redFront,
    images: [redFront, redBack, redSide]
  },
  {
    id: 'green',
    variant: 'Green',
    thumb: greenFront,
    images: [greenFront, greenBack, greenSide]
  },
  {
    id: 'purple',
    variant: 'Purple',
    thumb: purpleFront,
    images: [purpleFront, purpleBack, purpleSide]
  },
  {
    id: 'silver',
    variant: 'Silver',
    thumb: silverFront,
    images: [silverFront, silverBack, silverSide]
  },
  {
    id: 'yellow',
    variant: 'Yellow',
    thumb: yellowFront,
    images: [yellowFront, yellowBack, yellowSide]
  },
  {
    id: 'orange',
    variant: 'Orange',
    thumb: orangeFront,
    images: [orangeFront, orangeBack, orangeSide]
  }
];

const ProductColorNav = ({
  selectedVariantKey,
  setSelectedVariantKey
}: {
  selectedVariantKey: string;
  setSelectedVariantKey: Dispatch<SetStateAction<string>>;
}) => {

  const {getProductDetail}=useSelector((state:any)=>state?.products)

  return (
    <Nav
      className="gap-2"
      activeKey={selectedVariantKey}
      onSelect={selectedKey => setSelectedVariantKey(selectedKey as string)}
    >


      
      {getProductDetail?.productVariants?.map(variant => (

           <ProductColorNavItem
          key={variant.value}
          item={variant}
          isActive={variant.value === selectedVariantKey}
        />
    
       
      ))}
    </Nav>
  );
};

const ProductColorNavItem = ({
  item,
  isActive
}: {
  item: Variant;
  isActive: boolean;
}) => {
  return (
    <Nav.Item style={{opacity:0.2}} className="">
      <Nav.Link
        eventKey={item?.value}
        className={classNames('border rounded-1 p-0', {
          'border-primary': isActive
        })}
      >
        <img src={item.images[0]} width={38} alt="" />
      </Nav.Link>
    </Nav.Item>
  );
};

export default ProductColorNav;
