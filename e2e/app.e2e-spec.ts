import { ChecklistAppPage } from './app.po';

describe('checklist-app App', () => {
  let page: ChecklistAppPage;

  beforeEach(() => {
    page = new ChecklistAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
