describe('Bubble Sort', function(){
   it('handles an empty array', function(){
       expect( bubbleSort([]) ).toEqual([]);
   });

   it('handles an unsorted array', function(){
       expect( bubbleSort([5,6,8,9,2,1,3,7]) ).toEqual( [1,2,3,5,6,7,8,9] );
   });
   it('handles an array of n elements', function(){
      var randomArray = [];
      var n = Math.floor(Math.random() * 80 + 20);
      while (n--) {
        var randomNum = Math.floor(Math.random() * 50);
        randomArray.push(randomNum);
      }
      var sortedCopy = randomArray.slice(); 
      sortedCopy.sort(function(a, b) {
        return a - b;
      });
       expect( bubbleSort(randomArray) ).toEqual(sortedCopy);
      }
   );
});

describe('Merge Sort', function(){
   it('handles an empty array', function(){
       expect( mergeSort([]) ).toEqual( [] );
   });

   it('handles an unsorted array', function(){
       //expect( mergeSort([5,6,8,9,2,1,3,7]) ).toEqual( [1,2,3,5,6,7,8,9] );
       expect( mergeSort([3,1,2,7]) ).toEqual( [1,2,3,7] );
   });
});
// describe('merge', function(){
//    it('given two sorted arrays, it returns a sorted result', function() {
//       var left = [2,4,5];
//       var right = [1,6];
//       expect(merge(left, right)).toEqual([1,2,4,5,6]);
//    });

//    it('returns an array', function() {
//       expect(merge([])).toEqual([]);
//    });
// });

describe('MergeSort', function(){
  it('with 1 or fewer elements, returns sorted array', function(){
    expect(mergeSort([5])).toEqual([5]);
  });
});

for(var i=12; i <= 17; i++) {
    var num_items = Math.pow(2,i);
    var native_test_array = [];
    var b_test_array = [];
    var m_test_array = [];
    for(var j=0; j < num_items; j++) {
        var rand = Math.floor(Math.random() * num_items);
        native_test_array.push(rand);
        b_test_array.push(rand);
        m_test_array.push(rand);
    }

    console.time(num_items + " native");
    native_test_array.sort(function(a,b){ return a-b; });
    console.timeEnd(num_items + " native");

    console.time(num_items + " bubble");
    bubbleSort(b_test_array);
    console.timeEnd(num_items + " bubble");

    console.time(num_items + " merge");
    mergeSort(m_test_array);
    console.timeEnd(num_items + " merge");  
}