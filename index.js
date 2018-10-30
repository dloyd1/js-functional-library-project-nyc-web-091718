fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
//<------------------------------->

    each: function(collection, callback) {

      if (Array.isArray(collection)) {
        for (i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)}
      }
        else {
          for (const key in collection) {
            callback(collection[key], key, collection);}
}
      return collection;
    },

//<------------------------------->

    map: function(collection, callback) {
      let newArr = []

      if(Array.isArray(collection)) {
        for (i=0; i < collection.length; i++) {
          newArr.push(callback(collection[i], i, collection));}
      }
        else {
          for (const key in collection) { newArr.push(callback(collection[key], key, collection));}
        }
      return newArr
    },

//<------------------------------->

    reduce: function(collection, callback, initial) {
      let total = 0;

      if (!!initial) {
        total = initial;}

      for (i = 0; i < collection.length; i++) {
        total = callback(total, collection[i], collection);}

    return total;
    },

//<------------------------------->
    find: function(collection, predicate) {

      if (Array.isArray(collection)) {
        for (i = 0; i < collection.length; i++) {
          if (predicate(collection[i])) {
            return collection[i];}
        }
          } else {
              for (const key in collection) {
                if (predicate(collection[key])) {
                return collection[key];}
              }
          }
        },

//<------------------------------->

      filter: function(collection, predicate) {
        let newArr = [];
        for (i = 0; i < collection.length; i++) {
          if (predicate(collection[i])) {
            newArr.push(collection[i]);
          }
        }
        return newArr
      },

//<------------------------------->

    size: function(collection, predicate) {

      if (Array.isArray(collection)) {
        return collection.length
      }
        else {
          return Object.keys(collection).length}
    },

//<------------------------------->

    first: function(array, n) {

      if (n > 0) {
        return array.slice(0, n)
      } else {
        return array[0];}
    },

//<------------------------------->

    last: function(array, n) {

      if (n > 0) {
        return array.slice(-n)
      } else {
        return array[array.length - 1];}
    },

//<------------------------------->

    compact: function(array) {

    },

//<------------------------------->

    sortBy: function(array) {

    },

//<------------------------------->

    flatten: function(array) {

    },

//<------------------------------->

    uniq: function(array) {

    },

//<------------------------------->

    keys: function(array) {

    },

//<------------------------------->

    values: function(array) {

    },

//<------------------------------->

    functions: function() {

    },

//<------------------------------->

  }
})()

fi.libraryMethod()
