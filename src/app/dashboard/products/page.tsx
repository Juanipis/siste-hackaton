'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import ProductTable from '@/components/products/ProductTable';
import { ProductProvider } from '@/components/products/ProductContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import ProductForm from '@/components/products/ProductForm';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function Page() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  return (
    <ProductProvider>
      <DashboardLayout>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-blue-800">Productos</h1>
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white"
              onClick={() => setIsAddDialogOpen(true)}
            >
              <Plus className="mr-2 h-4 w-4" /> Agregar Producto
            </Button>
          </div>
          <ProductTable
            onEdit={(product) => {
              setCurrentProduct(product);
              setIsEditDialogOpen(true);
            }}
          />
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Agregar Nuevo Producto</DialogTitle>
              </DialogHeader>
              <ProductForm
                onSubmit={(product) => {
                  setIsAddDialogOpen(false);
                }}
                onClose={() => setIsAddDialogOpen(false)}
              />
            </DialogContent>
          </Dialog>
          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Editar Producto</DialogTitle>
              </DialogHeader>
              <ProductForm
                initialProduct={currentProduct}
                onSubmit={(product) => {
                  setIsEditDialogOpen(false);
                }}
                onClose={() => setIsEditDialogOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>
      </DashboardLayout>
    </ProductProvider>
  );
}
