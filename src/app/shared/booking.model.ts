
export class Booking {
    public id: string;
    public room: string;
    public checkInDate: any;
    public checkOutDate: any;
    public personName: string;
    public personMail: string;

    constructor(id: string, room: string, inDate: any, outDate: any, name: string, mail: string) {
      this.id = id;
      this.room = room;
      this.checkInDate = inDate;
      this.checkOutDate = outDate;
      this.personName = name;
      this.personMail = mail;
    }
  }
