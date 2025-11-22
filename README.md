# react.dev-highlightedLetter

Created with CodeSandbox

This file is good for practicing React synthetic event handling as well as its intended purpose of demonstrating the importance of Avoiding Duplication in State: https://react.dev/learn/choosing-the-state-structure#avoid-duplication-in-state

Challenge 3 of 4: Fix the disappearing selection
There is a list of letters in state. When you hover or focus a particular letter, it gets highlighted. The currently highlighted letter is stored in the highlightedLetter state variable. You can “star” and “unstar” individual letters, which updates the letters array in state.

This code works, but there is a minor UI glitch. When you press “Star” or “Unstar”, the highlighting disappears for a moment. However, it reappears as soon as you move your pointer or switch to another letter with keyboard. Why is this happening? Fix it so that the highlighting doesn’t disappear after the button click.

Forked from: https://react.dev/learn/choosing-the-state-structure#fix-the-disappearing-selection
