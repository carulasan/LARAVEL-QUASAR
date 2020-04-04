<template>
 <div class="row content">

fadsfhksfhdk

  <div>
    <q-splitter
      v-model="splitterModel"
      style="height:1020px;"
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          style="color: #734f96;;"
        >
          <q-tab :name="item.title" icon="mail" :label="item.title" v-if="category" v-for="item in category" />
          
        </q-tabs>
      </template>

      <template v-slot:after  >
        <q-tab-panels
       
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel :name="item.title"  v-for="item in category" >
            <div class="text-h4 q-mb-md" style="color: #734f96;">{{ item.title }}</div>

            <div class="row">
              
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" v-for="item_products in item.products">
                      <div style="padding: 10px;">
                        <q-card class="my-card" style="width: 100%;" >
                          <div class="row">   
                                  
                                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                    <q-card class="my-card" style="height: 100%;">
                                      <img :src="item_products.image">
                                    </q-card>
                                  </div>
    
    
                                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                  <div style="text-align: center; font-size: 30px; color: #dda0dd;">Stocks</div>
                                  <div style="text-align: center; font-size: 25px; color: #734f96;">{{item_products.stocks}}</div>
                                  <br>
                                  <div style="text-align: center; font-size: 30px; font-weight: bold; color: white; background-color:#fbaed2 "><sup>&#8369</sup> 28</div>
                                  <q-btn color="blue"  flat style="width: 100%; font-size: 20px; " icon="touch_app" label="order now" @click="order_now(item_products)" />
                                  </div>
                            
                          </div>
                        </q-card> 
                      </div>
                  </div>
              
              
              
              
            </div>
            


          </q-tab-panel>

         
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>

  
  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
   


  <q-dialog full-width v-model="order_now_dialog"  >
    <q-card >
      <q-card-section>
        <div class="row">
          
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <q-card class="my-card">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
              
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <q-card class="my-card">
            
              <q-card-section>
                <div class="text-h6" style="color: #734f96;">Available Stocks <q-badge  style="color: white; background-color:#734f96 ;" :label="order_obj[0].stocks" /> </div>
                <div class="text-subtitle2" style="color: #dda0dd;"><sup>&#8369</sup>{{ order_obj[0].price }} {{ order_obj[0].price_dependent }} </div>
              </q-card-section>
              <q-card-section style="color: #fbaed2;">
                {{order_obj[0].details}}
              </q-card-section>
              <q-card-section>
                <h2 style="color: #734f96;">Customer Order Here!</h2>
                <q-input outlined style="margin-bottom: 10px;" v-model="order_obj[0].order_quantity" type="number" label="Enter Quantity" />
                <q-input outlined style="margin-bottom: 10px;" v-model="order_obj[0].order_note" type="textarea" label="Note" />
                <q-btn size="lg"  color="blue" style="margin-bottom: 10px;" icon="add_shopping_cart" label="add to cart" @click="add_to_cart(order_obj[0])" />
              </q-card-section>
            </q-card>
          </div>
          
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
  </div>
  
  
 </div>
</template>

<script>
  import { mapState } from 'vuex'
  
  import { mapActions } from 'vuex'
      
export default {
  name: 'PageIndex',
  data () {
    return {
      tab : 'mails',
       order_now_dialog : false,
       order_quantity : 0,
       order_note : '',
       order_obj : [
         {
             order_quantity : 0,
             order_note : '',
         }
       ],
       customer_order : [],
       
       
    }
  },
  watch: {
    
  },
  mounted () {
    if (this.category) {
      this.tab = this.category[0].title
    }
   
  },
  computed: {
      ...mapState([
        'category',
        'navigate_index',
       
      ])
    },
    methods: {
         
      
     
      order_now(obj) {
        this.order_obj = []
        this.order_obj.push(obj)
        this.order_obj[0].order_quantity = 0
        this.order_obj[0].order_note = ''
        this.order_now_dialog = true
      },
      add_to_cart(obj){
        console.log(obj)
        var current_purchase = obj
        var data = this.customer_order
          
          var is_exist = data.filter(
            (item)=>{
              return item.product_name == current_purchase.product_name && item.size == current_purchase.size
            }
          )
          if (is_exist.length >= 1) {
            alert('same selected products')
            //getindex remove push new
            this.customer_order.push(current_purchase)
            var index = this.customer_order.findIndex(x=>{ return x.product_name== current_purchase.product_name && x.size == current_purchase.size })
            alert(index)
            this.customer_order.splice(index,index)
          }else{
            this.customer_order.push(current_purchase)
          }
          console.log('customerorder')
          console.log(this.customer_order)
         
          
      },
      
    },
}
</script>
<style>
.content{
  padding : 10px;
}
</style>
