export class Table {
    id: number;
    width: number;
    height: number;
    reserved: boolean;
  
    constructor(id: number, width: number, height: number, reserved: boolean) {
      this.id = id;
      this.width = width;
      this.height = height;
      this.reserved = reserved;
    }
  }
  