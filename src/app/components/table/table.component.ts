import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBody, IData, IDataList } from '../../models/list.model';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  public dataList$ = new Observable<IDataList>();
  @Input() dataTable: IData[] = [];
  @Input() body: IBody = {
    "User": "",
    "Password": "",
    "option": ""
  };

  @Output() labelText = new EventEmitter<string>();

  constructor(private service: DataService) { }

  ngOnInit() {
    this.body.option = "instituciones";
  }

  emitLabelText(value: string) {
    this.labelText.emit(value);
  }

  private getData(body: IBody) {
    this.dataList$ = this.service.getData(body);
    this.dataList$.forEach((item) => {
      this.dataTable = item.data;
    })

  }

  public searchData(item: IData) {
    switch (this.body.option) {
      case "municipios":
        this.body.CodMun = item.dane;
        this.getData(this.body);
        this.emitLabelText(this.body.option);
        this.body.option = "instituciones";
        break;
      case "instituciones":
        this.body.CodMun = item.dane;
        this.getData(this.body);
        this.emitLabelText(this.body.option);
        this.body.option = "sedes";
        break;
      case "sedes":
        this.body.CodInst = item.dane;
        this.getData(this.body);
        this.emitLabelText(this.body.option);
        this.body.option = "grupos";
        break;
      case "grupos":
        console.log(this.body);

        this.body.CodSede = item.dane;
        this.getData(this.body);
        this.emitLabelText(this.body.option);
        this.body.option = "infoGrupo";
        break;
        case "infoGrupo":
          console.log(item);

          this.body.IdGrupo = item.id;
          this.getData(this.body);
          this.emitLabelText("Detalle del grupo");
        break;

      default:
        break;
    }
  }
}
