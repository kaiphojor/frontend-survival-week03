import type Restaurant from '../types/Restaurant';
import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';

type FilterableRestaurantMenuProps = {
  restaurants : Restaurant[];
}

export default function FilterableRestaurantMenu(
  { restaurants }: FilterableRestaurantMenuProps,
) {
  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <SearchBar />
      <RestaurantTable restaurants={restaurants} />
    </div>
  );
}