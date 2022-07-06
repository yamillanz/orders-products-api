export interface Orders {
  idOrder: number;
  idUser: number;
  orderNumber: number;
  dateTime: Date;
  providerName: string;
  dateCreated: Date;
  observation: string;
  totalValue: number;
  status: boolean;
}

export interface OrderDTO extends Partial<Orders>  {}
