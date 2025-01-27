import {
  expect,
} from 'chai';
import drawRow from '../src/drawRow';

const drawVerticalLine = () => {
  return true;
};

describe('drawRow', () => {
  context('default drawVerticalLine', () => {
    it('draws a row using all parts', () => {
      const border = {
        bodyJoin: '│',
        bodyLeft: '║',
        bodyRight: '║',
      };
      const config = {
        border,
        drawVerticalLine,
      };

      expect(drawRow([], config)).to.equal('║║\n');
      expect(drawRow(['a'], config)).to.equal('║a║\n');
      expect(drawRow(['a', ' b '], config)).to.equal('║a│ b ║\n');
    });
  });

  context('custom drawVerticalLine', () => {
    it('draws the vertical line when the drawVerticalLine returns true', () => {
      const rows = [' a ', ' b ', ' c '];

      const border = {
        bodyJoin: '│',
        bodyLeft: '║',
        bodyRight: '║',
      };

      expect(drawRow(rows, {
        border,
        drawVerticalLine: (index) => {
          return index === 0;
        },
      })).to.equal('║ a  b  c \n');

      expect(drawRow(rows, {
        border,
        drawVerticalLine: (index) => {
          return index % 2 === 0;
        },
      })).to.equal('║ a  b │ c \n');

      expect(drawRow(rows, {
        border,
        drawVerticalLine: (index, size) => {
          return index > 0 && index <= size;
        },
      })).to.equal(' a │ b │ c ║\n');
    });
  });
});
