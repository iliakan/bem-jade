This is a refactored fork of [https://github.com/kizu/bemto](), see [https://github.com/kizu/bemto/Readme.md]() for syntax of mixins `+b` and `+e`.

Template:

```
include bem

+b.foo
  +e.bar baz
```

(need to make sure the interpreter can find `bem.jade` from this module).

JS:
```
var bem = require('bem-jade');
var jade = reqiure('jade');
var result = jade.renderFile('filename.jade', {
 bem: bem(),
 name: 'Joe'
});
```

The compiled function is still larger than non-bem equivalent, but gzips pretty good (lots of repetition), so the final overhead is <20%.
