chai.should()
const expect = chai.expect;
const assert = chai.assert;

describe('ShoppingListItem is a Class with properties', () => {
  
  let soup = new ShoppingListItem();

  it('ShoppingListItem is a class', () => {
    expect(ShoppingListItem).to.be.a('function');
  });
  
  it('ShoppingListItem has a name property', () => {
    let soup = new ShoppingListItem('name');
    soup.name.should.equal('name');
  });

  it('ShoppingListItem has a isDone property', () => {
    let soup = new ShoppingListItem('isDone');
    soup.isDone.should.equal(false);
  })

  it('ShoppingListItem has a description property', () => {
    let soup = new ShoppingListItem('description');
    soup.description.should.equal('description');
  });

});

describe('ShoppingListItem has a check method', () => {

  let soup = new ShoppingListItem('check');

  it('check is a function', () => {
    soup.check.should.be.a('function');
  })

  it('ShoppingListItem method check() will set isDone to true', () => {
    soup.check();
    (soup.isDone).should.equal(true);
  })
  
})

describe('ShoppingListItem has a uncheck method', () => {

  let soup = new ShoppingListItem('unCheck');

  it('unCheck is a function', () => {
    soup.unCheck.should.be.a('function');
  });
})
  


