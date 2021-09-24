### Starting condition  🏁
[https://startingcondition.com](https://startingcondition.com)
```
How to start a game?
Random is dull and no fun
...starting-condition!
```

A random number is a fair starting condition but isn't very fun.

With `starting-condition`, you and your group discuss who meets the
stated starting condition.

### Supported languages
- English
- Español
- Français
- Deutsch

### Installation
```
npm i -g starting-condition
```

### Usage
```
start
# Who was the last person to make a sandwich?

start -l es
# ¿Quien se despertó más temprano?
```

### Contributing
#### Contributors
- [higgins](https://github.com/higgins)
- [rgesulfo](https://github.com/rgesulfo)
- [richardharrington](https://github.com/richardharrington)
- [eBildungslabor](https://github.com/eBildungslabor)

#### Architecture
1. Starting conditions are stored in a single JSON file of their corresponding language (eg: English is `en.json`)
2. Each file is an array of strings representing a starting condition to display at random.

#### Guidelines
1. Starting conditions should be general enough that anyone could reasonably meet the condition.
2. Starting conditions should be appropriate for a wide audience (children).
3. No profane language.
4. Wording should be careful.
5. People should feel good or neutral after hearing the starting condition.

#### Language support
`starting-condition` currently supports English, Spanish and French languages.

#### How to contribute

##### To an existing language
1. Add new conditions to the end of the language file you wish to contribute to. (It would also help, but is not required, if you could add translations of your conditions in any other of the supported languages that you know.)
2. Submit a pull request against this repo's master branch [higgins/starting-branch#master](https://github.com/higgins/starting-condition/compare)

##### To a new language
1. Create a new language file named `XY.json` where 'XY' is the [corresponding two-letter-code for your language](https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes)
2. Translate [all the conditions listed here](https://raw.githubusercontent.com/higgins/starting-condition/master/en.json) to your new language file.
3. Add new conditions to the end of that file.
4. Submit a pull request against this repo's master branch [higgins/starting-branch#master](https://github.com/higgins/starting-condition/compare)

### TODO:
- [ ] better mobile legibility
