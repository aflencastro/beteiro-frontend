import React from 'react';

import _Dashboard from "../Shared/_Dashboard";

export default function Panel() {
    return (
        <div className='container-dashboard'>
            <_Dashboard/>
            {/* <div className='panel-layout'>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card mb-3">
                            <div class="card-header">
                                <h3 class="card-title">Instância(s)</h3>
                            </div>
                            <div class="list-group list-group-flush">
                                <div class="list-group-item" data-instancia>
                                    <div class="row align-items-center">
                                        <div class="col-auto"><span class="badge bg-success"></span></div>
                                        <div class="col">
                                            <div class="col-5">
                                                <form data-change-alias>
                                                    <div class="row align-items-center">
                                                        <div class="col">
                                                            <span data-alias>item.Alias</span>
                                                            <input name="id" type="hidden" value="@item.Id" />
                                                            <input data-value name="alias" type="text" class="form-control" value="@item.Alias" required autocomplete="off" style="display: none;"/>
                                                        </div>
                                                        <div class="col-auto" data-editar>
                                                            <a href="#" class="btn btn-white" aria-label="Button">
                                                            Editar
                                                            </a>
                                                        </div>
                                                        <div class="col-auto" data-salvar style="display: none;">
                                                            <button class="btn btn-success" type="submit">
                                                                Salvar
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="col-auto">Conectar</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}