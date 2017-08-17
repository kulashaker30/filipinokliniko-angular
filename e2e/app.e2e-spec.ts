import { FilipinoklinikoPage } from './app.po';

describe('filipinokliniko App', () => {
  let page: FilipinoklinikoPage;

  beforeEach(() => {
    page = new FilipinoklinikoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
