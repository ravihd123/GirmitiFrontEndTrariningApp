import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MatTableConfig } from './mat-table.module';
import { Utils } from '../utilities/utils';




@Component({
  selector: 'app-custom-mat-table',
  templateUrl: './custom-mat-table.component.html',
  styleUrls: ['./custom-mat-table.component.scss']
})
export class CustomMatTableComponent implements OnInit, OnChanges {
  dataSource: any[];
  tableConfig: MatTableConfig
  showTrainingTab: boolean;


  @Input() tableData: any[];
  @Input() tableConfiguration; MatTableConfig
  @Output() selectedRow: EventEmitter<any> = new EventEmitter();
  @Output() selectedOpt: EventEmitter<any> = new EventEmitter();
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

  @Output() add: EventEmitter<any> = new EventEmitter()



  constructor() { }

  ngOnInit(): void {
    console.log(this.dataSource);
    this.showTrainingTab = true;
    this.dataSource = this.tableData;
    this.tableConfig = this.tableConfiguration;
  }



  ngOnChanges(changes: SimpleChanges): void {
    if (!Utils.IS_UNDEFINED_OR_NULL(changes.tableData.currentValue)) {
      this.dataSource = changes.tableData.currentValue;
    }
  }

  selectedOption(row, rowAction) {
    row['action'] = rowAction;
    this.selectedOpt.emit(row);

  }
  onRowClicked(row) {
    this.selectedRow.emit(row);
  }
  buttonClick(event) {
    this.buttonClicked.emit(event);
  }
  addbuttonClick(row) {
    this.add.emit(row);
  }

  checkIfvideoFile(row): boolean {
    return row.attachment.mimetype.includes('video') ? true : false;
  }
  checkIfimageFile(row): boolean {
    return row.attachment.mimetype.includes('image') ? true : false;
  }
  checkIfpdfFile(row): boolean {
    return row.attachment.mimetype.includes('pdf') ? true : false;
  }


}
