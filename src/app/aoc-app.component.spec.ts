import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AocAppComponent } from './aoc-app.component';

describe('AocAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AocAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AocAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Aoc2019'`, () => {
    const fixture = TestBed.createComponent(AocAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Aoc2019');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AocAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Aoc2019 app is running!');
  });
});
