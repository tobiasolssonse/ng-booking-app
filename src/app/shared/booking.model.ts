
export class Booking {
    public room: string;
    public checkInDate: Date;
    public checkOutDate: Date;
    public personName: string;
    public personMail: string;

    constructor(room: string, inDate: Date, outDate: Date, name: string, mail: string) {
      this.room = room;
      this.checkInDate = inDate;
      this.checkOutDate = outDate;
      this.personName = name;
      this.personMail = mail;
    }
  }
