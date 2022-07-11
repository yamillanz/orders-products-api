const inputOKProduct = require('./mocks/inputNewProduct.json');
const OkProduct = require('./mocks/newProductOK.json');
const OkOrder = require('./mocks/orderOk.json');
import { addNewProduct } from '../src//domain/newProduct';

import { addProductData } from '../src//infraestructure/services/products';
jest.mock('../src/infraestructure/services/products');
const mockAddProduct = addProductData as jest.MockedFunction<typeof addProductData>;

import { getDataOneOrder } from '../src//infraestructure/services/orders';
jest.mock('../src/infraestructure/services/orders');
const mockGetDataOneOrder = getDataOneOrder as jest.MockedFunction<typeof getDataOneOrder>;

describe('products unit test...', () => {
  it('add a new product', async () => {
    mockGetDataOneOrder.mockResolvedValue(OkOrder);
    mockAddProduct.mockResolvedValue(OkProduct);
    const resultAdd = await addNewProduct(inputOKProduct);
    expect(resultAdd).toEqual(OkProduct);
  });
});
