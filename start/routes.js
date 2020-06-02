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

  Route.get('clientes/', 'ClienteController.all').middleware('auth')
  Route.post('clientes/', 'ClienteController.store').middleware('auth')
  Route.delete('clientes/', 'ClienteController.destroy').middleware('auth')
  Route.put('clientes/', 'ClienteController.update').middleware('auth')

}).prefix('api/v1/')



