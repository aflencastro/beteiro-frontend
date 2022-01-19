import React from 'react';
import { Link } from 'react-router-dom';

export default function _Dashboard() {
    return (
        <header>
            <nav className='navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3'>
                <div className='container'>
                    <Link className='navbar-brand' to='/'>Beteiro</Link>
                    {/* <button></button> */}
                    <div className='navbar-collapse collapse d-sm-inline-flex justify-content-between'>
                        <ul className='navbar-nav flex-grow-1'>
                            <li className='nav-item'>
                            <Link className='nav-link text-dark' to='/Dashboard'>Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='navbar-nav flex-row order-md-last'>
                        <div className='nav-item'>
                            <span className='avatar avatar-sm'>A</span>
                        </div>
                        <div className='nav-item me-3'>
                            <div className='d-none d-xl-block ps-2'>
                                <div>aflencastro@gmail.com</div>
                                <div className='mt-1 small text-muted'>beteiro</div>
                            </div>
                        </div>
                        <div className='nav-item dropdown d-none d-md-flex md-3'>
                        <Link className='btn btn-block btn-danger' to='/Auth/Logout'>Sair</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}