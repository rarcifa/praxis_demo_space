import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// CTF props
const contentful = require('contentful');

let client = contentful.createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_PREVIEW_TOKEN,
  host: 'preview.contentful.com'

});

const category = 'categories';
const product = 'product';
const topicProductWrapper = "topicProductWrapper";

export async function getServerSideProps({ params }) {

  let data = await client.getEntries({
    content_type: category,
    'fields.slug': params.slug,
  });
  return {
    props: {
      data: data.items[0],
    },
  };
};

export default function Category({ data }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div>
      <section className="py-4">
        {/* Product Container */}
        <div className="container">
          {console.log(data)}
          <div className="container mt-3">
            <div className="col-xl-8 mx-auto text-center mt-2">
              <h2 className="text-uppercase">Products</h2>
              <p className="lead text-muted">This component is an example of how products can be used in Contentful</p>
            </div>
          </div>

          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={5}
            gutter={20}
            leftChevron={<button className="btn btn-light border-black">{<FontAwesomeIcon icon={faChevronLeft} />}</button>}
            rightChevron={<button className="btn btn-light border-black">{<FontAwesomeIcon icon={faChevronRight} />}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {data.fields.relatedProducts.map((edge, i) =>
              <Products key={i} node={edge} />
            )}
          </ItemsCarousel>

        </div>
      </section>
    </div>
  );
}
// Product Component
const Products = ({ node }) => {
  return (
    <div className="card">
      <div className="product-image">
        {node.newArrival === "Yes" &&
          <div className="ribbon ribbon-info">
            New
        </div>
        }
        <img className="w-full h-50 rounded-lg shadow-sm object-cover " alt={node.fields.jsonObject.value} src={node.fields.jsonObject.data.image_url} />
      </div>
      <div className="container pb-3">
        <div className="py-2">
          <p className="text-muted text-sm mb-1 truncate">{node.fields.jsonObject.value}</p>
          <h4 className="h6 text-uppercase mb-1 tiny"><a href={"#"} className="text-dark">{node.fields.title}</a></h4><span className="text-muted">EUR {node.fields.jsonObject.data.Prijs}</span>
        </div>
        <div className="product-hover-overlay"><a href={"#"} className="product-hover-overlay-link"></a>
          <div className="product-hover-overlay-buttons"><a href={"#"} className="btn btn-dark"><i className="fa-search fa"></i><span className="btn-buy-label">View</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}