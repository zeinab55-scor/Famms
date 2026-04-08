import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { About } from '../components/about/about';
import { Testminiol } from '../components/testminiol/testminiol';
import { Mensection } from '../components/mensection/mensection';
import { Wemonsection } from '../components/wemonsection/wemonsection';
import { Product } from '../components/childsection/product';
import { Blog } from '../components/blog/blog';
import { Contact } from '../components/contact/contact';
import { Cart } from '../components/cart/cart';
import { Productdetails } from '../components/productdetails/productdetails';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    
    {path:'about',component:About},
    {path:'test',component:Testminiol},
    {path:'men',component:Mensection},
    {path:'wemon',component:Wemonsection},
    {path:'child',component:Product},
   { path: 'productdetails/:id', component:Productdetails},
{path:'blog',component:Blog},
    {path:'contact',component:Contact},
    {path:'cart',component:Cart},
    {path:'***',redirectTo:'home'}

];
