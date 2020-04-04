import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */


 

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state : {
      name : 'fdfdf',
      navigate_index :0,
      category_list : [],
      
      
      category: [
        {
                  id : 1,
                  title: 'Mask',
                  caption: 'New',
                  icon: 'ico',
                  // link: 'https://quasar.dev'
                  products : [
                          {
                            id : 1,
                            image : 'https://cdn.pixabay.com/photo/2020/03/22/16/18/bread-4957679_960_720.jpg',
                            price : 50.00,
                            stocks : 29,
                            product_name : 'Color Blue Mask',
                            details : 'fdfdfdfd',
                            price_dependent : 'Per Kilo',
                            size : '',
                          
                          },
                          {
                            id : 1,
                            image : 'https://cdn.pixabay.com/photo/2020/03/22/16/18/bread-4957679_960_720.jpg',
                            price : 50.00,
                            stocks : 29,
                            product_name : 'Color Blue Mask',
                            details : 'fdfdfdfd',
                            price_dependent : 'Per Kilo',
                            size : '',
                          
                          }
                  ],
        },
        {
                  id : 2,
                  title: 'Fruits',
                  caption: 'New',
                  icon: 'ico',
                  // link: 'https://quasar.dev'
                  products : [
                        {
                          id : 1,
                          image : 'https://cdn.pixabay.com/photo/2020/03/22/16/18/bread-4957679_960_720.jpg',
                          price : 50.00,
                          stocks : 28,
                          details : 'fdfdfdfd',
                          price_dependent : 'Per Kilo',
                          product_name : 'Mango',
                          size : '',
                        
                        }
                  ],
        },
     
    ]
    },
    mutations: {
      
    },

    actions: {
     
    },
    modules: {
      
     
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
