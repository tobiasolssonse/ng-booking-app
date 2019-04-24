
export class Room {
    public name: string;
    public description: string;
    public imagePath: string;
    public isSelected: boolean;

    constructor(name: string, desc: string, imagePath: string, isSelected: boolean) {
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
      this.isSelected = isSelected;
    }
  }
