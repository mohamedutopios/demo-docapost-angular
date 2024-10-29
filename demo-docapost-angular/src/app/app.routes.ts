import { Routes } from '@angular/router';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { ParentComponent } from './pages/parent/parent.component';
import { LifecycleComponent } from './pages/lifecycle/lifecycle.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'presentation', component: PresentationComponent},
    {path: 'block', component: BlocksComponent },
    {path: 'pipe', component: PipesComponent},
    {path: 'formulaire', component: FormulaireComponent},
    {path: 'lifecycle', component: LifecycleComponent},
    {path: 'parent', component: ParentComponent},
    {path: '**', component: NotFoundComponent }


];
