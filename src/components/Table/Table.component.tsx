import { Icons } from "global/icons.constants";

import { type ITableProps } from "./Table.types";

import {
  Cell,
  Container,
  Row,
  TableBody,
  TableContainer,
  TableHeader,
  TableTitle,
  Title,
} from "./Table.styles";

export function Table({
  header,
  row,
  actions,
  title,
  keys,
  headerIcon,
  onClickRow,
}: ITableProps): JSX.Element {
  return (
    <Container>
      {title && (
        <Title>
          {title}
          {headerIcon}
        </Title>
      )}
      <TableContainer>
        <TableHeader>
          <Row key={`th-0`}>
            {header.map((item, row) => (
              <TableTitle key={`th-${item}`}>{item}</TableTitle>
            ))}
            {actions ? (
              <TableTitle>
                <Icons.DotsIcon />{" "}
              </TableTitle>
            ) : undefined}
          </Row>
        </TableHeader>
        <TableBody>
          {row.map((cell, row) => (
            <Row
              onClick={() => {
                if (onClickRow) {
                  onClickRow(row);
                }
              }}
              key={`tr-${row}`}
            >
              {keys.map((key, index) => (
                <Cell key={`td-${row}-${index}`}>{cell[key]}</Cell>
              ))}
              {actions ? <Cell>{actions(row)}</Cell> : undefined}
            </Row>
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
}
