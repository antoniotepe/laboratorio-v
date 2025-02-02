function getView() {
    let view = {
        body: () => {
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
               
            `;
        },
        vista_listado: () => {
            return `
            
            
            <div class="container-fluid fondo-contenedor mt-5">
                <h2 class="font-weight-bold text-center mb-4">Contacto</h2>
                <div class="row mt-5">
                <div class="col-12 col-md-6 col-lg-6 p-2">

                            
                                <h3 class="negrita text-center">LABORATORIO CLÍNICO BIO-QUÍMICA</h3>
                                <h4 class="negrita text-left">Contactos</h4>
                                <p>
                                    <i class="fal fa-phone text-primary"></i> 
                                    <strong style="color: #0e6ec5;">Teléfonos:</strong> 7872-6113 | 4754-3975
                                </p>
                                <p>
                                    <i class="fal fa-envelope text-primary"></i> 
                                    <strong style="color: #0e6ec5;">Correo electrónico:</strong> laboratorioclinicobioquimica@gmail.com
                                </p>
                                <p>
                                    <i class="fal fa-clock text-primary"></i> 
                                    <strong style="color: #0e6ec5;">Horarios de atención:</strong> LUNES A DOMINGO DE 06:00 AM A 7:00 PM
                                </p>

                                <h4 class="negrita text-left">Dirección</h4>
                                
                                <p class="mt-3">
                                    <i class="fal fa-map-marker-alt text-primary"></i> 
                                    <strong style="color: #0e6ec5;">Ubicación:</strong> LOCAL NO. 03 C.C. PASEO CARNAVAL, MAZATENANGO, SUCHITEPEQUEZ
                                </p>
                                
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 p-2">
                                
                                
                                <form>
                                    <div class="form-group mb-3">
                                        
                                        <input
                                            type="text"
                                            class="form-control py-3 rounded-input"
                                            id="nombreUsuarioR"
                                            placeholder="Nombre completo..."
                                        />
                                    </div>
                                    <div class="form-group mb-3">
                                       
                                        <input
                                            type="email"
                                            class="form-control py-3 rounded-input"
                                            id="emailUsuarioR"
                                            placeholder="Correo electrónico..."
                                        />
                                    </div>
                                    <div class="form-group mb-4">
                                        
                                        <textarea
                                            class="form-control py-3 rounded-input"
                                            id="exampleFormControlTextarea1"
                                            rows="4"
                                            placeholder="Mensaje..."
                                        ></textarea>
                                    </div>
                                    <div class="text-left">
                                        <button
                                            type="button"
                                            class="btn btn-primary btn-lg px-5 py-2 shadow rounded-3"
                                            id="btnRegistroUsuarioR"
                                        >
                                            Enviar Mensaje
                                        </button>
                                    </div>
                                </form>             
                    </div>
                </div>
            </div>

               
            <div class="container-fluid mt-5">
                <div class="row">
                    <div class="col-12">
                      
                        
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d-91.123456!3d14.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzI0LjQiTiA5McKwMDcnMjQuNCJX!5e0!3m2!1sen!2sgt!4v1234567890123!5m2!1sen!2sgt" 
                                width="100%" 
                                height="400" 
                                style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy">
                            </iframe>
                        
                    </div>
                </div>
            </div>
                       

            `;
        },
        vista_nuevo: () => {}
    };

    root.innerHTML = view.body();
}

function addListeners() {}

function initView() {
    getView();
    addListeners();
}