//fixture allows me to interact with component's properties, 
//testbed enables configurations for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListComponent } from './data-list.component';

//here we start a test suite of datalistcomponent
describe('DataListComponent', () => {
  //variables component and fixture hold instances of datalist
  let component: DataListComponent;
  let fixture: ComponentFixture<DataListComponent>;

  //this block defines a setup step executed before each step in the suite
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataListComponent]
    });
    //creates instance of datalistcomponent
    fixture = TestBed.createComponent(DataListComponent);
    //retrieves the instance and assigns it to variable component
    component = fixture.componentInstance;
    //detects any changes and do the updates
    fixture.detectChanges();
  });

  //this method checks the datalist component instance declared in component variable is not truthy -> null or undefined.
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
