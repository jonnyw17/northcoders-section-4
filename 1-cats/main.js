var _ = require('underscore');
var lodash = require('lodash');

var cats = [
  { id: '1', name: 'rupert', readyForHome: 'No', age: 12, personality: ['friendly', 'lazy', 'loving']},
  { id: '2', name: 'mrs fluffy', readyForHome: 'Yes', age: 2, personality: ['affectionate', 'playful', 'shy']},
  { id: '3', name: 'tabitha', readyForHome: 'Yes', age: 4, personality: ['aggressive', 'independent']},
  { id: '4', name: 'lily', readyForHome: 'No', age: 8, personality: ['friendly', 'playful', 'mischievous']},
  { id: '5', name: 'stripe', readyForHome: 'Yes', age: 1, personality: ['haughty', 'independent']},
  { id: '6', name: 'bob', readyForHome: 'Yes', age: 1, personality: ['aggressive', 'antisocial', 'nervous']},
  { id: '7', name: 'jean claude cat damme', readyForHome: 'Yes', age: 11, personality: ['sleepy', 'shy', 'loving']},
  { id: '8', name: 'tilly', readyForHome: 'Yes', age: 4, personality: ['playful', 'social', 'attention-seeking']},
  { id: '9', name: 'milo', readyForHome: 'No', age: 7, personality: ['mischievous', 'friendly']},
  { id: '10', name: 'mr claws', readyForHome: 'Yes', age: 13, personality: ['affectionate', 'shy', 'nervous']},
  { id: '11', name: 'robert zimmercat', readyForHome: 'Yes', age: 3, personality: ['folksy', 'prolific', 'neurotic']}
];

function catSorter () {

  var yearOfBirth = 1990;
  var newList = _.filter(cats, (cat) => cat.readyForHome === 'Yes');

      for(var i in newList){
          yearOfBirth++;
          newList[i].id = Number(newList[i].id);
          newList[i].readyForHome = true;
          delete newList[i].age;
          newList[i].yearOfBirth = yearOfBirth;
          newList[i].name = newList[i].name.charAt(0).toUpperCase();
          if(newList[i].personality[0] === 'aggressive'){
              delete newList[i]
          }
      }

  return newList;

}
catSorter();
