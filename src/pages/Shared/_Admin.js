import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
    return (
        <div className='container-layout-admin'>
            <header>
                <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                    <div class="container">
                        <Link to='/' className='navbar-brand'>Beteiro Admin</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul class="navbar-nav flex-grow-1">
                                <li class="nav-item">
                                    <Link to="/Admin" className='nav-link text-dark'>Página Inicial</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Admin/Users" className='nav-link text-dark'>Usuários</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                            <Link to='/Auth/Logout' className='tn btn-block btn-danger'>
                                Sair
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}