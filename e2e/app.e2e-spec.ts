import { PalindromePage } from './app.po';

describe('palindrome App', () => {
  let page: PalindromePage;

  beforeEach(() => {
    page = new PalindromePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
