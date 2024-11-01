'use client';

import { useState } from 'react';
import ProductSelector from './ProductSelector';
import ChartDisplay from './ChartDisplay';
import { ProductProvider } from '../products/ProductContext';

export default function AnalyticsPage() {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [timeFilter, setTimeFilter] = useState<'month' | 'year'>('month');

  return (
    <ProductProvider>
      <div className="w-full h-full min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="w-full max-w-4xl">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-blue-800">
              Analytics de Productos
            </h1>
          </div>
          <div className="mb-4">
            <ProductSelector
              onSelectProduct={(productId) => setSelectedProductId(productId)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filtro de tiempo:
            </label>
            <select
              value={timeFilter}
              onChange={(e) =>
                setTimeFilter(e.target.value as 'month' | 'year')
              }
              className="border rounded px-2 py-1"
            >
              <option value="month">Mensual</option>
              <option value="year">Anual</option>
            </select>
          </div>
          <ChartDisplay productId={selectedProductId} timeFilter={timeFilter} />
        </div>
      </div>
    </ProductProvider>
  );
}
