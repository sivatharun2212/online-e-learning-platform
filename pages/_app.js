import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from '@/context/userContext';
import { CourseProvider } from '@/context/courseContext';
import { NotesProvider } from '@/context/notesContext';

export default function App({ Component, pageProps }) {
  return <>
  <ToastContainer />
  <UserProvider>
    <CourseProvider>
      <NotesProvider>
      <Component {...pageProps} />
      </NotesProvider>
    </CourseProvider>
  </UserProvider>

  </>
}
