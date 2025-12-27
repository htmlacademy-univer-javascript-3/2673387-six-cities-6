import { useState } from 'react';
import { SortOptions } from '../../const.ts';

type OfferSortProps = {
  activeOption: SortOptions;
  onSorterChange: (sorter: SortOptions) => void;
}

function OfferSort({ activeOption, onSorterChange }: OfferSortProps): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  const sortOptions = Object.values(SortOptions);

  function handleTypeClick() {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }

  function handleOptionClick(option: SortOptions) {
    onSorterChange(option);
    setIsOpened(false);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleTypeClick}
      >
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul
        className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}
      >
        {sortOptions.map((option) => (
          <li
            key={option}
            className={`places__option${option === activeOption ? ' places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default OfferSort;
