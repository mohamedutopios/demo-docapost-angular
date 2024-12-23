import { Routes } from '@angular/router';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { ParentComponent } from './pages/parent/parent.component';
import { LifecycleComponent } from './pages/lifecycle/lifecycle.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './utils/guard/auth.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'presentation', component: PresentationComponent},
    {path: 'block', component: BlocksComponent },
    {path: 'pipe', component: PipesComponent, canActivate: [authGuard]},
    {path: 'formulaire', component: FormulaireComponent},
    {path: 'lifecycle', component: LifecycleComponent},
    {path: 'parent', component: ParentComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/:id', component: ProductDetailsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'users', component: UserListComponent, children : [
        {path: 'create', component: UserCreateComponent},
        {path: 'edit/:id', component: UserCreateComponent}
    ]},
    {path: '**', component: NotFoundComponent }


];
