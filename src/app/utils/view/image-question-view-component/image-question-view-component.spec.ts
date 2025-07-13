import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageQuestionViewComponent } from './image-question-view-component';

describe('ImageQuestionViewComponent', () => {
  let component: ImageQuestionViewComponent;
  let fixture: ComponentFixture<ImageQuestionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageQuestionViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageQuestionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
