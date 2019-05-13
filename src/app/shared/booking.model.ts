
export class Booking {
    public room: string;
    public checkInDate: any;
    public checkOutDate: any;
    public personName: string;
    public personMail: string;

    constructor(room: string, inDate: any, outDate: any, name: string, mail: string) {
      this.room = room;
      this.checkInDate = inDate;
      this.checkOutDate = outDate;
      this.personName = name;
      this.personMail = mail;
    }
  }
