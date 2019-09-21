
interface myCallback { (data: string): void }

function fetchData(callback: myCallback) : void  {
  setTimeout(function() {
    callback('peanut butter')
  }, 2000);
}

test('the data is peanut butter', done => {
  function callback(data : string) {
    expect(data).toBe('peanut butter');
    done();
  }

  fetchData(callback);
});