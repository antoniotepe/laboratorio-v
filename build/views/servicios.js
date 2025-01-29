
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

                    
            <div class="container-fluid mt-5 text-center">
                <h5 class="subtitle">CUSTOMER SERVICE</h5>
                <h2 class="section-title">High Quality Services</h2>
            </div>

            <div class="container my-5">
                <div class="row mt-5">
                    <div class="col-12 col-md-4 col-lg-3">
                        
                        <div class="card rounded align-items-center m-2 p-3 service-card">
                            <img src="../img/naturapathic.png" alt="Aqui va una imagen para la tarjeta" class="card-img-top" style="max-width: 80px; max-height: 80px">
                            <div class="card-body">
                                <h5 class="card-title negrita">Naturapathic</h5>
                            </div>
                        </div>

                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        
                        <div class="card rounded align-items-center m-2 p-3 service-card">
                            <img src="../img/microbiology.png" alt="Aqui va una imagen para la tarjeta" class="card-img-top" style="max-width: 80px; max-height: 80px">
                            <div class="card-body">
                                <h5 class="card-title negrita">Microbiolgy</h5>
                            </div>
                        </div>

                    </div>
                    <div class="col-12 col-md-4 col-lg-3">

                        <div class="card rounded align-items-center m-2 p-3 service-card">
                            <img src="../img/biochemistry.png" alt="Aqui va una imagen para la tarjeta" class="card-img-top" style="max-width: 80px; max-height: 80px">
                            <div class="card-body">
                                <h5 class="card-title negrita">Biochemistry</h5>
                            </div>
                        </div>

                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                    
                        <div class="card rounded align-items-center m-2 p-3 service-card">
                            <img src="../img/diagnostic.png" alt="Aqui va una imagen para la tarjeta" class="card-img-top" style="max-width: 80px; max-height: 80px">
                            <div class="card-body">
                                <h5 class="card-title negrita">Diagnostic</h5>
                            </div>
                        </div>

                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        
                        <div class="card rounded align-items-center m-2 p-3 service-card">
                            <img src="../img/hormonal.png" alt="Aqui va una imagen para la tarjeta" class="card-img-top" style="max-width: 80px; max-height: 80px">
                            <div class="card-body">
                                <h5 class="card-title negrita">Hormonal</h5>
                            </div>
                        </div>

                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        
                        <div class="card rounded align-items-center m-2 p-3 service-card">
                            <img src="../img/paternity_test.png" alt="Aqui va una imagen para la tarjeta" class="card-img-top" style="max-width: 80px; max-height: 80px">
                            <div class="card-body">
                                <h5 class="card-title negrita">Paternity Test</h5>
                            </div>
                        </div>

                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        
                        <div class="card rounded align-items-center m-2 p-3 service-card">
                            <img src="../img/biochemistry_2.png" alt="Aqui va una imagen para la tarjeta" class="card-img-top" style="max-width: 80px; max-height: 80px">
                            <div class="card-body">
                                <h5 class="card-title negrita">Biochemistry</h5>
                            </div>
                        </div>

                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        
                        <div class="card rounded align-items-center m-2 p-3 service-card">
                            <img src="../img/biochemistry.png" alt="Aqui va una imagen para la tarjeta" class="card-img-top" style="max-width: 80px; max-height: 80px">
                            <div class="card-body">
                                <h5 class="card-title negrita">Cytopathology</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
            
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
