import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiKey, FiUserPlus, FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function SignUp() {
    return (
        <div className="flex-fill d-flex flex-column justify-content-center py-4">
            <div className="container-tight py-4">
                <div className="text-center mb-4">
                    <Link to="/Auth/Login">
                        <FiArrowLeft/>
                    </Link>
                </div>

                <form className="card card-md" asp-controller="Auth" asp-action="SignUp" method="post">
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">Nova conta</h2>

                        <div className='form mb-3'>
                            <label className='form-label required'>E-mail</label>
                            <input type='email' name='Email' className='form-control' placeholder='email@email.com' autoComplete='off' autoFocus required />
                        </div>

                        <div className='form-group mb-2'>
                            <label htmlFor="" className="form-label required">Senha</label>
                            <input type="password" name='Password' className='form-control' placeholder='*****' autoComplete='off' required />
                        </div>

                        <div className='form-group mb-2'>
                            <label htmlFor="" className="form-label required">Confirmar Senha</label>
                            <input type="password" name='RePassword' className='form-control' placeholder='*****' autoComplete='off' required />
                        </div>

                        <div className="form-footer">
                            <button type="submit" className="btn btn-primary w-100">
                                <FiUserPlus /> Criar uma nova conta
                            </button>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
    );
}