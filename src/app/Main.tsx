import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import House from './pages/House';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<House />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
)