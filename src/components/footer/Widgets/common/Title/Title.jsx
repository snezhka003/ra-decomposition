import './Title.css';

// выводит заголовки виджетов
export default function Title({ title }) {
  return (
    <h3 className="Widget-title">
      <a href="#0" className="Widget-title__link">
        {title}
      </a>
    </h3>
  );
}