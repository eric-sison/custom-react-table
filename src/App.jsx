import { DataTable } from "./components/DataTable/views/DataTable";
import { useDataTable } from "./components/DataTable/utils/hooks/use-data-table";
import { tableColumns, tableData } from "./utils/columns";

function App() {
  const { table } = useDataTable({ columns: tableColumns, data: tableData });

  return (
    <div>
      <DataTable model={table} />
    </div>
  );
}

export default App;
