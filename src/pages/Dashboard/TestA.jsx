// import React, { useState } from "react";
// import {
//   DndContext,
//   closestCenter,
//   KeyboardSensor,
//   PointerSensor,
//   useSensor,
//   useSensors,
// } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   sortableKeyboardCoordinates,
//   useSortable,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// // Generate 100 objects dynamically
// const data = Array.from({ length: 100 }, (_, i) => ({
//   id: `INV${i + 1}`.padStart(6, "0"),
//   name: `Name ${i + 1}`,
//   email: `user${i + 1}@example.com`,
//   department: i % 2 === 0 ? "Sales" : "Development",
// }));

// // Initial columns
// const initialColumns = [
//   { id: "id", label: "Id" },
//   { id: "name", label: "Name" },
//   { id: "email", label: "Email" },
//   { id: "department", label: "Department" },
//   { id: "delete", label: "Delete" },
//   { id: "edit", label: "Edit" },
// ];

// // Sortable column component
// const SortableColumn = ({ id, label }) => {
//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({ id });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//   };

//   return (
//     <TableHead
//       ref={setNodeRef}
//       {...attributes}
//       {...listeners}
//       style={style}
//       className="cursor-pointer"
//     >
//       {label}
//     </TableHead>
//   );
// };

// const TestA = () => {
//   const [columns, setColumns] = useState(initialColumns);

//   const sensors = useSensors(
//     useSensor(PointerSensor),
//     useSensor(KeyboardSensor, {
//       coordinateGetter: sortableKeyboardCoordinates,
//     })
//   );

//   const handleDragEnd = (event) => {
//     const { active, over } = event;

//     if (active.id !== over.id) {
//       const oldIndex = columns.findIndex((col) => col.id === active.id);
//       const newIndex = columns.findIndex((col) => col.id === over.id);

//       setColumns((prev) => arrayMove(prev, oldIndex, newIndex));
//     }
//   };

//   return (
//     <DndContext
//       sensors={sensors}
//       collisionDetection={closestCenter}
//       onDragEnd={handleDragEnd}
//     >
//       <Table className="mt-7">
//         <TableHeader>
//           <SortableContext
//             items={columns.map((col) => col.id)}
//             strategy={verticalListSortingStrategy}
//           >
//             <TableRow>
//               {columns.map((column) => (
//                 <SortableColumn
//                   key={column.id}
//                   id={column.id}
//                   label={column.label}
//                   className="min-w-[1000px]"
//                 />
//               ))}
//             </TableRow>
//           </SortableContext>
//         </TableHeader>
//         <TableBody>
//           {data.map((item) => (
//             <TableRow key={item.id}>
//               {columns.map((column) => {
//                 if (column.id === "delete") {
//                   return (
//                     <TableCell key={column.id}>
//                       <button
//                         onClick={() => alert(`Delete row with ID: ${item.id}`)}
//                         className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </TableCell>
//                   );
//                 }
//                 if (column.id === "edit") {
//                   return (
//                     <TableCell key={column.id}>
//                       <button
//                         onClick={() => alert(`Edit row with ID: ${item.id}`)}
//                         className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//                       >
//                         Edit
//                       </button>
//                     </TableCell>
//                   );
//                 }
//                 return <TableCell key={column.id}>{item[column.id]}</TableCell>;
//               })}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </DndContext>
//   );
// };

// export default TestA;

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Generate 100 objects dynamically
const data = Array.from({ length: 100 }, (_, i) => ({
  id: `INV${i + 1}`.padStart(6, "0"),
  name: `Name ${i + 1}`,
  email: `user${i + 1}@example.com`,
  department: i % 2 === 0 ? "Sales" : "Development",
}));

const TestA = () => {
  const handleEdit = (id) => {
    alert(`Edit row with ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete row with ID: ${id}`);
  };

  return (
    <div className="overflow-x-auto ">
      <Table className="mt-7 min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="whitespace-nowrap min-w-[100px] sticky left-0 bg-white">
              Id
            </TableHead>
            <TableHead className="whitespace-nowrap ">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Delete</TableHead>
            <TableHead>Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium sticky left-0 bg-white">
                {item.id}
              </TableCell>
              <TableCell className=" whitespace-nowrap ">{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.department}</TableCell>
              <TableCell>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </TableCell>
              <TableCell>
                <button
                  onClick={() => handleEdit(item.id)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TestA;
