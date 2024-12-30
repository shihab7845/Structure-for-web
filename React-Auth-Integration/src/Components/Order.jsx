import React from 'react';

export default function Order() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <p className="text-lg font-semibold text-gray-800 mb-4">
        Here is the list of the items that you ordered:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  );
}
