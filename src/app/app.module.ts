import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AocAppComponent } from './aoc-app.component';
import { Aoc2019DayOneComponent } from './Aoc2019/DayOne/aoc2019-dayone.component';
import { Aoc2019DayTwoComponent } from './Aoc2019/DayTwo/aoc2019-daytwo.component';
import { PuzzleInputService } from './Aoc2019/Services/PuzzleInputService';
import { FuelCalculationService } from './Aoc2019/Services/FuelCalculationService';
import { IntComputingService } from './Aoc2019/Services/IntComputingService';
import { IntProgramService } from './Aoc2019/Services/IntProgramService';
import { GravityAssistService } from './Aoc2019/Services/GravityAssistService';
import { AsyncService } from './Aoc2019/Services/AsyncService';
import { TestComponent } from './Aoc2019/DayThree/aoc2019-daythree.component';
import { LoaderComponent } from './Aoc2019/Common/aoc-loader.component';
import { NavBarComponent } from './nav/navbar.component';
import { YearOverviewComponent } from './aoc-overview/aoc-year-overview.component';
import { DayThumbnailComponent } from './aoc-overview/aoc-day-thumb.component';
import { SolutionService } from './Aoc2019/Services/solutions.service';
import { DayDetailsComponent } from './aoc-overview/aoc-days/aoc-day.component';


@NgModule({
  declarations: [
    AocAppComponent,
    LoaderComponent,
    NavBarComponent,
    TestComponent,
    Aoc2019DayOneComponent,
    Aoc2019DayTwoComponent,
    YearOverviewComponent,
    DayThumbnailComponent,
    DayDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SolutionService,
    PuzzleInputService,
    FuelCalculationService,
    GravityAssistService,
    IntComputingService,
    IntProgramService,
    AsyncService],
  bootstrap: [AocAppComponent]
})
export class AppModule { }
