import { Routes, Route} from 'react-router-dom';

import SigninForm from './auth/forms/SigninForm';
import SignupForm from './auth/forms/SignupForm';
import { Home } from './_root/pages';
import './globals.css';
import AuthLayout from './auth/AuthLayout';
import RootLayout from './_root/RootLayout';


const App = () => {
  return (
    <main className ="flex h-screen">
        <Routes>
            {/* public routes*/}
            <Route element={<AuthLayout />}>
                <Route path = "/sign-in" element={<SigninForm />} />
                <Route path = "/sign-up" element={<SignupForm />} />

            </Route>
            
            {/*private routes*/}
            <Route element={<RootLayout />}/>
                <Route index element={<Home />}/>

        </Routes>
    </main>
  )
}

export default App
