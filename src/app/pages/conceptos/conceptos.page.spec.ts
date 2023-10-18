import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConceptosPage } from './conceptos.page';

describe('ConceptosPage', () => {
  let component: ConceptosPage;
  let fixture: ComponentFixture<ConceptosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConceptosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
