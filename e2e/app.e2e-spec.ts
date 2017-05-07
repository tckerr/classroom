import { ClassroomPage } from './app.po';

describe('classroom App', () => {
  let page: ClassroomPage;

  beforeEach(() => {
    page = new ClassroomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
