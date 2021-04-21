import 'bootstrap/dist/css/bootstrap.min.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import moment from 'moment';

const contentful = require('contentful');

let client = contentful.createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_PREVIEW_TOKEN,
  host: 'preview.contentful.com'
});

const blog = 'blog';

export async function getServerSideProps({ params }) {
  let data = await client.getEntries({
    content_type: blog,
    'fields.slug': params.slug,
  })
  return {
    props: {
      data: data.items[0].fields,
    },
  };
}

export default function Blog({ data }) {
  const document = data.richText;
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <img className="rounded mb-3 mt-3 mx-auto d-block"
          src={node.data?.target?.fields?.file?.url}
          alt={node.data?.target?.fields?.title}
        />
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node) => (
        <div className="col-4 mx-auto mt-4 mb-4">
          <div className="card">
            <div className="product-image">
              {node.newArrival === "Yes" &&
                <div className="ribbon ribbon-info">
                  New
                </div>
              }
              <img className="w-40 h-40 rounded-lg shadow-sm object-cover " alt={node.data?.target?.fields?.jsonObject.value} src={node.data?.target?.fields?.jsonObject.data.image_url} />
            </div>
            <div className="container pb-3">
              <div className="py-2">
                <p className="text-muted text-sm mb-1 truncate">{node.data?.target?.fields?.jsonObject.value}</p>
                <h4 className="h6 text-uppercase mb-1 tiny"><a href={"#"} className="text-dark">{node.data?.target?.fields?.title}</a></h4><span className="text-muted">EUR {node.data?.target?.fields?.jsonObject.data.Prijs}</span>
              </div>
              <div className="product-hover-overlay"><a href={"#"} className="product-hover-overlay-link"></a>
                <div className="product-hover-overlay-buttons"><a href={"#"} className="btn btn-dark"><i className="fa-search fa"></i><span className="btn-buy-label">View</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };
  return (
    <div>
      {console.log(options)}
      {console.log(data.richText)}
      {/* First Section */}
      <section className="hero">
        <div className="container">

          {/* Hero Content */}
          <div className="hero-content pb-5 text-center">
            <h1 className="mb-5">{data.title}</h1>
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <p className="text-muted mb-0">
                  <img src={data.reference.fields.avatar.fields.file.url} alt={data.reference.name} className="img-avatar display-block rounded-circle mr-2 w-10 h-10 " />
                     By <b className="text-dark">{data.reference.fields.name}</b>
                  <span className="mx-1"> | </span> {moment(data.publicationDate).format("MMM Do YY")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {console.log(data)}
      {/* Second Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 mx-auto">

              <img className="img-fluid rounded mx-auto d-block" src={data.featuredImage.fields.file.url} alt={data.title} />

            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-xl-8 col-lg-8 mx-auto text-justify">
              {/* RichText */}
              {documentToReactComponents(document, options)}

            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 mx-auto">

              <img className="img-fluid rounded mx-auto d-block" src={data.extraSection[0].fields.image.fields.file.url} alt={data.title} />

              </div>
          </div>
        </div>
      </section>

    </div>

  );

}