import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintQuestionViewComponent } from './hint-question-view-component';

describe('HintQuestionViewComponent', () => {
  let component: HintQuestionViewComponent;
  let fixture: ComponentFixture<HintQuestionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HintQuestionViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HintQuestionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
