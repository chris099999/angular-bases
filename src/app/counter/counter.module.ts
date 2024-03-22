import { NgModule } from "@angular/core";
import { CounterComponer } from "./components/counter/counter.component";


@NgModule({
  declarations :[
    CounterComponer
  ],
  exports:[
    CounterComponer
  ]
}
  )
export class CounterModule{}
