export class Room {
    public id?: string;
    public name: string;
    public description: string;
    public imagePath: string;
    constructor(id: string,name: string, desc: string, imagePath: string) {
      this.id = id;
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
    }
  }
