import Title from '../common/Title/Title';
import List from '../common/lists/List'

// выводит список разделов виджета "Карта Германии"
export default function GermanMapWidget({ title, items }) {
  return (
    <div className="German-map-widget">
      <Title title={title} />
      <List items={items} />
    </div>
  );
}