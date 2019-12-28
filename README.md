# Console-colors

Improve the JS console's capabilities with pretty colors.

The module inherits all functionality from the native ```console```, so you can safely replace it as such:

```js 
const console = require("./console-colors");
```

-----

## Features

  - methods for coloring a line of text: ```bold(), black(), red(), green(), gold(), blue(), magenta(), cyan(), white(), grey(), gray(), ruby(), leaf(), yellow(), ocean(), pink(), sky(), light()```
  
  - method to create a string with the intended colors: ```format()```, which accepts a **style**. A **style** is an object that can have 2 keys:
  
      - **text**, which may be any of the colors mentioned above
      
      - **bg** or **background**, any of the colors above except **bold**
  
![](https://i.imgur.com/fineExl.png)
  
  - set background mode: ```colorBackground(boolean)```, if ```true``` then methods such as ```red()``` will color the background instead of text
  
  - set a persistent style: ```setStyle() / clearStyle()```, if a style is set then all printing methods will try to respect it
  
       - methods such as ```red()``` that already define colors will ignore the style's text or background color (which one depends on background mode)
       
  - use a style for a specific print: ```slog()``` receives a style along with a message, and respects that style for only that call
  
![](https://i.imgur.com/wA9YnWN.png)

![](https://i.imgur.com/Mk43ba8.png)