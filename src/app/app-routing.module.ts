import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPageComponent } from './start-page/start-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const appRoutes: Routes = [
	{ path:'',component: StartPageComponent},
	{ path:'login',component: LoginComponent},
	{ path:'signup',component: SignUpComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
