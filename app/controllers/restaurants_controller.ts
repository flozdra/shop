import type { HttpContext } from '@adonisjs/core/http'

export default class RestaurantsController {
  async index(ctx: HttpContext) {
    return ctx.inertia.render('index', {
      restaurants: [
        { id: 1, name: 'Foo' },
        { id: 2, name: 'Bar' },
      ],
    })
  }
}
