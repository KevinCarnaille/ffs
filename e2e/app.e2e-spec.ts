import { FfsSassPage } from './app.po';

describe('ffs-sass App', function() {
  let page: FfsSassPage;

  beforeEach(() => {
    page = new FfsSassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
