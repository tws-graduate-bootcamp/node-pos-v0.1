const printReceipt = require('../main/main');

const inputs = [
  {
    Barcode: 'ITEM000000',
    Name: 'Coca-Cola',
    Unit: 'bottle',
    Price: 3.00
  },
  {
    Barcode: 'ITEM000000',
    Name: 'Coca-Cola',
    Unit: 'bottle',
    Price: 3.00
  },
  {
    Barcode: 'ITEM000000',
    Name: 'Coca-Cola',
    Unit: 'bottle',
    Price: 3.00
  },
  {
    Barcode: 'ITEM000000',
    Name: 'Coca-Cola',
    Unit: 'bottle',
    Price: 3.00
  },
  {
    Barcode: 'ITEM000000',
    Name: 'Coca-Cola',
    Unit: 'bottle',
    Price: 3.00
  },
  {
    Barcode: 'ITEM000001',
    Name: 'Sprite',
    Unit: 'bottle',
    Price: 3.00
  },
  {
    Barcode: 'ITEM000001',
    Name: 'Sprite',
    Unit: 'bottle',
    Price: 3.00
  },
  {
    Barcode: 'ITEM000004',
    Name: 'Battery',
    Unit: 'a',
    Price: 2.00
  }
];
describe('pos', () => {
  it('should print correct receipt', () => {
    const expected =
      '***<store earning no money>Receipt ***\n' +
      'Name: Coca-Cola, Quantity: 5 bottles, Unit price: 3.00 (yuan), Subtotal: 15.00 (yuan)\n' +
      'Name: Sprite, Quantity: 2 bottles, Unit price: 3.00 (yuan), Subtotal: 6.00 (yuan)\n' +
      'Name: Battery, Quantity: 1 a, Unit price: 2.00 (yuan), Subtotal: 2.00 (yuan)\n' +
      '----------------------\n' +
      'Total: 23.00 (yuan)\n' +
      '**********************\n';

    expect(printReceipt(inputs)).toBe(expected);
  });
});
