import {
  Table,
  TableBody,
  TableHeader,
  TableWrapper,
} from './PropertiesTableStyle';

export const PropertiesTable = () => {
  return (
    <TableWrapper>
      <h3 className="text-center">Properties</h3>
      <Table>
        <TableHeader>
          <tr>
            <th className="col1">Properties</th>
            <th className="col2">Value</th>
            <th className="col3">Default</th>
            <th className="col4">Description</th>
          </tr>
        </TableHeader>
        <TableBody></TableBody>
      </Table>
    </TableWrapper>
  );
};
