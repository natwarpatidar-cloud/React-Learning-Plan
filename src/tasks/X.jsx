import React, { useState, useDeferredValue } from 'react';

function SearchableList() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query); // Defer the query value

  // This component would ideally be memoized for performance
  const FilteredList = React.memo(({ query }) => {
    const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
    const filteredItems = items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    return (
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  });

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search items..."
      />
      {query !== deferredQuery && <p>Loading...</p>} {/* Indicate loading */}
      <FilteredList query={deferredQuery} /> {/* Use the deferred value */}
    </div>
  );
}