import router from '@adonisjs/core/services/router'
const RestaurantController = () => import('#controllers/restaurants_controller')
router.get('/', [RestaurantController, 'index'])
