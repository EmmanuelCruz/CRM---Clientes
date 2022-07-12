# Sistema de registro de clientes en React.
## Emmanuel Cruz Hernández

----

### Descripción

Sistema básico para control de clientes con operaciones básicas: agregar, editar, eliminar.

----

### Sobre React

En este proyecto se aplica el uso de Routing, con la que se pueden tener diferentes URL's en un proyecto y mostrar diferentes componentes en cada una, así como restringir el acceso a ciertas páginas.

Existen diferentes bibliotecas para manejar en Routing, entre ellas se encuentran las siguientes:

* React Router
* React Location
* Gatsby
* Next.js

#### React Router

En este proyecto se usa `React Roter`. Se instala con el siguiente comando

        npm i react-router-dom

Se utilizan algunos objetos principales dentro de la biblioteca de React Router

* Se usa el componente `BrowserRouter` para definir diferentes endpoints.
* Se usa el componente `Routes` para definir el conjunto de rutas.
* Se usa el componente `Route` para especificar la ruta. Estas se pueden anidar utilizando el mismo compnente. Cuando tiene apertura y cierre de tipo `<Route>...</Route>` se refiere a una ruta anidada. En cambio, las etiquetas del tipo `<Route/>` definen una ruta específica.
* Se usa el componente `Outlet` para visitar la ruta del componente padre y muestra el componente donde se define el Outlet, usando el resto definido en la ruta padre.
* Se usa la etiqueta `Link` para relacionar los enlaces. Esta etiqueta reemplaza el comportamiento de las referencias `<a>...</a>`
* El Hook `useLocation` 

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<IniciarSesion/>}>
                    <Route index element={<LoginForm />} />
                </Route>
                <Route path='/clientes' element={<Layout/>}>
                    <Route index element={<Inicio/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

El Outlet dentro del componente, inyecta el código que se encuentre en la eiqueta _element_.

        <div>
            Desde iniciar sesión    
            <Outlet />
        </div>

### Formik

Se usa una biblioteca para validación de fomularios llamado `Formik` y `Yup`. Se intala con los siguientes comandos

Formik

        npm i formik

Yup

        npm i yup

### Sobre el servidor

Este proyecto usa un servidor local con la biblioteca Json Server

        json-server --watch db.json --port 4000