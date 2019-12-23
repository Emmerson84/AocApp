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


@NgModule({
  declarations: [
    AocAppComponent,
    Aoc2019DayOneComponent,
    Aoc2019DayTwoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PuzzleInputService,
    FuelCalculationService,
    GravityAssistService,
    IntComputingService,
    IntProgramService],
  bootstrap: [AocAppComponent]
})
export class AppModule { }
