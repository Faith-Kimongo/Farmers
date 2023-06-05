import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

//test suite starts here where TestBed.configureTestingModule takes the modules and components to be tested
describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  //this code block checks whether the appcomponent is created successfully, assigned to app var and it should not be null and undefined
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  //checks whether appcomponent has title farmers-app , assigns this to app and ensures it is equal to string farmers-app
  it(`should have as title 'farmers-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('farmers-app');
  });

  // this code block ensures title is rendered
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('farmers-app app is running!');
  });
});
