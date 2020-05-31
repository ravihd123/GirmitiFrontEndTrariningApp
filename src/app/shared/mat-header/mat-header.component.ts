import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommentStmt } from '@angular/compiler';

@Component({
  selector: 'app-mat-header',
  templateUrl: './mat-header.component.html',
  styleUrls: ['./mat-header.component.scss']
})
export class MatHeaderComponent implements OnInit {

  @Input() headerLabel: string;
  @Input() isAddBtnVisible: boolean;
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Input() headerContent: string;
  @Input() alignHeader: string;
  alignStart: boolean;

  constructor() { }

  ngOnInit(): void {
    this.alignStart = false;
    console.log(this.alignHeader)
    if (this.alignHeader === 'start') {
      this.alignStart = true;
    }
  }
  addClick() {
    this.add.emit();
  }
}
