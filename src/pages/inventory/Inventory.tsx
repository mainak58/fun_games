"use client";
import { Minus, Package, Plus } from "lucide-react";
import { useState } from "react";

type Items = {
  name: string;
  value: number;
  subGroup: string;
  _count?: number;
};

function Inventory() {
  const items: Items[] = [
    { name: "A", value: 18, subGroup: "A", _count: 0 },
    { name: "B", value: 9, subGroup: "B", _count: 0 },
    { name: "C", value: 33, subGroup: "C", _count: 0 },
    { name: "D", value: 32, subGroup: "D", _count: 0 },
    { name: "E", value: 32, subGroup: "E", _count: 0 },
  ];

  const [myItem, setMyItem] = useState<Items[]>([]);

  const createInventory = (item: Items) => {
    setMyItem((prev) => {
      let found = false;
      const update = [];
      for (let i = 0; i < prev.length; i++) {
        if (prev[i].subGroup === item.subGroup) {
          update.push({ ...prev[i], _count: (prev[i]?._count ?? 0) + 1 });
          found = true;
        } else update.push(prev[i]);
      }
      if (!found) update.push({ ...item, _count: 1 });
      return update;
    });
  };

  const removeItems = (item: Items) => {
    setMyItem((prev) => {
      const update = [];
      for (const p of prev) {
        if (p.subGroup === item.subGroup) {
          if ((p._count ?? 0) > 1) {
            update.push({ ...p, _count: (p._count ?? 0) - 1 });
          }
        } else {
          update.push(p);
        }
      }
      return update;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-light text-gray-800 mb-1">Inventory</h1>
          <p className="text-sm text-gray-500">Manage your items</p>
        </div>

        {myItem.length > 0 && (
          <div className="mb-8 bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100">
              <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Current Items
              </h2>
            </div>
            <div className="divide-y divide-gray-100">
              {myItem.map((i, index) => (
                <div
                  key={index}
                  className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-700">
                        {i.name}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        Item {i.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        Value: {i.value} · Quantity: {i._count}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItems(i)}
                    className="p-1.5 rounded-md hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"
                    aria-label="Remove item"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {myItem.length === 0 && (
          <div className="mb-8 bg-white rounded-lg border border-gray-200 py-12 text-center">
            <Package className="w-10 h-10 mx-auto mb-3 text-gray-300" />
            <p className="text-sm text-gray-500">No items in inventory yet</p>
            <p className="text-xs text-gray-400 mt-1">
              Add items from the list below
            </p>
          </div>
        )}

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100">
            <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Available Items
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => createInventory(item)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700">
                      {item.name}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Item {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Value: {item.value} · Group: {item.subGroup}
                    </p>
                  </div>
                </div>
                <div className="p-1.5 rounded-md bg-gray-100 text-gray-600">
                  <Plus className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
