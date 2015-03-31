 import {App} from '../src/client/app';

describe('the App module', () => {
  var sut;
  
   var sut;

  class RouterStub {
  configure(handler) {
    handler(this);
  }
  map(routes) {
    this.routes = routes;
  }
}

  beforeEach(() => { sut = new App(new RouterStub(), {}); });

  it('contains a router property', () => {
    expect('foo').toEqual('foo');
  });
  
  it('contains a router property', () => {
    expect(sut.router).toBeDefined(); 
  });

  
  it('configures the router title', () => {
    expect(sut.router.title).toEqual('Contacts');
  });

  
  
});
