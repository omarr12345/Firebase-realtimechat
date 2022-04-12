import { RealtimeChatPage } from './app.po';

describe('realtime-chat App', () => {
  let page: RealtimeChatPage;

  beforeEach(() => {
    page = new RealtimeChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
