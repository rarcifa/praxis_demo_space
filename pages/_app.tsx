import '../assets/css/uikit.css'
import '../assets/css/style.css'
import '../assets/css/icons.css'
import '../assets/css/tailwind.css'
import Footer from '@/components/footer'
import { JSX as LocalJSX} from '@ionic/core'
import { JSX as IoniconsJSX} from 'ionicons'
import { HTMLAttributes, ReactText } from 'react'

type ToReact<T> = {
  [P in keyof T]?: T[P] & Omit<HTMLAttributes<Element>, 'className'> & {
    class?: string;
    key?: ReactText;
  }
}

declare global {
  export namespace JSX {
    interface IntrinsicElements extends ToReact<LocalJSX.IntrinsicElements & IoniconsJSX.IntrinsicElements> {}
  }
}

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp