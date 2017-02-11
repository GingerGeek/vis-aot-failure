import { VisAotFailurePage } from './app.po';

describe('vis-aot-failure App', function() {
  let page: VisAotFailurePage;

  beforeEach(() => {
    page = new VisAotFailurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
