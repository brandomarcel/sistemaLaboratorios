import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvitadonuevoPage } from './invitadonuevo.page';

describe('InvitadonuevoPage', () => {
  let component: InvitadonuevoPage;
  let fixture: ComponentFixture<InvitadonuevoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitadonuevoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvitadonuevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
