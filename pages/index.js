import Kali from "../components/kali";
import ReactGA from 'react-ga';
import Meta from "../components/SEO/Meta";

const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <>
      <Meta />
      <Kali />
    </>
  )
}

export default App;
