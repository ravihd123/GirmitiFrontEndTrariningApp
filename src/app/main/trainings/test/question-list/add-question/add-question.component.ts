import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  @Output() backToQuestionList: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  backToQuestionsList() {
    this.backToQuestionList.emit();
  }

}
