
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
                        <div class=" card-rounded shadow" style="height: 600px; overflow: hidden; position: relative;">
                            <img src="../img/foto_local_1.webp" 
                                alt="Imagen" 
                                class="img-fluid" 
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
                            <div class="card-rounded text-center m-2 p-3 hand shadow">
                                <img src="../img/appointment.png" class="card-img-top" style="max-width: 73px; max-height: 75px;" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">Análisis Microbiológicos de Agua</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded text-center m-2 p-3 hand shadow">
                                <img src="../img/laboratory_analysis.png" class="card-img-top" style="max-height: 75; width: 73px" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">Análisis Fisicoquímicos de Agua</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded text-center m-2 p-3 hand shadow">
                                <img src="../img/enjoy_life.png" class="card-img-top" style="max-width: 73px; max-height: 75px;" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">Análisis clínicos</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                        
                         <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded text-center m-2 p-3 hand shadow">
                                <img src="../img/laboratory_analysis.png" class="card-img-top" style="max-height: 75; width: 73px" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">Coprología (Heces)</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>

                         <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded text-center m-2 p-3 hand shadow">
                                <img src="../img/laboratory_analysis.png" class="card-img-top" style="max-height: 75; width: 73px" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">Urología (Orina)</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>

                         <div class="col-12 col-md-4 col-lg-4">
                            <div class="card-rounded text-center m-2 p-3 hand shadow">
                                <img src="../img/laboratory_analysis.png" class="card-img-top" style="max-height: 75; width: 73px" />
                                <div class="card-body">
                                    <h5 class="card-title text-center negrita">Hematología completa</h5>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                    


                <div class="container-fluid fondo-contenedor mt-5">
                    <h2 class="font-weight-bold text-center mb-4 display-4">Contacto</h2>
                    <div class="row mt-5">
                        <!-- Información de contacto -->
                        <div class="col-12 col-md-6 p-4">
                            <div class="card-rounded shadow-lg p-4 bg-white rounded-3">
                                <h3 class="text-center mb-4" style="color: #0e6ec5; font-weight: bold;">LABORATORIO CLÍNICO BIO-QUÍMICA</h3>
                                <h4 class="mb-3" style="color: #0e6ec5; font-weight: bold;">Contactos</h4>
                                <p class="mb-3">
                                    <i class="fal fa-phone text-primary me-2"></i> 
                                    <strong>Teléfonos:</strong> 
                                    <a href="tel:+50278726113">7872-6113</a> | 
                                    <a href="tel:+50247543975">4754-3975</a>
                                </p>
                               <p class="mb-3">
                                    <i class="fal fa-envelope text-primary me-2"></i> 
                                    <strong>Correo:</strong> 
                                    <a href="mailto:laboratorioclinicobioquimica@gmail.com">laboratorioclinicobioquimica@gmail.com</a>
                                </p>
                                <p class="mb-4">
                                    <i class="fal fa-clock text-primary me-2"></i> 
                                    <strong>Horario:</strong> Lunes a Domingo, 06:00 AM - 7:00 PM
                                </p>

                                <h4 class="mb-3" style="color: #0e6ec5; font-weight: bold;">Dirección</h4>
                                <p class="mb-0">
                                    <i class="fal fa-map-marker-alt text-primary me-2"></i> 
                                    <strong>Ubicación:</strong> LOCAL NO. 03 C.C. PASEO CARNAVAL, MAZATENANGO, SUCHITEPEQUEZ
                                </p>
                            </div>
                        </div>

                        <!-- Formulario de contacto -->
                        <div class="col-12 col-md-6 p-4">
                            <div class="card-rounded shadow-lg p-4 bg-white rounded-3">
                                <h4 class="text-center mb-4" style="color: #0e6ec5; font-weight: bold;">Envíanos un mensaje</h4>
                                <form>
                                    <div class="form-group mb-3">
                                        <input
                                            type="text"
                                            class="form-control py-3 rounded-3"
                                            id="nombreUsuarioW"
                                            placeholder="Nombre completo..."
                                        />
                                    </div>
                                    
                                    <div class="form-group mb-4">
                                        <textarea
                                            class="form-control py-3 rounded-3"
                                            id="mensajeUsuarioW"
                                            rows="4"
                                            placeholder="Mensaje..."
                                        ></textarea>
                                    </div>
                                    <div class="text-center">
                                        <button
                                            type="button"
                                            class="btn btn-primary btn-lg px-5 py-2 shadow rounded-3"
                                            id="btnRegistroUsuarioW"
                                            style="background-color: #0e6ec5; border: none;"
                                        >
                                            Enviar Mensaje
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">
                    <div class="row mt-4">
                        <div class="col-12 col-md-6">
                            
                            <h2 class="text-center negrita">Our history</h2>
                            <img src="../img/imagen_fondo_history.jpg" class="card-img-top card-rounded mt-5">
                            <h3 class="mt-3">Mirum est notare quam littera gothica</h3>
                            <p class="mt-4">Dolor in hen drerit in vul putate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto dio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming</p>
                            <h3 class="mt-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus.</h3>
                            <p class="mt-3">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lector</p>

                            <ul>
                                <li>In pede mi, aliquet sit amet, euismod in,auctor ut, ligula</li>
                                <li>Aliquam dapibus tincidunt metus</li>
                                <li>Praesent justo dolor, lobortis quis, lobortis dignissim, pulvinar ac, lorem</li>
                                <li>Vestibulum sed ante</li>
                            </ul>

                            <p class="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean    nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio.
                            Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci.</p>

                        </div>

                        <div class="col-12 col-md-6">
                            <h2 class="text-center m-4 negrita">Our mission</h2>
                            <p class="mt-3"><i class="fal fa-quote-left" style="font-size: 30px;"></i> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem.</p>
                            <p class="mt-2 text-end">Mark Johnson / legentis iniis qui</p>
                        </div>


                        

                    </div>
                </div>


                <!-- Mapa -->
                <div class="container-fluid mt-5">
                    <div class="row">
                        <div class="col-12 p-0">
                            <div class="card-rounded shadow-lg bg-white rounded-3">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d123552.76564763446!2d-91.736317!3d14.5977125!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses-419!2sgt!4v1738532088834!5m2!1ses-419!2sgt" 
                                    width="100%" 
                                    height="400" 
                                    style="border:0;" 
                                    allowfullscreen="" 
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    class="rounded-3"
                                ></iframe>
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

    document.getElementById("btnRegistroUsuarioW").addEventListener("click", () => {
        // Obtener los valores de los campos
        const nombre = document.getElementById("nombreUsuarioW").value.trim();
        const mensaje = document.getElementById("mensajeUsuarioW").value.trim();
        
        // Validar que los campos no estén vacíos
        if (!nombre || !mensaje) {
            alert("Por favor, ingresa tu nombre y un mensaje.");
            return;
        }
    
        // Formatear el mensaje para WhatsApp
        const numeroWhatsApp = "+50247543985";
        const mensajeWhatsApp = `Hola, mi nombre es ${nombre}. ${mensaje}`;
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;
    
        // Redirigir a WhatsApp
        window.open(url, "_blank");
    });

};

function initView(){

    getView();
    addListeners();

};
