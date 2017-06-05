import { MyProjPage } from './app.po';

describe('my-proj App', () => {
  let page: MyProjPage;

  beforeEach(() => {
    page = new MyProjPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
