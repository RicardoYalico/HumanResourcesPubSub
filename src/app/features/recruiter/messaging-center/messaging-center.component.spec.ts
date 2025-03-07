import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingCenterComponent } from './messaging-center.component';

describe('MessagingCenterComponent', () => {
  let component: MessagingCenterComponent;
  let fixture: ComponentFixture<MessagingCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagingCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
