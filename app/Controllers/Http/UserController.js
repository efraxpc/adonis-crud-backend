'use strict'

const User = use("App/Models/User")
class UserController {

  async login({request, auth}){
    const {email, password} = request.all()
    const token = await auth.attempt(email, password)
    return token
  }

  async store({request}){
    const { email, password }=request.all()
    const user = await User.create({
      email,
      password,
      username:email
    })
    return this.login(...arguments)
  }
  async edit({request}){
    const { password }=request.all()
    const user = await User.create({
      email,
      password,
      username:email
    })
    return this.login(...arguments)
  }

  async all({request, auth}){
  console.log('hello from all users')
  }
}

module.exports = UserController
