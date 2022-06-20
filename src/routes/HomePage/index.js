import { useNavigate } from "react-router-dom";

import classes from "./index.module.css";

const HomePage = () => {
  const navigate = useNavigate()

  const btnClickHandler = () => {
    navigate('/products')
  }
  return (
    <div className={classes.module}>
      <div className={classes.container}>
        <header>
          <h1>React Restaurant</h1>
        </header>

        <section className={classes["description-section"]}>
          <div>
            <span>Get all the items in the menu Online</span>
            <button onClick={btnClickHandler}>get here</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
