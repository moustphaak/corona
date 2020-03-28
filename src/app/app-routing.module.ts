import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', loadChildren: './pages/posts/posts.module#PostsPageModule' },
  { path: 'posts/:id', loadChildren: './pages/post/post.module#PostPageModule' },
  { path: 'aboutme', loadChildren: './pages/aboutme/aboutme.module#AboutmePageModule' },
  { path: 'contacts', loadChildren: './pages/contacts/contacts.module#ContactsPageModule' },

  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./pages/post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'aboutme',
    loadChildren: () => import('./pages/aboutme/aboutme.module').then( m => m.AboutmePageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
