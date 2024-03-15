import { useEffect } from 'react';
import style from './home.module.scss';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    const wrapper = document.getElementById('wrapper');
    if (!wrapper) return;
    const elements = Array.from(wrapper.children);
    elements.forEach((item) => {
      wrapper.append(item.cloneNode(true));
    });
    console.log(wrapper);
  }, []);

  return (
    <main className={style.main}>
      <header className={style.header}>
        <h1 className={style.firstH1}>
          File<span>h</span>ub
        </h1>
        <p className={style.first_paragraph}>
          <span>
            File<span>h</span>ub
          </span>{' '}
          is a Portfolio project that has been made only to show case experience
          in web development using a set of dev Tools
        </p>
        <p className={style.second_paragraph}>
          we don't recommend <span>downloading</span> files recklessly with out
          knowing the Origin
        </p>
      </header>
      <div className={style.slider} id="slider">
        <ul className={style.wrapper} id="wrapper">
          <li>Zod</li>
          <li>NodeJs/Express</li>
          <li>Mongoose</li>
          <li>React-Query</li>
          <li>React Hook Form</li>
          <li>React Router DOM</li>
        </ul>
      </div>
      <Link to={'/main'} className={style.getStarted}>
        Get Started
      </Link>
    </main>
  );
}

export default Home;
