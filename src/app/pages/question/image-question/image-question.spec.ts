import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageQuestion } from './image-question';

describe('ImageQuestion', () => {
  let component: ImageQuestion;
  let fixture: ComponentFixture<ImageQuestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageQuestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageQuestion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
