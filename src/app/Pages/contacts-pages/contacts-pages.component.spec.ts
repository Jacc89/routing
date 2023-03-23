import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsPagesComponent } from './contacts-pages.component';

describe('ContactsPagesComponent', () => {
  let component: ContactsPagesComponent;
  let fixture: ComponentFixture<ContactsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
