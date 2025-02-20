
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_usuarios() + view.vista_modal_agregar_paciente() + view.vista_modal_agregar_empresas()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                    
                </div>
               
            `
        },
        vista_usuarios:()=> {
            return `
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-md-6 text-center mt-2">
                                <h3 class="text-center mt-5">Registro de Pacientes</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-wrap">
                                    <table class="table">
                                        <thead class="thead-primary text-white">
                                            <tr>
                                                <td>COD PACIENTE</td>
                                                <td>NOMBRE</td>
                                                <td>EDAD</td>
                                                <td>EMPRESA</td>
                                                <td>ACCIONES</td>
                                            </tr>
                                            </thead>
                                            <tbody id="tblDePacientes">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l  hand shadow" onclick="Navegar.laboratorista()">
                        <i class="fal fa-arrow-left"></i>
                    </button>
                    <button class="btn btn-circle btn-xl btn-success btn-bottom-r   hand shadow" id="btnAgregarPacienteModal">
                        <i class="fal fa-plus"></i>
                    </button> 
            `;
        },
        vista_modal_agregar_paciente:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_paciente">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-2">
                                    <div class="card-body">

                                        <div class="form-group">
                                            <label>COD PACIENTE:</label>
                                            <input type="text" class="form-control" id="txtCodigoPaciente"/>
                                        </div>

                                        <div class="form-group">
                                            <label>Nombre:</label>
                                            <input type="text" class="form-control" id="txtNombrePaciente"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Fecha de nacimiento:</label>
                                            <input type="date" class="form-control" id="txtFechaNacimiento"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Empresa:</label>
                                            <div style="display: flex; align-items: center; gap: 10px;">
                                                
                                                <select class="form-control" id="selectEmpresaPaciente">
                                                    <option value="">Seleccione una empresa</option>
                                                </select>
                                                
                                                <button type="button" class="btn btn-info" id="btnAbrirModalEmpresa">
                                                    <i class="fal fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>                               
                            </div>
                            <div class="modal-footer text-center">
                                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" data-dismiss="modal">
                                    <i class="fal fa-arrow-left"></i>
                                </button>
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarPaciente">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  

            `;
        },
        vista_modal_agregar_empresas:()=> {
            return `
                <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_agregar_empresa">
                    <div class="modal-dialog modal-dialog-right modal-xl">
                        <div class="modal-content">
                            <div class="modal-body p-2">
                                <div class="card card-rounded shadow p-4">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>Nombre Empresa:</label>
                                            <input type="text" class="form-control" id="txtNombreEmpresa"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="table-wrap">
                                            
                                                <table class="table">
                                                    <thead class="thead-primary">
                                                        <tr>
                                                            <th>ID EMPRESA</th>
                                                            <th>NOMBRE</th>
                                                            <th>ACCIONES</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody id="tblDeEmpresasPacientes">
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer text-center">
                                <button class="btn btn-circle btn-xl btn-bottom-l btn-secondary hand shadow" data-dismiss="modal">
                                    <i class="fal fa-arrow-left"></i>
                                </button>
                                <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarEmpresaPaciente">
                                    <i class="fal fa-save"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    root.innerHTML = view.body();

};

function addListeners(){

   // document.getElementById('txtFiltrar').addEventListener('keyup',(e)=>{
        
    //     if (e.key === "Enter") {
    //         document.getElementById("btnBuscarPaciente").click();
    //     }
    //     if (e.keycode === 13) {
    //         document.getElementById("btnBuscarPaciente").click();
    //     }
        
    // })
    get_listado_pacientes();
    obtenerCatalogoEmpresas();
    pintarEmpresasEnSelect();
    pintarEmpresasEnTabla();

    document.getElementById("txtFechaNacimiento").value = F.getFecha();

    // Abrir modal para guardar empresa
    document.getElementById("btnAbrirModalEmpresa").addEventListener("click", () => {
        $("#modal_agregar_empresa").modal('show'); 
    });

    // Abrir el modal para guardar nuevo paciente
    document.getElementById("btnAgregarPacienteModal").addEventListener('click', () => {
        $("#modal_agregar_paciente").modal('show');
    })

    // Logica para guardar pacientes
    let btnGuardarPaciente = document.getElementById('btnGuardarPaciente');
    btnGuardarPaciente.addEventListener('click', () => {

        F.Confirmacion("¿Está seguro que desea Guardar este nuevo usuario?")
        .then((value) => {
            if(value==true) {
                let codPaciente = document.getElementById("txtCodigoPaciente").value;
                let nombrePaciente = document.getElementById("txtNombrePaciente").value;
                let fecha_nacimiento = document.getElementById("txtFechaNacimiento").value;
                let empresaPaciente = document.getElementById("selectEmpresaPaciente").value;

                
                btnGuardarPaciente.disabled = true;
                btnGuardarPaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                

                insert_paciente(F.limpiarTexto(codPaciente), F.limpiarTexto(nombrePaciente), fecha_nacimiento, empresaPaciente)
                .then(() => {
                    F.Aviso("Paciente guardado exitosamente!!!");
                    // document.getElementById("txtFiltrarPacientesCiprologia").value = nombrePaciente;
                    $("#modal_agregar_paciente").modal('hide');
                    get_listado_pacientes();
                    limpiar_datos_pacientes();

                    btnGuardarPaciente.disabled = false;
                    btnGuardarPaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch((e) => {
                    F.AvisoError(`No se pudo guardar el paciente, error ${e}`);
                    console.log(e);
                    btnGuardarPaciente.disabled = false;
                    btnGuardarPaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
            }
        })
    });


    // Logica para guardar empresa de paciente
    let btnGuardarEmpresaPaciente = document.getElementById("btnGuardarEmpresaPaciente");
    btnGuardarEmpresaPaciente.addEventListener('click', () => {
        F.Confirmacion("¿Esta seguro de guardar esta nueva Empresa?")
        .then((value) => {
            if(value == true) {
                let nombreEmpresa = document.getElementById("txtNombreEmpresa").value;
                
                btnGuardarEmpresaPaciente.disabled = true;
                btnGuardarEmpresaPaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insert_empresas(F.limpiarTexto(nombreEmpresa))
                .then(() => {
                    F.Aviso("Empresa guardado exitosamente!!!");
                    $("#modal_agregar_empresa").modal('hide'); 
                    pintarEmpresasEnSelect();
                    limpiar_datos_empresas();

                    btnGuardarEmpresaPaciente.disabled = false;
                    btnGuardarEmpresaPaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })
                .catch((e) => {
                    F.AvisoError("No se puede guardar la empresa" + e);
                    console.log(e);
                    btnGuardarEmpresaPaciente.disabled = false;
                    btnGuardarEmpresaPaciente.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
                })

            }
        })
    })
};

function initView(){

    getView();
    addListeners();

};



function get_listado_pacientes() {
    let container = document.getElementById('tblDePacientes');
    container.innerHTML = GlobalLoader;
    let str = '';

    axios.post('/lista_pacientes', {
        filtro: '' 
    })
    .then((response) => {
        let data = response.data;


        if (Array.isArray(data) && data.length > 0) {
            data.map((r) => {
                str += `
                    <tr class="hand">
                        <td>${r.id_paciente || 'Sin codigo paciente'}</td>
                        <td>${r.nombre_paciente}</td>
                        <td>${r.edad}</td>
                        <td>${r.nombre_empresa || 'Sin empresa'}
                        <td>
                            <br>
                            <button class="btn btn-info btn-sm btn-circle shadow" onclick="">
                                <i class="fal fa-edit"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });

            container.innerHTML = str;
        } else {
            container.innerHTML = 'No hay datos...';
        }
    })
    .catch((error) => {
        container.innerHTML = 'Error al cargar los datos...';
        console.error(error);
    });
}
function limpiar_datos_pacientes() {
    document.getElementById("txtCodigoPaciente").value = '';
    document.getElementById("txtNombrePaciente").value = '';
    document.getElementById("txtFechaNacimiento").value = '';
    document.getElementById("selectEmpresaPaciente").value = '';
}

function limpiar_datos_empresas(){
    document.getElementById("txtNombreEmpresa").value = '';
}

function insert_paciente(codPaciente, nombre, fecha_nacimiento, empresa) {
    return new Promise((resolve, reject) => {

        axios.post("/insert_paciente", {
            id_paciente: codPaciente,
            nombre: nombre,
            fecha_nacimiento: fecha_nacimiento,
            empresa: empresa,
        })
        .then((response) => {
            let data = response.data;
            if (data && data.affectedRows > 0) { // Verifica affectedRows
                resolve(data);
            } else {
                reject();
            }
        })
    })
}

async function obtenerCatalogoEmpresas() {
    try {
        const response = await axios.post('/catalogo_empresas_pacientes', {});
        return response.data; 
    } catch (error) {
        console.error('Error al obtener las empresas:', error);
        return [];
    }
}

async function pintarEmpresasEnSelect() {
    const selectEmpresas = document.getElementById("selectEmpresaPaciente");
    selectEmpresas.innerHTML = GlobalLoader;

    const empresas = await obtenerCatalogoEmpresas();

    let str = '<option value="">Seleccione una empresa</option>'; 

    if (Array.isArray(empresas) && empresas.length > 0) {
        empresas.forEach((empresa) => {
            str += `<option value="${empresa.ID}">${empresa.NOMBRE}</option>`;
        });
    } else {
        str = '<option value="">No hay empresas disponibles</option>';
    }

    selectEmpresas.innerHTML = str; 
}

async function pintarEmpresasEnTabla() {
    const tbody = document.getElementById("tblDeEmpresasPacientes");
    tbody.innerHTML = GlobalLoader; 

    const empresas = await obtenerCatalogoEmpresas(); 

    let str = '';

    if (Array.isArray(empresas) && empresas.length > 0) {
        empresas.forEach((empresa) => {
            str += `
                <tr>
                    <td>${empresa.ID}</td>
                    <td>${empresa.NOMBRE}</td>
                    <td>
                        <button class="btn btn-sm btn-danger">Eliminar</button>
                    </td>
                </tr>
            `;
        });
    } else {
        str = '<tr><td colspan="3">No hay empresas disponibles</td></tr>';
    }

    tbody.innerHTML = str; // Pintar las filas en la tabla
}
function insert_empresas(nombreEmpresa) {
    return new Promise((resolve, reject) => {
        axios.post("/insert_empresa_paciente", {
            nombreEmpresa: nombreEmpresa
        })
        .then((response) => {
            let data = response.data;
            if(data && data.affectedRows > 0) {
                resolve(data);
            } else {
                reject();
            }
        })
    })
}