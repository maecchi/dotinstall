'use strict';

// コメント (command + / :ショートカット)
{
  // scope
  const x = 2;

  function f() {
    // const x = 1;
    console.log(x);
  }

  f();
  console.log(x);
}
