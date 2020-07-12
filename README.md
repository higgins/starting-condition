### Starting condition  🏁
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
- Español (Spanish)

### Installation
```
npm i start
```

### Usage
```
start
# Who was the last person to make a sandwich?

start -l es
# ¿Quien se despertó más temprano?

start -t computers
```

### Contributing
#### Architecture
1. Starting conditions are stored in a single file of their corresponding language (eg: English is `en.txt`)
2. Each line is a starting condition to be chosen at random.

#### Guidlines
1. Starting conditions should be general enough that anyone could reasonably meet the condition.
2. Starting conditions should be appropriate for a wide audience.
3. No profane language.
4. Wording should be careful.
5. People should feel good or neutral after hearing your condition

#### Language support
`starting-condition` currently supports English and Spanish languages. If you'd like

#### How to contribute

##### To an existing language
1. Add new conditions to the end of the language file you wish to contribute to
2. Submit a pull request against this repo's master branch [higgins/starting-branch#master](https://github.com/higgins/starting-condition/compare)

##### To a new language
1. Create a new language file named `XY.txt` where 'XY' is the [corresponding two-letter-code for your language](https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes)
2. Translate [all the conditions listed here](https://raw.githubusercontent.com/higgins/starting-condition/master/en.txt?token=AAGV446MAZOEJ4FDLIRQTPK7BJKC2) to your new language file.
3. Add new conditions to the end of that file.
4. Submit a pull request against this repo's master branch [higgins/starting-branch#master](https://github.com/higgins/starting-condition/compare)

### TODO:
- [ ] website (github pages)
- [ ] publish package with versioning mechanism (npm)
- [ ] topics (emoji suffixed conditions)
- [X] community conditions
- [X] multiple languages