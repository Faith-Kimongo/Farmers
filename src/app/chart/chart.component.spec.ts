import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponent } from './chart.component';

//we start test suite for chart component
describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  //this method is executed before each step in the suite
  beforeEach(() => {
    //here we specify the component to be tested
    TestBed.configureTestingModule({
      declarations: [ChartComponent]
    });
    //creates instance of chartcomponent
    fixture = TestBed.createComponent(ChartComponent);
    //retrieves the instance and assigns it to var component
    component = fixture.componentInstance;
    //detects any change and do updates
    fixture.detectChanges();
  });

  //checks the instance declare in the component variable is not null or undefined - truthy
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
