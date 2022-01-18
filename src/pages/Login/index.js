import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiKey } from 'react-icons/fi'

export default function Login() {
    return (
        
        <div className="flex-fill d-flex flex-column justify-content-center py-4">
            <div className="container-tight py-4">
                <div className="text-center mb-4">
                    <Link to="/">
                        <FiArrowLeft/>
                    </Link>
                </div>

                <form className="card card-md" action="" method="post" autoComplete="off">
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">Acesso ao Painel</h2>
                        <div className="mb-2">
                            <label className="form-label">E-mail</label>
                            <input name="Email" type="email" className="form-control" placeholder="email@email.com" autoComplete='off' autoFocus required/>
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Senha
                                {/* <span className="form-label-description">
                                    <a href="./forgot-password.html">Esqueceu sua senha?</a>
                                </span> */}
                            </label>
                            <div className="input-group input-group-flat">
                                <input name="Password" type="password" className="form-control" placeholder="*****" autoComplete="off" autoFocus required/>
                                <span className="input-group-text">
                                    <a href="#" className="link-secondary" title="Show password" data-bs-toggle="tooltip">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="12" r="2" /><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" /></svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="form-footer">
                            <button type="submit" className="btn btn-primary w-100">Entrar</button>
                        </div>
                    </div>
                </form>

                <div className="text-center text-muted mt-3">
                    <Link to="/Auth/SignUp" tabIndex="-1">Não tenho cadastro</Link>
                </div>
            </div>
        </div>
    );
}