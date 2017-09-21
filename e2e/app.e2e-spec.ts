import { AppPage } from './app.po';
import {browser} from 'protractor';


describe('bookshelf App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.sleep(10000);
    expect(page.getParagraphText()).toEqual('Hello from PrimeNG!');
  });
});
