import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../Footer/index';
function LoginLayout({ component: Component, ...props }) {
    return (
            <>
        <div className="container-form">
            <Route {...props} component={Component} />
        </div>
        <Footer/>
</>
    );
}
export default LoginLayout; 