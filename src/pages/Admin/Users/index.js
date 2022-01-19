import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../Shared/_Admin';

export default function Users() {
    return (
        <div className='container-admin-users'>
            <Layout/>
            <div className='container-xl'>
                <div className='page-header d-print-none'>
                    <div className='row align-items-center'>
                        <div className='col'>
                            <h2 className='page-title'>Usuários</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='page-body'> 
                <div className='container-xl'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='table-responsive'>
                                <table className='table table-vcenter'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>NOME</th>
                                            <th>EMAIL</th>
                                            <th>LASTLOGIN</th>
                                            <th>Instancias</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>x</td>
                                            <td>Allen</td>
                                            <td>aflencastro@gmail.com</td>
                                            <td>Ontem</td>
                                            <td>2</td>
                                            <td>
                                                <div className='btn-list flex-nowrap'>
                                                    <Link className='btn' to='#'>Edit</Link>
                                                    <Link className='btn' to='#'>Instances</Link>
                                                </div>  
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>    
                    </div>
                </div> 
            </div>    
        </div>
    );
}