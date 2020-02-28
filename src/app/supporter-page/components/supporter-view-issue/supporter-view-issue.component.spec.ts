import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupporterViewIssueComponent } from './supporter-view-issue.component';

describe('SupporterViewIssueComponent', () => {
  let component: SupporterViewIssueComponent;
  let fixture: ComponentFixture<SupporterViewIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupporterViewIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupporterViewIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
