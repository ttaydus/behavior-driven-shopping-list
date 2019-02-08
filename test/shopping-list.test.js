chai.should()
const expect = chai.expect;
const assert = chai.assert;

describe('ShoppingListItem is a Class with properties', () => {
  
  it('ShoppingListItem is a class', () => {
    expect(ShoppingListItem).to.be.a('function');
  });
  
  it('ShoppingListItem has a name property', () => {
    let newObjectPassingName = new ShoppingListItem('IceCream');
    newObjectPassingName.name.should.equal('name');
  });

  it('ShoppingListItem has a isDone property', () => {
    let newObjectPassingIsDone = new ShoppingListItem('IceCream');
    newObjectPassingIsDone.isDone.should.equal('isDone');
  })

  it('ShoppingListItem has a description property', () => {
    let newObjectPassingDescription = new ShoppingListItem('Chocolate');
    newObjectPassingDescription.description.should.equal('description');
  });

});

describe('ShoppingListItem has a check method', () => {
  
  it('Check is a function', () => {
    let newObjectPassingCheck = new ShoppingListItem('check');
    newObjectPassingCheck.check.should.be.a('function');
  })

  it('ShoppingListItem method check() will set isDone to true', () => {
    ShoppingListItem.check;
    assert.equal(ShoppingListItem.isDone, 'true');
  })

})
  


