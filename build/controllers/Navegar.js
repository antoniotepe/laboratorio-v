let Navegar = {
    dashboard:() => {
        F.loadScript('./views/dashboard.js', 'root')
        .then(() => {
            initView();
        })
    },
    inicio:() => {
        F.loadScript('./views/inicio.js', 'root')
        .then(() => {
            initView();
        })
    },
    about:() => {
        F.loadScript('./views/about.js', 'root')
        .then(() => {
            initView();
        })
    },
    servicios:() => {
        F.loadScript('./views/servicios.js', 'root')
        .then(() => {
            initView();
        })
    },
    contacto:() => {
        F.loadScript('./views/contacto.js', 'root')
        .then(() => {
            initView();
        })
    }


}