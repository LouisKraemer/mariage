import { MariageAppPage } from './app.po';

describe('mariage-app App', () => {
  let page: MariageAppPage;

  beforeEach(() => {
    page = new MariageAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
