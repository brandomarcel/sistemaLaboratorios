import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LisDocentePage } from './lis-docente.page';

describe('LisDocentePage', () => {
  let component: LisDocentePage;
  let fixture: ComponentFixture<LisDocentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisDocentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LisDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
