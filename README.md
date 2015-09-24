This is a refactored fork of [bemto](https://github.com/kizu/bemto), see [bemto/README.md](https://github.com/kizu/bemto/blob/master/README.md) for syntax of mixins `+b` and `+e`.

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

The compiled function is still larger than pure jade equivalent, but gzips pretty good (lots of repetition), so the overhead is under 20%.

The original `bem.jade` is not suited for client-side.
