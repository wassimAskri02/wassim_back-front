import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import {HttpClientModule} from "@angular/common/http";
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: BlogPostComponent },
  { path: 'create', component: CreatePostComponent },
  { path: 'sign-in', component: SignInComponent },
  // other routes...
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogPostComponent,
    CreatePostComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Correctly configure routing
    FormsModule,
    HttpClientModule //Http client imported
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
