
export class Booking {
    public id?: string;
    public checkedin?: boolean;
    public room: string;
    public checkInDate: any;
    public checkOutDate: any;
    public personName: string;
    public personMail: string;

    constructor(id: string, checkedin: boolean, room: string, inDate: any, outDate: any, name: string, mail: string) {
      this.id = id;
      this.checkedin = checkedin;
      this.room = room;
      this.checkInDate = inDate;
      this.checkOutDate = outDate;
      this.personName = name;
      this.personMail = mail;
    }
  }
