import calculateCellWidthIndex from './calculateCellWidthIndex';
import type {
  Row,
} from './types/internal';

/**
 * Produces an array of values that describe the largest value length (width) in every column.
 */
export default (rows: Row[]): number[] => {
  if (!rows[0]) {
    throw new Error('Dataset must have at least one row.');
  }

  const columns = new Array(rows[0].length).fill(0);

  rows.forEach((row) => {
    const columnWidthIndex = calculateCellWidthIndex(row);

    columnWidthIndex.forEach((valueWidth, index0) => {
      if (columns[index0] < valueWidth) {
        columns[index0] = valueWidth;
      }
    });
  });

  return columns;
};
