import { StreamGuessPage } from './app.po';

describe('stream-guess App', () => {
  let page: StreamGuessPage;

  beforeEach(() => {
    page = new StreamGuessPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
