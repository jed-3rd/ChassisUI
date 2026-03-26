import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ButtonComponent,
  InputComponent,
  CardComponent,
  CheckboxComponent,
  SwitchComponent,
  SelectComponent,
  DialogComponent,
  BadgeComponent,
  TooltipComponent,
  RadioComponent,
  RadioGroupComponent,
} from './components.js';

const COMPONENTS = [
  ButtonComponent,
  InputComponent,
  CardComponent,
  CheckboxComponent,
  SwitchComponent,
  SelectComponent,
  DialogComponent,
  BadgeComponent,
  TooltipComponent,
  RadioComponent,
  RadioGroupComponent,
];

@NgModule({
  imports: [...COMPONENTS],
  exports: [...COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChassisModule {}
