import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';


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

  let blog = await client.getEntries({
    content_type: "blog",
  });
  return {
    props: {
      data: data.items[0],
      blog: blog,
    },
  };
};

export default function Category({ data, blog }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div>
      {/* Product Container */}
      { console.log(data) }
      <section className="py-4">
        <div className="container">
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

            outsideChevron
            chevronWidth={chevronWidth}
          >
            {data.fields.relatedProducts.map((edge, i) =>
              <Products key={i} node={edge} />
            )}
          </ItemsCarousel>

        </div>
      </section>

      {/* Collection Container */}
      {data.fields.collection
        ?
        <section className="py-4">
          <div className="container">
            <div className="container mt-3">
              <div className="col-xl-8 mx-auto text-center mt-2">
                <h2 className="text-uppercase">Collection</h2>
                <p className="lead text-muted">This component is an example of how collections can be used in Contentful</p>
              </div>
            </div>

            <div className="row">
              {data.fields.collection[0].fields.jsonObject.results.map((edge, i) =>
                <Collections key={i} node={edge} />
              )}
            </div>
          </div>
        </section>
        : <></>
      }

      {/* News Container */}
      {blog.includes.Entry[0].metadata.tags[0].sys.id === data.metadata.tags[0].sys.id
        ?
        <section className="py-4">
          <div className="container">
            {/* Content */}
            <div className="container mt-3">
              <div className="col-xl-8 mx-auto text-center mt-2">
                <h2 className="text-uppercase">FROM OUR BLOG</h2>
                <p className="lead text-muted">This is an example of how blog posts can be used in Contentful</p>
              </div>
            </div>
            <div className="row">
              {blog.items.map((edge, i) =>
                <BlogPost key={i} node={edge} />
              )}
            </div>
          </div>

        </section>
        :
        <></>
      }

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
          <h4 className="h6 text-uppercase mb-1 tiny"><a href={"#"} className="text-dark truncate">{node.value}</a></h4><span className="text-muted">EUR {node.fields.jsonObject.data.Prijs}</span>
        </div>
        <div className="product-hover-overlay"><a href={"#"} className="product-hover-overlay-link"></a>
          <div className="product-hover-overlay-buttons"><a href={"#"} className="btn btn-dark"><i className="fa-search fa"></i><span className="btn-buy-label">View</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

// Product Component
const Collections = ({ node }) => {
  return (
    <div className="col-3">
      <div className="card mt-2 mb-3">
        <div className="product-image">
          {node.newArrival === "Yes" &&
            <div className="ribbon ribbon-info">
              New
        </div>
          }
          <img className="w-full h-50 rounded-lg shadow-sm object-cover " alt={node.value} src={node.data.image_url} />
        </div>
        <div className="container pb-3">
          <div className="py-2">
            <p className="text-muted text-sm mb-1 truncate">{node.value}</p>
            <h4 className="h6 text-uppercase mb-1 tiny"><a href={"#"} className="text-dark truncate">{node.value}</a></h4><span className="text-muted">EUR {node.data.Prijs}</span>
          </div>
          <div className="product-hover-overlay"><a href={"#"} className="product-hover-overlay-link"></a>
            <div className="product-hover-overlay-buttons"><a href={"#"} className="btn btn-dark"><i className="fa-search fa"></i><span className="btn-buy-label">View</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* Latest News Component */
const BlogPost = ({ node }) => {
  return (
    <div className="col-3">
      <div className="card">
        <div className="top">
          <img alt={node.fields.title} src={(node.fields.featuredImage.fields.file.url + "?fit=crop&w=600&h=500")} />
          <div className="container">
            <div className="card-text"><small><span className="light-grey mr-1"></span><span className="text-muted">{moment(node.fields.publicationDate).format("MMM Do YY")}</span></small></div>
            <a className="text-dark" href={"/blog-post/" + node.fields.slug}><b>{node.fields.title}</b></a>
            <div className="grey truncate"><small>{node.fields.content}</small></div>
          </div>
        </div>
      </div>
    </div>
  )
}