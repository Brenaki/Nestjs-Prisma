import { BookController } from './book.controller';

describe('BookController', () => {
  let controller: BookController;

  it('Created one book', () => {
    expect(controller).toBeCalled();
  });
});
