
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_ciproanalisis()}
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_uroanalisis()}
                        </div>    
                        <div class="tab-pane fade" id="cuatro" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_enfermedades_infecciosas()}
                        </div>
                        <div class="tab-pane fade" id="cinco" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_hematologia()}
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
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cuatro" data-toggle="tab" href="#cuatro" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cinco" data-toggle="tab" href="#cinco" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                    
                </div>
               
            `
        },
        vista_listado:()=>{
            return `
                <div class="container-fluid mt-5">
                    <div class="row text-center">
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_coproanalisis">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">COPROLOGÍA</h5>
                                    <img src="../img/ciproanalisi.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="Coproanálisis" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_uroanalisis">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">UROLOGÍA</h5>
                                    <img src="../img/uroanalisis.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="Uroanálisis" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="enfermedades_infecciosas">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">ENFERMEDADES INFECCIOSAS</h5>
                                    <img src="../img/QUIMICA_SANGUINEA.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="Química Sanguínea" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card card-rounded m-2 p-3 hand shadow" id="card_hematologia">
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">HEMATOLOGÍA COMPLETA</h5>
                                    <img src="../img/hematology.png" class="card-img-top rounded text-center" style="max-width: 50px; max-height: 100px; display: block; margin: auto" alt="Hematología" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        vista_ciproanalisis:()=>{
            return `
                <div class="container-fluid py-3">
                    <div class="row bg-info text-white p-3 align-items-center mb-4">
                        <div class="col-3 col-md-2">
                            <button class="btn btn-outline-light" onclick="Navegar.laboratorista()">&lt;&lt;</button>
                        </div>
                        
                        <div class="col">
                            <h1 class="mb-0">COPROLOGÍA</h1>
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <label class="form-label mb-0 text-white">Tipo:</label>
                                </div>
                                <div class="col-12 mb-2">
                                    <select class="form-control">
                                        <option>COPROLOGÍA</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <label class="form-label mb-0 text-white">REF:</label>
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control" value="FEB25-001" readonly>
                                </div>
                            </div>
                            <div class="row align-items-center mt-2">
                                <div class="col-auto">
                                    <label class="form-label mb-0 text-white">Fecha:</label>
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control" value="6/02/2025" readonly>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-outline-light">
                                <i class="bi bi-printer"></i> Re-Imprimir
                            </button>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col-md-6">
                            <div class="row mb-3">
                                <label class="col-sm-3 col-form-label text-info">Nombre:</label>
                                <div class="col-sm-9">
                                    <div class="input-group">
                                        <select class="form-control"></select>
                                        <button class="btn btn-outline-secondary">
                                            <i class="fal fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-sm-3 col-form-label text-info">Edad:</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row mb-3">
                                <label class="col-sm-3 col-form-label text-info">Tratante:</label>
                                <div class="col-sm-9">
                                    <select class="form-control"></select>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <div class="card">
                                <div class="card-header bg-info text-center text-white">Macroscopio</div>
                                <div class="card-body">
                                    <label class="form-label text-info">Color:</label>
                                    <input type="search" class="form-control" list="colorHecesListCoprologia" placeholder="...." />
                                    <datalist id="colorHecesListCoprologia">
                                        <option value="CAFE"/>
                                        <option value="VERDE"/>
                                        <option value="AMARILLA" />
                                        <option value="ROJA" />
                                        <option value="NEGRAS" />
                                    </datalist>
                                    <label class="form-label text-info">Restos Alimenticios:</label>
                                    <input type="search" class="form-control" list="restoAlimenticiosListCoprologia" placeholder="..."/>
                                    <datalist id="restoAlimenticiosListCoprologia">
                                        <option value="POSITIVO" />
                                        <option value="NEGATIVO" />
                                    </datalist>
                                    <label class="form-label text-info">Sangre:</label>
                                    <input type="search" class="form-control" list="sangreListCoprologia" placeholder="..."/>
                                    <datalist id="sangreListCoprologia">
                                        <option value="POSITIVO" />
                                        <option value="NEGATIVO" />
                                    </datalist>
                                    <label class="form-label text-info">Consistencia:</label>
                                    <input type="search" class="form-control" list="consistenciaListCoprologia" placeholder="..."/>
                                    <datalist id="consistenciaListCoprologia">
                                        <option value="FORMADO" />
                                        <option value="SEMI_FORMADO" />
                                        <option value="DIARREICO" />
                                        <option value="SEMI_DIARREICO" />
                                    </datalist>
                                    <label class="form-label text-info">Moco:</label>
                                    <input type="search" class="form-control" list="mocoListCoprologia" placeholder="..."/>
                                    <datalist id="mocoListCoprologia">
                                        <option value="POSITIVO" />
                                        <option value="NEGATIVO" />
                                    </datalist>
                                    <label class="form-label text-info">PH:</label>
                                    <input type="search" class="form-control" list="phListCoprologia" placeholder="..."/>
                                    <datalist id="phListCoprologia">
                                        <option value="6"  />
                                        <option value="5" />
                                        <option value="6.5" />
                                        <option value="7.0" />
                                        <option value="7.5" />
                                    </datlist>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card">
                                <div class="card-header bg-info text-center text-white">Químico</div>
                                <div class="card-body">
                                    <label class="form-label text-info">Leucocitos:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                    <label class="form-label text-info">Células Vegetales:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                    <label class="form-label text-info">Almidones:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                    <label class="form-label text-info">levaduras:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                    <label class="form-label text-info">Huevo:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                    <label class="form-label text-info">Quistes:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="card">
                                <div class="card-header bg-info text-center text-white">Microscopio</div>
                                <div class="card-body">
                                    <label class="form-label text-info">Eritrocitos:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                    <label class="form-label text-info">Grasas:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                    <label class="form-label text-info">Jabón:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                    <label class="form-label text-info">Bacterias:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 text-end">
                            <button class="btn btn-info btn-lg">
                                <i class="fal fa-save"></i> Guardar
                            </button>
                        </div>
                    </div>
                </div>
                
            `;
        },
        vista_uroanalisis:()=> {
            return `
                <div class="container-fluid py-3">
                
                <div class="row bg-info text-white p-3 align-items-center mb-4">
                    <div class="col-3 col-md-2">
                        <button class="btn btn-outline-light" onclick="Navegar.laboratorista()">&lt;&lt;</button>
                    </div>
                    
                    <div class="col">
                        <h1 class="mb-0">UROLOGÍA</h1>
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <label class="form-label mb-0 text-white">Tipo:</label>
                            </div>
                            <div class="col-12 mb-2">
                                <select class="form-control">
                                    <option>UROLOGÍA</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <label class="form-label mb-0 text-white">REF:</label>
                            </div>
                            <div class="col-6">
                                <input type="text" class="form-control" value="FEB25-001" readonly>
                            </div>
                        </div>
                        <div class="row align-items-center mt-2">
                            <div class="col-auto">
                                <label class="form-label mb-0 text-white">Fecha:</label>
                            </div>
                            <div class="col-6">
                                <input type="text" class="form-control" value="6/02/2025" readonly>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-outline-light">
                            <i class="fal fa-printer"></i> Re-Imprimir
                        </button>
                    </div>
                </div>

               
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="row mb-3">
                            <label class="col-sm-3 col-form-label text-info">Nombre:</label>
                            <div class="col-sm-9">
                                <select class="form-control"></select>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-sm-3 col-form-label text-info">Edad:</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row mb-3">
                            <label class="col-sm-3 col-form-label text-info">Tratante:</label>
                            <div class="col-sm-9">
                                <select class="form-control"></select>
                            </div>
                        </div>

                    </div>
                </div>

            
                <div class="row">

                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <div class="card-header bg-info text-center">
                                <h5 class="card-title mb-0 text-white">MACROSCÓPICO</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label class="form-label text-info">Color:</label>
                                    <input type="search" class="form-control" list="colorHecesListUrologia" placeholder="...." />
                                    <datalist id="colorHecesListUrologia">
                                        <option value="AMARILLO"/>
                                        <option value="MARRON"/>
                                        <option value="ROJO" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Aspecto:</label>
                                    <input type="search" class="form-control" list="aspectoListUrologia" placeholder="...." />
                                    <datalist id="aspectoListUrologia">
                                        <option value="LIGERAMENTE TURBIO"/>
                                        <option value="TURBIO"/>
                                        <option value="LIMPIDO" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Densidad:</label>
                                    <input type="search" class="form-control" list="densidadListUrologia" placeholder="...." />
                                    <datalist id="densidadListUrologia">
                                        <option value="1.000" />
                                        <option value="1.005" />
                                        <option value="1.010" />
                                        <option value="1.015" />
                                        <option value="1.020" />
                                        <option value="1.010" />
                                        <option value="1.030" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">PH:</label>
                                    <input type="search" class="form-control" list="phListUrologia" placeholder="...." />
                                    <datalist id="phListUrologia">
                                        <option value="5.0" />
                                        <option value="6.0" />
                                        <option value="6.5" />
                                        <option value="7.0" />
                                        <option value="7.5" />
                                        <option value="8.0" />
                                        <option value="8.5" />
                                    </datalist>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <div class="card-header bg-info text-center">
                                <h5 class="card-title mb-0 text-white">Químico</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label class="form-label text-info">Leucocitos:</label>
                                    <input type="search" class="form-control" list="leucocitosListQuimicoUrologia" placeholder="...." />
                                    <datalist id="leucocitosListQuimicoUrologia">
                                        <option value="NEGATIVO" />
                                        <option value="+" />
                                        <option value="++" />
                                        <option value="+++" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Glucosa:</label>
                                    <input type="search" class="form-control" list="glucosaListQuimicoUrologia" placeholder="...." />
                                    <datalist id="glucosaListQuimicoUrologia">
                                        <option value="NEGATIVO" />
                                        <option value="+" />
                                        <option value="++" />
                                        <option value="+++" />
                                        <option value="++++" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Proteínas:</label>
                                    <input type="search" class="form-control" list="proteinasQuimicoListUrologia" placeholder="...." />
                                    <datalist id="proteinasQuimicoListUrologia">
                                        <option value="NEGATIVO" />
                                        <option value="+" />
                                        <option value="++" />
                                        <option value="+++" />
                                    </datalist>
                                </div>    
                                <div class="mb-3">
                                    <label class="form-label text-info">Cetonas:</label>
                                    <input type="search" class="form-control" list="cetonasQuimicoListUrologia" placeholder="...." />
                                    <datalist id="cetonasQuimicoListUrologia">
                                        <option value="NEGATIVO" />
                                        <option value="0.5 mmol/l" />
                                        <option value="1.5 mmol/l" />
                                        <option value="4.0 mmol/l" />
                                        <option value="8.0 mmol/l" />
                                        <option value="16 mmol/l" />
                                    </datalist>
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label text-info">Hemoglobina:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Urobilinógeno:</label>
                                    <input type="search" class="form-control" list="urobiligenoListQuimicoUrologia" placeholder="...." />
                                    <datalist id="urobiligenoListQuimicoUrologia">
                                        <option value="NORMAL" />
                                        <option value="+" />
                                        <option value="++" />
                                        <option value="+++" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Nitritos:</label>
                                    <input type="search" class="form-control" list="nitritosListQuimicoUrologia" placeholder="...." />
                                    <datalist id="nitritosListQuimicoUrologia">
                                        <option value="POSITIVO" />
                                        <option value="NEGATIVO" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Ácido Ascórbico:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Bilirrubina:</label>
                                    <input type="search" class="form-control" list="bilirrubinaListQuimicoUrologia" placeholder="...." />
                                    <datalist id="bilirrubinaListQuimicoUrologia">
                                        <option value="NEGATIVO" />
                                        <option value="17 µmol/l" />
                                        <option value="50 µmol/l" />
                                        <option value="100 µmol/l" />
                                    </datalist>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <div class="card-header bg-info text-center">
                                <h5 class="card-title mb-0 text-white">Microscopio</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label class="form-label text-info">Leucocitos:</label>
                                    <input type="search" class="form-control" list="leucocitosListMicroscopioUrologia" placeholder="...." />
                                    <datalist id="leucocitosListMicroscopioUrologia">
                                        <option value="NEGATIVO" />
                                        <option value="+" />
                                        <option value="++" />
                                        <option value="+++" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Eritocitos:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">C. Epiteliales:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Bacterias:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Cristales:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Cilindros:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label text-info">Otros:</label>
                                    <input type="search" class="form-control" list="" placeholder="...." />
                                    <datalist id="">
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                        <option value="" />
                                    </datalist>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                    
                </div>

              
                <div class="row">
                    <div class="col-12 align-items-end">
                        <button class="btn btn-info btn-lg">
                            <i class="fal fa-save"></i> Guardar
                        </button>
                    </div>
                </div>
            </div>
            `;
        },
        vista_enfermedades_infecciosas:()=> {
            return `
                <div class="container-fluid py-3">
               
                <div class="row bg-info text-white p-3 align-items-center mb-4">
                    <div class="col-3 col-md-2">
                        <button class="btn btn-outline-light" onclick="Navegar.laboratorista()">&lt;&lt;</button>
                    </div>
                   
                    <div class="col">
                        <h1 class="mb-0">ENFERMEDADES INFECCIOSAS</h1>
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <label class="form-label mb-0 text-white">Tipo:</label>
                            </div>
                            <div class="col-12 mb-2">
                                <select class="form-control">
                                    <option>ENFERMEDADES INFECCIOSAS</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <label class="form-label mb-0 text-white">REF:</label>
                            </div>
                            <div class="col-6">
                                <input type="text" class="form-control" value="FEB25-001" readonly>
                            </div>
                        </div>
                        <div class="row align-items-center mt-2">
                            <div class="col-auto">
                                <label class="form-label mb-0 text-white">Fecha:</label>
                            </div>
                            <div class="col-6">
                                <input type="text" class="form-control" value="6/02/2025" readonly>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-outline-light">
                            <i class="fal fa-printer"></i> Re-Imprimir
                        </button>
                    </div>
                </div>

                
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="row mb-3">
                            <label class="col-sm-3 col-form-label text-info">Nombre:</label>
                            <div class="col-sm-9">
                                <div class="input-group">
                                    <select class="form-control"></select>
                                    <button class="btn btn-outline-secondary">
                                        <i class="fal fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-sm-3 col-form-label text-info">Edad:</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row mb-3">
                            <label class="col-sm-3 col-form-label text-info">Tratante:</label>
                            <div class="col-sm-9">
                                <select class="form-control"></select>
                            </div>
                        </div>
                       
                    </div>
                </div>

                
                <div class="card mb-4">
                    <div class="card-header bg-info text-center">
                        <h5 class="card-title mb-0 text-white">Química Sanguínea</h5>
                    </div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label class="form-label text-info">Exámen realizado:</label>
                                <div class="input-group">
                                    <input type="text" class="form-control">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"></button>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label text-info">Valores normales:</label>
                                <input type="text" class="form-control" readonly>
                            </div>
                            <div class="col-md-2">
                                <label class="form-label text-info">Obtenidos:</label>
                                <div class="d-flex">
                                    <input type="text" class="form-control me-2">
                                    <button class="btn btn-info">
                                        <i class="bi bi-plus-lg"></i> Agregar
                                    </button>
                                </div>
                            </div>
                        </div>

                       
                        <div class="table-responsive mb-3">
                            <table class="table table-bordered">
                                <thead class="table-light">
                                    <tr>
                                        <th>Examen</th>
                                        <th>Valores normales</th>
                                        <th>Valores Obtenidos</th>
                                        <th>Medida</th>
                                        <th>PosNeg</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                            </table>
                        </div>

                      
                        <div class="mb-3">
                            <label class="form-label text-info">Otros:</label>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 text-end">
                        <button class="btn btn-info btn-lg">
                            <i class="fal fa-save"></i> Guardar
                        </button>
                    </div>
                </div>
            </div>
            `;
        },
        vista_hematologia:()=> {
            return `
                <div class="container-fluid py-3">
                
                <div class="row bg-info text-white p-3 align-items-center mb-4">
                    <div class="col-1">
                        <button class="btn btn-outline-light" onclick="Navegar.laboratorista()">&lt;&lt;</button>
                    </div>
                    <div class="col-1">
                        <span class="fs-1">i</span>
                    </div>
                    <div class="col">
                        <h1 class="mb-0 text-white">Hematología Completa</h1>
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <label class="form-label mb-0 text-white">Tipo:</label>
                            </div>
                            <div class="col-5">
                                <select class="form-control">
                                    <option>Hematología</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <label class="form-label mb-0 text-white">No. Ref:</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" class="form-control" value="373" readonly>
                            </div>
                        </div>
                        <div class="row align-items-center mt-2">
                            <div class="col-auto">
                                <label class="form-label mb-0 text-white">Fecha:</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" class="form-control" value="6/02/2025" readonly>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-outline-light">
                            <i class="fal fa-printer"></i> Re-Imprimir
                        </button>
                    </div>
                </div>

                
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="row mb-3">
                            <label class="col-sm-3 col-form-label text-info">Paciente:</label>
                            <div class="col-sm-9">
                                <div class="input-group">
                                    <select class="form-control"></select>
                                    <button class="btn btn-outline-secondary">
                                        <i class="fal fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-sm-3 col-form-label text-info">Edad:</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row mb-3">
                            <label class="col-sm-3 col-form-label text-info">Médico:</label>
                            <div class="col-sm-9">
                                <select class="form-control"></select>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-sm-3 col-form-label text-info">Laboratorista:</label>
                            <div class="col-sm-9">
                                <select class="form-control"></select>
                            </div>
                        </div>
                    </div>
                </div>

               
                <div class="row">
                    
                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-header bg-info text-center">
                                <h5 class="card-title mb-0 text-white">Hematología</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Hematocrito:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">%</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Hemoglobina:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">g/dl</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Eritrosedimentación:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">mm/hora</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Glóbulos Rojos:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">Eri/mm³</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Glóbulos Blancos:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">Leuc/mm³</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Plaquetas:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">mm³</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-header bg-info text-center">
                                <h5 class="card-title mb-0 text-white">Fórmula Diferencial</h5>
                            </div>
                            <div class="card-body">
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Segmentados:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end" value="0.00">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">%</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Basófilos:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end" value="0.00">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">%</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Linfocitos:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end" value="0.00">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">%</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Monocitos:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end" value="0.00">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">%</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Eosinófilos:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end" value="0.00">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">%</span>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-5 col-form-label text-info">Cayados:</label>
                                    <div class="col-sm-5">
                                        <input type="number" class="form-control text-end" value="0.00">
                                    </div>
                                    <div class="col-sm-2">
                                        <span class="form-control-plaintext">%</span>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <div class="alert alert-danger mb-0">
                                        <strong>Diferencial:</strong> Falso
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
                <div class="row mb-4">
                    <div class="col-12">
                        <label class="form-label text-info">Otros:</label>
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                </div>

               
                <div class="row">
                    <div class="col-12 text-end">
                        <button class="btn btn-info btn-lg">
                            <i class="fal fa-save"></i> Guardar
                        </button>
                    </div>
                </div>
            </div>
            `;
        }
    }

    root.innerHTML = view.body();

};

function addListeners(){
    document.getElementById("card_coproanalisis").addEventListener('click', ()=> {
        document.getElementById("tab-dos").click();
    });

    document.getElementById("card_uroanalisis").addEventListener('click', ()=> {
        document.getElementById("tab-tres").click()
    });

    document.getElementById("enfermedades_infecciosas").addEventListener('click', ()=> {
        document.getElementById("tab-cuatro").click();
    })

    document.getElementById("card_hematologia").addEventListener('click', ()=> {
        document.getElementById("tab-cinco").click();
    })
};

function initView(){

    getView();
    addListeners();

};
