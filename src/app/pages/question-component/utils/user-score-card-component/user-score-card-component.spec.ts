import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserScoreCardComponent } from './user-score-card-component';

describe('UserScoreCardComponent', () => {
  let component: UserScoreCardComponent;
  let fixture: ComponentFixture<UserScoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserScoreCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
