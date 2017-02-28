import { MoviefqPage } from './app.po';

describe('moviefq App', () => {
  let page: MoviefqPage;

  beforeEach(() => {
    page = new MoviefqPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
