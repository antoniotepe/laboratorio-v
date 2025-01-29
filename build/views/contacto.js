
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

            <div class="row justify-content-center mt-5">
                <div class="col-12 col-md-6">
                    <div class="container p-4 rounded shadow-lg bg-white">
                    <h2 class="font-weight-bold text-center mb-4">Contact Us</h2>
                    <p class="text-center text-muted">Get in touch with us</p>
                    <form>
                        <div class="form-group mb-3">
                        <label for="nombreUsuarioR" class="font-weight-bold">Nombre completo</label>
                        <input
                            type="text"
                            class="form-control py-3"
                            id="nombreUsuarioR"
                            placeholder="Nombre completo..."
                        />
                        </div>
                        <div class="form-group mb-3">
                        <label for="emailUsuarioR" class="font-weight-bold">Correo electronico</label>
                        <input
                            type="email"
                            class="form-control py-3"
                            id="emailUsuarioR"
                            placeholder="Correo electronico..."
                        />
                        </div>
                        <div class="form-group mb-4">
                        <label for="exampleFormControlTextarea1" class="font-weight-bold">Mensaje</label>
                        <textarea
                            class="form-control py-3"
                            id="exampleFormControlTextarea1"
                            rows="4"
                            placeholder="Mensaje..."
                        ></textarea>
                        </div>
                        <div class="text-center">
                        <button
                            type="button"
                            class="btn btn-primary btn-lg px-5 py-2 shadow"
                            id="btnRegistroUsuarioR"
                        >
                            Enviar Mensaje
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>


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
