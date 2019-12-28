# Console-colors

Improve the JS console's capabilities with pretty colors.

```
npm i @mirania/console-colors
```

The module inherits all functionality from the native ```console```, so you can safely replace it as such:

```js 
const console = require("@mirania/console-colors");
```

-----

## Features

  - methods for coloring a line of text: ```bold(), black(), red(), green(), gold(), blue(), magenta(), cyan(), white(), grey(), gray(), ruby(), leaf(), yellow(), ocean(), pink(), sky(), light()```
  
  - method to create a string with the intended colors: ```format()```, which accepts a **style**. A **style** is an object that can have 2 keys:
  
      - **text**, which may be any of the colors mentioned above
      
      - **bg** or **background**, any of the colors above except **bold**
  
![](https://i.imgur.com/fineExl.png)