import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { BmiComponent } from './bmi/bmi.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { ProductComponent } from './product/product.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CarsComponent } from './cars/cars.component';
import { MyntraAppComponent } from './myntra-app/myntra-app.component';
import { BikesComponent } from './bikes/bikes.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { RefreshComponent } from './refresh/refresh.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { GmailComponent } from './gmail/gmail.component';
import { CreateBikeComponent } from './create-bike/create-bike.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MemesComponent } from './memes/memes.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsTaskComponent } from './forms-task/forms-task.component';
import { ParantComponent } from './parant/parant.component';
import { ChildComponent } from './child/child.component';
import { CalculationComponent } from './calculation/calculation.component';
import { OperationsComponent } from './operations/operations.component';
import { RatingComponent } from './rating/rating.component';
import { TextAriaComponent } from './text-aria/text-aria.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ViewEditDeleteComponent } from './view-edit-delete/view-edit-delete.component';
import { TaskViewParentComponent } from './task-view-parent/task-view-parent.component';
import { ToDoTaskViewComponent } from './to-do-task-view/to-do-task-view.component';
import { VehicleDetailsPageComponent } from './vehicle-details-page/vehicle-details-page.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { PricePipe } from './price.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { ImpDirective } from './imp.directive';
import { CapitalDirective } from './capital.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    AboutComponent,
    DataBindingComponent,
    CalculatorComponent,
    BmiComponent,
    RectangleComponent,
    CircleComponent,
    ProductComponent,
    VehiclesComponent,
    CarsComponent,
    MyntraAppComponent,
    BikesComponent,
    AccountsComponent,
    RefreshComponent,
    FlipcartComponent,
    GmailComponent,
    CreateBikeComponent,
    CreateAccountComponent,
    MemesComponent,
    CreateUserComponent,
    FormsTaskComponent,
    ParantComponent,
    ChildComponent,
    CalculationComponent,
    OperationsComponent,
    RatingComponent,
    TextAriaComponent,
    ProductsComponent,
    NavComponent,
    CartComponent,
    ToDoComponent,
    ViewEditDeleteComponent,
    TaskViewParentComponent,
    ToDoTaskViewComponent,
    VehicleDetailsPageComponent,
    BikeDetailsComponent,
    PricePipe,
    PipeComponent,
    ImpDirective,
    CapitalDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
