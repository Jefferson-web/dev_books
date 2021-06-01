import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { SearchProductComponent } from "./search-product/search-product.component";

const ROUTES_APP: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchProductComponent},
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: '**', component: NotfoundComponent}
];

export default ROUTES_APP;