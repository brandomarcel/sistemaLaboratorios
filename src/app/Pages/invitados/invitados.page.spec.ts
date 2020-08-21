import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvitadosPage } from './invitados.page';

describe('InvitadosPage', () => {
  let component: InvitadosPage;
  let fixture: ComponentFixture<InvitadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvitadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
