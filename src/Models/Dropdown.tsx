export interface DropdownList
{
  Key:string;
  Value:string;
}

export interface DropdownSource {
  Data: DropdownList[];
  Text:string;
  Id:string;
  onChange:(value:string) => void;
}
