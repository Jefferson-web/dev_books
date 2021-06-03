import { Routes } from "@angular/router";
import { TestComponent } from "./components/test/test.component";
import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { SearchProductComponent } from "./search-product/search-product.component";

const ROUTES_APP: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchProductComponent},
    {path: 'test', component: TestComponent},
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: '**', component: NotfoundComponent}
];

export default ROUTES_APP;