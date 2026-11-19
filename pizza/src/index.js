import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Challange from "./Challange";
const pizzaData = [
  ///// dummy data ....
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

///// component  ::
function App() {
  ///// parent componenet
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const mystyle = {
  //   color: "red",
  //   fontSize: "48px",
  //   textTransform: "uppercase",
  // };
  const mystyle = {};
  return (
    <header className="header">
      <h1 style={mystyle}>Fast React Pizza Co.</h1>
    </header>
  );
}

////// 0 ; undefined ; null , NaN ; false
function Menu() {
  // const pizzas = pizzaData;
  const pizzas = [];
  const numPizzas = pizzas.length; //// 0
  return (
    <main className="menu">
      <h2>our menu</h2>
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((obj) => (
            <Pizza pizzaObj={obj} key={obj.name} />
          ))}
        </ul>
      )} */}

      {/* //// conditional rendering with ternary operator ::: */}

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((obj) => (
            <Pizza pizzaObj={obj} key={obj.name} />
          ))}
        </ul>
      ) : (
        <p>we're still working on our menu . Please come back later</p>
      )}

      {/* 
      <Pizza
        name="pizza spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={12}
      />

      <Pizza
        name="pizza Focaccia"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/Focaccia.jpg"
        price={22}
      /> */}
    </main>
  );
}

function Pizza(props) {
  console.log("pizza props :", props);
  return (
    <li className="pizza">
      {/* <img src="pizzas/spinaci.jpg" alt="" /> */}
      <img src={props.pizzaObj.photoName} alt="" />
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      <span>{props.pizzaObj.price + 3}</span>
    </li>
  );
}

/////// conditional rendering with && ::

function Footer(props) {
  const hour = new Date().getHours(); ///20
  console.log(hour);
  console.log(hour);
  const openHour = 12;
  const closeHour = 18;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open ");

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}. We're currently open */}
      <div className="order">
        {isOpen && (
          <p>We're open until {closeHour}:00 Come visit us or order online</p>
        )}
        <button className="btn">order</button>
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    {/* <Challange /> */}
  </React.StrictMode>,
);
