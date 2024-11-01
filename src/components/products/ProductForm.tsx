import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useProductContext } from './ProductContext';

type Props = {
  initialProduct?: { name: string; stock: number; price: number };
  onSubmit: (product: { name: string; stock: number; price: number }) => void;
  onClose: () => void;
};

export default function ProductForm({
  initialProduct,
  onSubmit,
  onClose,
}: Props) {
  const [product, setProduct] = useState(
    initialProduct || { name: '', stock: 0, price: 0 }
  );

  return (
    <div>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Nombre
          </Label>
          <Input
            id="name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="stock" className="text-right">
            Stock
          </Label>
          <Input
            id="stock"
            type="number"
            value={product.stock}
            onChange={(e) =>
              setProduct({ ...product, stock: parseInt(e.target.value) })
            }
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="price" className="text-right">
            Precio
          </Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: parseFloat(e.target.value) })
            }
            className="col-span-3"
          />
        </div>
      </div>
      <Button type="submit" onClick={() => onSubmit(product)}>
        Guardar Producto
      </Button>
      <Button variant="ghost" onClick={onClose}>
        Cancelar
      </Button>
    </div>
  );
}
