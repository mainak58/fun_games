"use client";

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
      let found: boolean = false;
      const update: Items[] = [];

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
      const update: Items[] = [];
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
    <div className="flex justify-around items-center">
      <div>
        {myItem.map((i, index) => (
          <div key={index} className="flex gap-2">
            {i.name} - {i._count}
            <button onClick={() => removeItems(i)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="p-2 flex flex-col w-30 h-70 overflow-y-scroll mt-10 border gap-2">
        {items.map((item) => (
          <button
            key={item.name}
            className="p-2 border flex"
            onClick={() => createInventory(item)}
          >
            {item.name}: {item.value} - {item.subGroup}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Inventory;
