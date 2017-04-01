import { ProjectAngularSirPage } from './app.po';

describe('project-angular-sir App', function() {
  let page: ProjectAngularSirPage;

  beforeEach(() => {
    page = new ProjectAngularSirPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
