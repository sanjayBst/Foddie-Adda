import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Veg-Burger",
    description: "One aloo tikki, two sauce and special masala ",
    price: 40.20,
  },
  {
    id: "m2",
    name: "Paneer Momos",
    description: "A full plate of momo with spicy schezwan chutney",
    price: 120.00,
  },
  {
    id: "m3",
    name: "Mozzarella cheese pizza",
    description: "Mozzarella cheese with multi-stuffing",
    price: 179,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 149,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 79,
  },
];

const AvailableMeals = () => {
  const MealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
