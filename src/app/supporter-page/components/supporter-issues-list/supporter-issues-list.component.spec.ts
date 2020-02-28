import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupporterIssuesListComponent } from './supporter-issues-list.component';

describe('SupporterIssuesListComponent', () => {
  let component: SupporterIssuesListComponent;
  let fixture: ComponentFixture<SupporterIssuesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupporterIssuesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupporterIssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
