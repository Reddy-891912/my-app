import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { ProductComponent } from './product/product.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CarsComponent } from './cars/cars.component';
import { MyntraAppComponent } from './myntra-app/myntra-app.component';
import { BikesComponent } from './bikes/bikes.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RefreshComponent } from './refresh/refresh.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { GmailComponent } from './gmail/gmail.component';
import { CreateBikeComponent } from './create-bike/create-bike.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MemesComponent } from './memes/memes.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsTaskComponent } from './forms-task/forms-task.component';
import { ParantComponent } from './parant/parant.component';
import { CalculationComponent } from './calculation/calculation.component';
import { RatingComponent } from './rating/rating.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ViewEditDeleteComponent } from './view-edit-delete/view-edit-delete.component';
import { TaskViewParentComponent } from './task-view-parent/task-view-parent.component';
import { ToDoTaskViewComponent } from './to-do-task-view/to-do-task-view.component';
import { VehicleDetailsPageComponent } from './vehicle-details-page/vehicle-details-page.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard], children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'dataBinding', component: DataBindingComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'rectangle', component: RectangleComponent },
      { path: 'circle', component: CircleComponent },
      { path: 'bmi', component: BmiComponent },
      { path: 'products', component: ProductComponent },
      { path: 'vehicles', component: VehiclesComponent },
      { path: 'vehicleDetails/:id', component: VehicleDetailsPageComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'myntra', component: MyntraAppComponent },
      { path: 'bikes', component: BikesComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'refresh', component: RefreshComponent },
      { path: 'flipcart', component: FlipcartComponent },
      { path: 'gmail', component: GmailComponent },
      { path: 'createBike', component: CreateBikeComponent },
      { path: 'createAccount', component: CreateAccountComponent },
      { path: 'memes', component: MemesComponent },
      { path: 'createUser', component: CreateUserComponent },
      { path: 'formsTask', component: FormsTaskComponent },
      { path: 'parant', component: ParantComponent },
      { path: 'calculation', component: CalculationComponent },
      { path: 'rating', component: RatingComponent },
      { path: 'productSibling', component: ProductsComponent },
      { path: 'nav', component: NavComponent },
      { path: 'cart', component: CartComponent },
      { path: 'toDo', component: ToDoComponent },
      { path: 'viewEditDelete', component: ViewEditDeleteComponent },
      { path: 'taskView', component: ToDoTaskViewComponent },
      { path: 'taskViewParent', component: TaskViewParentComponent },
      { path: 'bikeDetails/:id', component: BikeDetailsComponent },
      { path: 'edit-bike/:id', component: CreateBikeComponent },
      { path: 'pipe', component: PipeComponent },
    ]
  },
  { path: '', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
