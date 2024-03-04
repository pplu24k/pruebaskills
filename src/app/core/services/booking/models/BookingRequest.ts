export class BookingRequest {
    private _startIn: Date;
    private _endIn: Date;
    private _table: number;
  
    // Constructor
    constructor(startIn: Date, endIn: Date, table: number) {
      this._startIn = startIn;
      this._endIn = endIn;
      this._table = table;
    }
  
    // Método para transformar la instancia a un objeto DTO
    toDTO(): any {
      return {
        startIn: this._startIn,
        endIn: this._endIn,
        table: this._table,
      };
    }
  }