import Search from '@/components/search'
import TextTruncate from 'react-text-truncate'; // recommend


// Contentful API Connection
const contentful = require('contentful');

let client = contentful.createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_PREVIEW_TOKEN,
  host: 'preview.contentful.com'
});

// Retrieve Products
const product = 'product';
const topicProductWrapper = "topicProductWrapper";

export async function getServerSideProps() {
  let products = await client.getEntries({
    content_type: product,
  })
  let wrapper = await client.getEntries({
    content_type: topicProductWrapper,
  })
  return {
    props: {
      products: products.items,
      wrapper: wrapper.items,
    }
  };
}

export default function IndexPage(props, title = 'Search Function',) {

  return (
    <body className="overflow-x-hidden">
      <div id="Wrapper">
        <div className="lg:py-40 pt-24 pb-12 relative -mt-20 bg-white" id="home">
          <div className="banner1">
            <div className="objectWrapper">
              <div className="dashboardWrapper">
              </div>
            </div>
          </div>
          {console.log(props)}
          <div className="uk-container mx-auto pt-5 mt-5 lg:mt-28">
            <div className="text-cente flex flex-col justify-center pt-5 items-center">
              <div id="logo">
                <a href="/">
                  <img src="../assets/images/brand/logo.png" className="w-50 pb-5 mb-5 ml-2 remove-p" alt={title} />
                </a>
              </div>
              <div className="shadow border border-gray-100 rounded-lg dark:bg-gray-900">
              <Search props={props} />
              </div>
              <br></br>
              <div className="col-12 col-sm-5 col-md-5 col-l-4 col-xl-4">
              <div className="ml-1 uk-grid-small pl-3 pr-3 uk-child-width-1-2@s uk-child-width-1-4@m uk-child-width-1-4@l uk-child-width-1-3@xs uk-flex-center uk-text-center" data-uk-grid>
                <div className="break-width pt-4 pb-3 pr-3 hover-icon rounded-lg">
                  <div className="uk-card uk-card-primary uk-card-body">
                    <a href="/category/kitandlijmen" className="text-dark">
                      <div className="ps5-radius font-semibold text-sm radius-round-bg mr-2 ml-auto mr-auto mt-1">KL</div>
                      <TextTruncate
                        line={1}
                        element="div"
                        truncateText="…"
                        className="text-xs pt-2 mb-2"
                        text="kitandlijmen"
                      /></a>
                  </div>
                </div>
                <div className="break-width pt-4 pb-3 pr-3 hover-icon rounded-lg">
                  <div className="uk-card uk-card-default uk-card-body">
                    <a href="/category/tuinschilderijen" className="text-dark">
                      <div className="xbox-sx-radius font-semibold text-sm radius-round-bg mr-2 ml-auto mr-auto mt-1">TS</div>
                      <TextTruncate
                        line={1}
                        element="div"
                        truncateText="…"
                        className="text-xs pt-2 mb-2"
                        text="Tuinschilderijen"
                      />
                      </a>
                  </div>
                </div>
                <div className="break-width pt-4 pb-3 pr-3 hover-icon rounded-lg">
                  <div className="uk-card uk-card-default uk-card-body">
                    <a href="/" className="text-dark">
                      <div className="ps4-radius font-semibold text-sm radius-round-bg mr-2 ml-auto mr-auto mt-1">C3</div>
                      <TextTruncate
                        line={1}
                        element="div"
                        truncateText="…"
                        className="text-xs pt-2 mb-2"
                        text="Content 3"
                      />
                      </a>
                  </div>
                </div>
                <div className="break-width pt-4 pb-3 pr-3 hover-icon rounded-lg">
                  <div className="uk-card uk-card-default uk-card-body">
                    <a href="/" className="text-dark">
                      <div className="xbox-radius font-semibold text-sm radius-round-bg mr-2 ml-auto mr-auto mt-1">C4</div>
                      <TextTruncate
                        line={1}
                        element="div"
                        truncateText="…"
                        className="text-xs pt-2 mb-2"
                        text="Content 4"
                      /></a>
                  </div>
                </div>
                <div className="break-width pt-4 pb-3 pr-3 hover-icon rounded-lg">
                  <div className="uk-card uk-card-default uk-card-body">
                    <a href="/blog-post/hoe-kun-je-een-kleine-badkamer-optimaal-benutten" className="text-dark">
                      <div className="switch-radius font-semibold text-sm radius-round-bg mr-2 ml-auto mr-auto mt-1">B1</div>
                      <TextTruncate
                        line={1}
                        element="div"
                        truncateText="…"
                        className="text-xs pt-2 mb-2"
                        text="Blog 1"
                      /></a>
                  </div>
                </div>


                <div className="break-width pt-4 pb-3 pr-3 hover-icon rounded-lg">
                  <div className="uk-card uk-card-default uk-card-body">
                    <a href="/" className="text-dark">
                      <div className="pc-radius font-semibold text-sm radius-round-bg mr-2 ml-auto mr-auto mt-1">A2</div>
                      <TextTruncate
                        line={1}
                        element="div"
                        truncateText="…"
                        className="text-xs pt-2 mb-2"
                        text="Asset 2"
                      /></a>
                  </div>
                </div>
                <div className="break-width pt-4 pb-3 pr-3 hover-icon rounded-lg">
                  <div className="uk-card uk-card-default uk-card-body">
                    <a href="/" className="text-dark">
                      <div className="info-radius font-semibold text-sm radius-round-bg mr-2 ml-auto mr-auto mt-1">A3</div>
                      <TextTruncate
                        line={1}
                        element="div"
                        truncateText="…"
                        className="text-xs pt-2 mb-2"
                        text="Asset 3"
                      /></a>
                  </div>
                </div>
                <div className="break-width pt-4 pb-3 pr-3 hover-icon rounded-lg">
                  <div className="uk-card uk-card-default uk-card-body">
                    <a href="/" className="text-dark">
                      <div className="info-radius font-semibold text-sm radius-round-bg mr-2 ml-auto mr-auto mt-1">A4</div>
                      <TextTruncate
                        line={1}
                        element="div"
                        truncateText="…"
                        className="text-xs pt-2 mb-2"
                        text="Asset 4"
                      /></a>
                  </div>
                </div>

              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}
