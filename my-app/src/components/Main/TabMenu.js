import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import Container from "../UI/Container";
import classes from "./TabMenu.module.css";
import TabMenuItem from "./TabMenuItem";
import Esspresso from "../../assets/espresso.webp";
import Macchiato from "../../assets/macchiato.jpg";
import Americano from "../../assets/Americano.avif";
import Latte from "../../assets/Latte.webp";
import Mocha from "../../assets/Mocha.jpg";
import Caramel from "../../assets/Caramel_Macchiato.jpg";
import Cortado from "../../assets/Cortado.png";
import Capu from "../../assets/Capuchino.webp";
import Flat_White from "../../assets/Flat_White.jpg";
import Iced_Latte from "../../assets/ice-latte.jpg";
import Iced_Mocha from "../../assets/ice-mocha.jpg";
import Iced_Caramel from "../../assets/ice-caramel-macchiato.jpg";
import Iced_Americano from "../../assets/Ice_Americano.jpg";
const espresso = [
  {
    id: "e1",
    name: "Esspresso",
    price: 1.99,
    img: Esspresso,
  },
  {
    id: "e2",
    name: "Americano",
    price: 3.99,
    img: Americano,
  },
  {
    id: "e3",
    name: "Macchiato",
    price: 7.99,
    img: Macchiato,
  },
];

const Coffee = [
  {
    id: "c1",
    name: "Latte",
    price: 11.59,
    img: Latte,
  },
  {
    id: "c2",
    name: "Mocha",
    price: 14.99,
    img: Mocha,
  },
  {
    id: "c3",
    name: "Caramel Macchiato",
    price: 14.99,
    img: Caramel,
  },
  {
    id: "c4",
    name: "Cortado",
    price: 9.59,
    img: Cortado,
  },
  {
    id: "c5",
    name: "Capuchino",
    price: 9.59,
    img: Capu,
  },
  {
    id: "c6",
    name: "Flat White",
    price: 10.99,
    img: Flat_White,
  },
];

const iceCoffe = [
  {
    id: "ic1",
    name: "Iced Latte",
    price: 12.99,
    img: Iced_Latte,
  },
  {
    id: "ic2",
    name: "Iced Mocha",
    price: 16.99,
    img: Iced_Mocha,
  },
  {
    id: "ic3",
    name: "Iced Caramel Macchiato",
    price: 18.29,
    img: Iced_Caramel,
  },
  {
    id: "ic4",
    name: "Iced Americano",
    price: 9.89,
    img: Iced_Americano,
  },
];
const TabMenu = () => {
  return (
    <Container className={classes.container}>
      <Tabs className={classes.tabs}>
        <TabList className={classes.tablist}>
          <Tab selectedClassName={classes.active} className={classes.tab}>
            Espresso
          </Tab>
          <Tab selectedClassName={classes.active} className={classes.tab}>
            Warm Coffee
          </Tab>
          <Tab selectedClassName={classes.active} className={classes.tab}>
            Ice Coffee
          </Tab>
        </TabList>
        <TabPanel className={classes.panel}>
          <ul>
            {espresso.map((item) => (
              <TabMenuItem
                id={item.id}
                key={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
              />
            ))}
          </ul>
        </TabPanel>
        <TabPanel className={classes.panel}>
          <ul>
            {Coffee.map((item) => (
              <TabMenuItem
                id={item.id}
                key={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
              />
            ))}
          </ul>
        </TabPanel>
        <TabPanel className={classes.panel}>
          <ul>
            {iceCoffe.map((item) => (
              <TabMenuItem
                id={item.id}
                key={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
              />
            ))}
          </ul>
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default TabMenu;
