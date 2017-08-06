describe('catSorter', function () {
  it('should change each id property to a number', function () {
    cats = [
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
    var result = catSorter(cats);
    expect(result.length).to.not.equal(0);
    result = result.map(function(cat) {
      return cat.id;
    });
    result.forEach(function (id) {
      expect(id).to.be.a('number');
    });
  });
  it('should transform the readyForHome property into a boolean', function () {
    cats = [
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
    var result = catSorter(cats);
    expect(result.length).to.not.equal(0);
    result.forEach(function (cat) {
      expect(cat.readyForHome).to.be.a('boolean');
    });
  });
  it('should remove any cats that are not ready for a home', function () {
    cats = [
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
    var result = catSorter(cats);
    expect(result.length).to.not.equal(0);
    result.forEach(function (cat) {
      expect(cat.readyForHome).to.equal(true);
    });
  });
  it('should remove the age key', function () {
    cats = [
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
    var result = catSorter(cats);
    expect(result.length).to.not.equal(0);
    result.forEach(function (cat) {
      expect(cat.age).to.equal(undefined);
    });
  });
  it('should add a yearOfBirth key', function () {
    cats = [
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
    var result = catSorter(cats);
    expect(result.length).to.not.equal(0);
    result.forEach(function (cat) {
      expect(cat.yearOfBirth).to.be.a('number');
    });
  });
  it('should capitalize all the names of the cats', function () {
    cats = [
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
    var result = catSorter(cats);
    expect(result.length).to.not.equal(0);
    result = result.map(function (cat) {
      return cat.name;
    });
    result.forEach(function (name) {
      name = name.split(' ');
      name.forEach(function (word) {
        expect(word[0]).to.equal(word[0].toUpperCase());
      });
    });
  });
  it('should remove any aggressive cats from the list', function () {
    cats = [
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
    var result = catSorter(cats);
    expect(result.length).to.not.equal(0);
    result.forEach(function (cat) {
    expect(cat.personality).to.be.an('array');
      var aggressive = _.contains(cat.personality, 'aggressive');
      expect(aggressive).to.equal(false);
    });
  });
});
