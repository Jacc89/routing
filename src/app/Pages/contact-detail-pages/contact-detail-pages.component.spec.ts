import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailPagesComponent } from './contact-detail-pages.component';

describe('ContactDetailPagesComponent', () => {
  let component: ContactDetailPagesComponent;
  let fixture: ComponentFixture<ContactDetailPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetailPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
