
export class Booking {
    public room: string;
    public checkInDate: string;
    public checkOutDate: string;
    public personName:string;
    public personMail: string;

    constructor(room: string, inDate: string, outDate: string, name: string, mail: string) {
      this.room = room;
      this.checkInDate = inDate;
      this.checkOutDate = outDate;
      this.personName = name;
      this.personMail = mail;
    }
  }
