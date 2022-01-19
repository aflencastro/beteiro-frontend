import React from 'react';

import Layout from '../Shared/_Admin';

export default function Admin() {
    return (
        
        <div className='container-admin-index'>
            <Layout/>
            <div class="row row-cards">
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body p-2 text-center">
                            <div class="text-end text-green">
                                <span class="text-green d-inline-flex align-items-center lh-1">6%</span>
                            </div>
                            <div class="h1 m-0">users.total</div>
                            <div class="text-muted mb-3">Usuários</div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body p-2 text-center">
                            <div class="text-end text-green">
                                <span class="text-green d-inline-flex align-items-center lh-1">6%</span>
                            </div>
                            <div class="h1 m-0">instances.total</div>
                            <div class="text-muted mb-3">Instancias</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}