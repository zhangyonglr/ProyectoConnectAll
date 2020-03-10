import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpostComponent } from './addpost/addpost.component';
import { HeaderComponent } from './header/header.component';
import { MycategoriesComponent } from './mycategories/mycategories.component';
import { PostComponent } from './post/post.component';
import { TrenddingComponent } from './trendding/trendding.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home', component: PostComponent
  },
  { path: 'addpost', component: AddpostComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'mycategories', component: MycategoriesComponent },
  { path: 'trendding', component: TrenddingComponent },
  { path: 'user', component: UserComponent },
  { path: '**', redirectTo: 'Home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
