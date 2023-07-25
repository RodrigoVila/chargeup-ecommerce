import { useIntl } from 'react-intl';

type ProductSearchBarProps = {
  setSearchValue: (value: string) => void;
};

export const ProductSearchBar = ({ setSearchValue }: ProductSearchBarProps) => {
  const { formatMessage } = useIntl();
  return (
    <div className="flex flex-1 w-full max-w-2xl px-2 text-black lg:px-0">
      <input
        type="search"
        placeholder={formatMessage({ id: 'PRODUCTS_SEARCH_BAR' })}
        // value={value}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full px-2 py-2 pl-4 text-lg leading-normal transition border border-transparent rounded appearance-none focus:border-gray-400 focus:outline-none"
      />
    </div>
  );
};
