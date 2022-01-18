import React from 'react';
import { Link } from 'react-router-dom';

import '../../pages/Home/';
import './styles.css';

export default function Home() {
    return (
    <div className='page'>
        <header className="navbar navbar-expand-md navbar-light d-print-none">
            <div className="container-xl">
                <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3"> </h1>
                <div className="navbar-nav flex-row order-md-last">
                    <div className="nav-item">
                        <Link to="/Auth/Login" className="btn btn-success">Acesse sua conta</Link>
                    </div>
                </div>
            </div>
        </header>
        <div className="content">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 className="intro">
                            bet<span>eiro</span>
                        </h1>
                    </div>
                </div>
            </div>

            <footer className="footer footer-transparent d-print-none text-white-50">
                <div className="container">
                    <div className="row text-center align-items-center flex-row-reverse">
                        <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                            <ul className="list-inline list-inline-dots mb-0">
                                <li className="list-inline-item">
                                    beteiro app
                                </li>
                                <li className="list-inline-item">
                                    Suas apostas na nuvem em alta disponibilidade
                                </li>
                                <li className="list-inline-item">
                                    v0.1-alpha
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    );
}