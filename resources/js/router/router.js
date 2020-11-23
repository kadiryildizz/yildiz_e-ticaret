import Vue from 'vue'
import VueRouter from 'vue-router'
import SiteAyarlari from '../components/admin/SiteAyarlari'
import SiteAdresler from '../components/admin/SiteAdresler'
import SiteUyeler from '../components/admin/SiteUyeler'




Vue.use(VueRouter);


 



  const routes = [
   { path: '/admin/site-ayarlari', component: SiteAyarlari, name:'site-ayarlari' },
   { path: '/admin/site-adresler', component: SiteAdresler, name:'site-adresler' },
   { path: '/admin/site-uyeler', component: SiteUyeler, name:'site-uyeler' },

   
 
 

 
  ]

 const router = new VueRouter({
    mode: 'history',
    routes
  })

  export default router


