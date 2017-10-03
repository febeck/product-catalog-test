/**
 * Following the duck pattern, actions, constants and reducers are in the same file called module.js
 *
 * See: https://github.com/erikras/ducks-modular-redux
 *
 */

 /**
 * Constants should be scoped to their module: use the string Products/ADD_ITEM instead of ADD_ITEM
 */
export const SELECT_ITEM = 'Products/SELECT_ITEM'

export function selectItem (sku) {
  return {
    type: SELECT_ITEM,
    payload: sku
  }
}

const initialState = {
  list: [
    {
      'sku': 'BATMAN-123',
      'price': 122.99,
      'name': 'Batmobile',
      'description': 'Superhero Car',
      'size': ['V8', 'V12', 'V16'],
      'brand': 'Bruce Wayne',
      'categories': ['Super Heroes', 'Flying Cars', 'Cars'],
      'product_image_url': 'cdn.gfg.com.br/batmobile.jpg',
      'special_price': 11.22
    },
    {
      'sku': 'SPD-99',
      'price': 1992.99,
      'name': 'Spiderman Suit',
      'description': 'Fancy suit for Spidermen',
      'size': ['34', '35'],
      'brand': 'Peter Parker',
      'categories': ['Super Heroes', 'Spiderman', 'Clothes'],
      'product_image_url': 'http://cdn.gfg.com.br/spider-suite.jpg'
    },
    {
      'sku': 'KRYPT-123',
      'price': 122.99,
      'name': 'Kryptonite',
      'description': 'Anti Superman material',
      'size': ['22', '23', '24'],
      'brand': 'Lex Luthor',
      'categories': ['Super Heroes', 'Superman', 'Accessories'],
      'product_image_url': 'http://cdn.gfg.com.br/kryptonite.jpg',
      'special_price': 0.99
    },
    {
      'sku': 'BATMAN-001',
      'price': 12323.99,
      'name': 'Batman Suit',
      'description': 'Comfortable Suit for hunt evil criminals',
      'size': ['38', '39', '40', '41'],
      'brand': 'Bruce Wayne',
      'categories': ['Super Heroes', 'Clothes', 'Batman'],
      'product_image_url': 'batman-suite'
    },
    {
      'sku': 'SPD-334',
      'price': 1.99,
      'name': 'Spidernet refill set',
      'description': 'To refill your net capabilities',
      'size': 'single',
      'brand': 'Peter Parker',
      'categories': ['Super Heroes', 'Spiderman', 'Accessories'],
      'product_image_url': 'http://cdn.gfg.com.br/spiderman/spidernet.jpg',
      'special_price': 1
    }
  ],
  selectedItem: null
}

/**
 * Following the duck pattern, the module.js file should export a reducer as a default function
 */
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        ...state,
        selectedItem: action.payload
      }
    default:
      return state
  }
}
