import './Ads.css';

// выводит рекламу, которая включает название, описание и опционально картинку
export default function Ads(props) {
  const { title, description, children } = props;

  return (
    <div className="Ads">
      {children}
      <h3 className="Ads-title">
        <a href="#0" className="Ads-title__link">
          {title}
        </a>
      </h3>
      <p className="Ads-description">
        {description}
      </p>
    </div>
  );
}