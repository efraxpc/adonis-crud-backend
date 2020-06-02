'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(()=>{
  Route.post('usuarios/', 'UserController.store')
  Route.post('usuarios/login', 'UserController.login')

  Route.get('clientes/', 'ClienteController.all').middleware('guest')
  Route.post('clientes/', 'ClienteController.store').middleware('guest')
  Route.delete('clientes/:Id', 'ClienteController.destroy').middleware('guest')
  Route.put('clientes/:Id', 'ClienteController.update').middleware('guest')

}).prefix('api/v1/')



