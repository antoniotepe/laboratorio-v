
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
        vista_listado:()=>{
            return `

        <div class="container-fluid p-2 mt-5">
            <!-- Banner principal -->
            <div class="row">
                <div class="col-12">
                    <div class="banner-container" style="height: 600px; overflow: hidden; position: relative;">
                        <img src="../img/foto_local_1.webp" 
                            alt="Imagen" 
                            class="img-fluid banner-image" 
                            style="width: 100%; height: 100%; object-fit: cover; object-position: center;" />
                        
                        <div class="banner-overlay" 
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
                                    display: flex; flex-direction: column; justify-content: center; 
                                    align-items: center; text-align: center; padding: 20px;">
                            
                            <h1 class="banner-title display-4 ">Bienvenido a Laboratorio Clínico Bio-Química</h1>
                            <p class="banner-subtitle lead " style="margin-bottom: 10px;">Expertos en análisis clínicos y cuidado de tu salud</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


                <div class="container my-5">
                    <div class="row align-items-center">

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card align-items-center m-2 p-3 efect-hover hand">
                                <img src="../img/appointment.png" class="card-img-top" style="max-width: 73px; max-height: 75px;" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">Análisis Microbiológicos de Agua</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card align-items-center m-2 p-3 efect-hover hand">
                                <img src="../img/laboratory_analysis.png" class="card-img-top" style="max-height: 75; width: 73px" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">Análisis Fisicoquímicos de Agua</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card align-items-center m-2 p-3 efect-hover hand">
                                <img src="../img/enjoy_life.png" class="card-img-top" style="max-width: 73px; max-height: 75px;" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">Análisis clínicos</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                        
                         <div class="col-12 col-md-4 col-lg-4">
                            <div class="card align-items-center m-2 p-3 efect-hover hand">
                                <img src="../img/laboratory_analysis.png" class="card-img-top" style="max-height: 75; width: 73px" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">Coprología (Heces)</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>

                         <div class="col-12 col-md-4 col-lg-4">
                            <div class="card align-items-center m-2 p-3 efect-hover hand">
                                <img src="../img/laboratory_analysis.png" class="card-img-top" style="max-height: 75; width: 73px" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">Urología (Orina)</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>

                         <div class="col-12 col-md-4 col-lg-4">
                            <div class="card align-items-center m-2 p-3 efect-hover hand">
                                <img src="../img/laboratory_analysis.png" class="card-img-top" style="max-height: 75; width: 73px" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">Hematología completa</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <small class="negrita text-naranja text-end">By ${byAuthor} (${versionapp})</small>    

            

                

            `
        },
        vista_nuevo:()=>{

        }
    }

    root.innerHTML = view.body();

};

function addListeners(){

};

function initView(){

    getView();
    addListeners();

};
