<template>
  <q-layout view="lHh Lpr lFf">
    <!-- #734f96 -->
    <!-- #bf94e4 -->
    <!-- #dda0dd -->
    <!-- #fbaed2 -->
    <!-- #ee82ee -->
    <q-header elevated style="background-color:#734f96" >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title style="color:white" >
         CB
        </q-toolbar-title>

        <div>
          <q-btn color="white" flat icon="account_circle" label="Login Admin" @click="login_admin = true" />

        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="white"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        Items
        </q-item-label>
        
        <q-item clickable to="/Products">
          <q-item-section top avatar>
            <q-avatar color="white" outlined text-color="grey"  icon="eco" />
          </q-item-section>
          <q-item-section>
            <q-item-label style="color: #734f96; font-size:20px">Products</q-item-label>
            <q-item-label caption lines="2">New</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <!-- <q-item-label caption>5 min ago</q-item-label>
            <q-icon name="star" color="yellow" /> -->
          </q-item-section>
        </q-item>

     
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-dialog v-model="login_admin" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-input v-model="username" type="text" label="Username" style="margin-bottom : 10px ; width:100%" />
          <q-input v-model="password" type="text" style="margin-bottom : 10px ; width:100%" label="Password" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'


export default {
  name: 'MainLayout',
  
  data () {
    return {
      leftDrawerOpen: false,
      login_admin : false,
      
      
    }
  },
  computed: {
    ...mapState([
      'category',
    ])
  },
  mounted () {

  },
  methods: {
    
    
  },
}
</script>
