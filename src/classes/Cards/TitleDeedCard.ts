import Card from "./Card";
import CardType from "./CardType";
import TitleDeedGroup from "./TitleDeedGroup";

class TitleDeedCard extends Card {
  name: string;
  group: TitleDeedGroup;
  developmentCost: number;
  rent: number;
  house1: number;
  house2: number;
  house3: number;
  house4: number;
  hotel: number;
  mortgage: number;

  constructor(
    cardType: CardType,
    name: string,
    group: TitleDeedGroup,
    developmentCost: number,
    rent: number,
    house1: number,
    house2: number,
    house3: number,
    house4: number,
    hotel: number,
    mortgage: number
  ) {
    super(cardType);

    this.name = name;
    this.group = group;
    this.developmentCost = developmentCost;
    this.rent = rent;
    this.house1 = house1;
    this.house2 = house2;
    this.house3 = house3;
    this.house4 = house4;
    this.hotel = hotel;
    this.mortgage = mortgage;
  }
}

export default TitleDeedCard;
