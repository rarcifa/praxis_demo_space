import PoweredByVercel from '../powered-by-vercel'

function Footer() {
  return (
    <footer className="container mx-auto fixed bottom-0 right-0 left-0 flex justify-center items-center h-24">
      <a href="https://vercel.com?utm_source=next-mysql">
        <PoweredByVercel />
      </a>
        {/* JS */}
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossOrigin="anonymous"/>
        <script src="/assets/js/uikit.js"/>
        <script src="/assets/js/simplebar.js"/>
        <script src="/assets/js/custom.js"/>
        <script src="https://kit.fontawesome.com/b9cd0203fc.js" crossOrigin="anonymous"></script>
    </footer>
    
  )
}

export default Footer
