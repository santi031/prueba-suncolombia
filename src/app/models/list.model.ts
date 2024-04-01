export interface IDataList {
  login: string;
  option: string;
  data: IData[]
}

export interface IData {
  id?: string;
  nombre?: string;
  dane?: string;
  sede?: string;
  institución?: string;
  municipio?: string;
  numGrupo?: string;
}

export interface IBody {
  User: string;
  Password: string;
  option: string;
  CodMun?: string;
  CodInst?: string;
  CodSede?: string;
  IdGrupo?: string;
}
