/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stack.push(x);

    if (!this.minStack.length || x <= this.minStack[this.minStack.length - 1])
      this.minStack.push(x);
  }

  /**
   * @return {void}
   */
  pop() {
    if (
      this.stack[this.stack.length - 1] ===
      this.minStack[this.minStack.length - 1]
    )
      this.minStack.pop();

    this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
