import AppRoutes from "./router/AppRoutes";
import GlobalStyles from "./common/styles/GlobalStyles";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        limit={10}
      />
    </>
  )
}

export default App
