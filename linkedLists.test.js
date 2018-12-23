const LinkedList = require('./linkedLists');

describe('Test LinkedList functionality', function() {
  let ll = new LinkedList();

  it('should print empty list', function() {
    expect(ll.print()).toEqual('Linked List is empty');
  });

  it('should append 5 and 4 to the list', function() {
    ll.append(5);
    expect(ll.append(4)).toEqual('5 > 4');
  });

  it('should return a value from the index in list', function() {
    expect(ll.getAt(1)).toEqual({ data: 4, next: null });
  });

  it('should return index out of range', function() {
    expect(ll.getAt(7)).toEqual(null);
  });

  it('should unshift 8 to the head of list', function() {
    expect(ll.unshift(8)).toEqual('8 > 5 > 4');
  });

  it('should shift 8 off the head of list', function() {
    expect(ll.shift()).toEqual({
      data: 8,
      next: { data: 5, next: { data: 4, next: null } }
    });
  });

  it('should pop 4 off the tail of the list', function() {
    expect(ll.pop()).toEqual({ data: 4, next: null });
  });

  it('should return out of range', function() {
    expect(ll.insertAt(4)).toEqual(null);
  });

  it('should insert a 9 to list', function() {
    expect(ll.insertAt(4)).toEqual(null);
  });
});
