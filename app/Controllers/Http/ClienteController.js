'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Database = use('Database')
const Cliente = use("App/Models/Cliente");

/**
 * Resourceful controller for interacting with clientes
 */
class ClienteController {
  /**
   * Show a list of all clientes.
   * GET clientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async all({ request, response, view }) {
    const clientes = await Cliente.all();
    return clientes;
  }


  /**
   * Create/save a new cliente.
   * POST clientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = JSON.parse(request.raw())
    let cliente = await Cliente.create(data);
    cliente.Id = cliente.id
    await cliente.save()
    return cliente;
  }

  /**
   * Update cliente details.
   * PUT or PATCH clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const id = params.Id
    const data = JSON.parse(request.raw())
    await Database
      .table('clientes')
      .where('id', id)
      .update({ Name: data['Name'], Ocupation: data['Ocupation'], Description: data['Description'] })

    return cliente
  }

  /**
   * Delete a cliente with id.
   * DELETE clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const cliente = await Cliente.findOrFail(params.Id);
    await cliente.delete();
  }
}

module.exports = ClienteController
