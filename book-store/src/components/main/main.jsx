import React, { useState } from "react";
import './main.css';

const Card = ({ menu }) => {
  const [modalActive, setModalActive] = useState(false);
  const { probel, image, title, price, description } = menu;

  return (
    <div className="block">
      <main>
        <div className="menu-card">
          <img className="img" src={image} alt={title} />
          <h4 className="title">{title}</h4>
          <p style={{ fontSize: '10px', color: 'white' }}>{probel}</p>
          <p className="price"><strong>Цена:</strong> {price}</p><br></br>
          <button onClick={() => setModalActive(true)} id="resept" className="btn">
            ПОДРОБНЕЕ
          </button>
          {modalActive &&
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => setModalActive(false)}>&times;</span>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          }
        </div>
      </main>
    </div>
  )
}

var Main = () => {
  const [showProducts, setShowProducts] = useState(false);

  var book = [
    {
      id: 1,
      image: 'https://i.pinimg.com/564x/ff/5b/cd/ff5bcd269468ad8f959d02adf89d58b6.jpg',
      title: 'ТИБЕТ',
      height: '430px',
      price: '330 ₽',
      description: 'Описание ТИБЕТ'
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/564x/0b/ee/96/0bee96ef6855fdb75619db9efb9ff277.jpg',
      title: 'ДУМАЙ КАК ИНЖИНЕР',
      probel: 'ehrvbehvb',
      price: '570 ₽',
      description: 'Описание ДУМАЙ КАК ИНЖИНЕР'
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/564x/f3/a1/3f/f3a13ff137f47c257f4dce1b9529a30e.jpg',
      title: 'СНЫ КТУЛХУ',
      price: '370 ₽',
      description: 'Описание СНЫ КТУЛХУ'
    },
  ];

  return (
    <div className="btn1">
      {!showProducts && <button onClick={() => setShowProducts(true)}>Показать товары</button>}
      {showProducts &&
        <div className="menu-catalog">
          {book.map((menu) => (
            <Card key={menu.id} menu={menu} />
          ))}
          <LoginControl />
        </div>
      }
    </div>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export default Main;