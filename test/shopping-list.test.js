chai.should()
const expect = chai.expect;
const assert = chai.assert;

describe('ShoppingListItem', () => {
  
  it('ShoppingListItem is a class', () => {
    expect(ShoppingListItem).to.be.a('function');
  });
  
  it('ShoppingListItem has a name property', () => {
    let newObjectPassingName = new ShoppingListItem('name');
    newObjectPassingName.name.should.equal('name');
  });

  it('ShoppingListItem has a description property', () => {
    let newObjectPassingDescription = new ShoppingListItem('description');
    newObjectPassingDescription.description.should.equal('description');
  });

});



