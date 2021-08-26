import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QtddViwerPage } from './qtdd-viwer.page';

describe('QtddViwerPage', () => {
  let component: QtddViwerPage;
  let fixture: ComponentFixture<QtddViwerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QtddViwerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QtddViwerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
