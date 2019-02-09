# Good Interveiw Questions

1. React Lifecycle([link](https://medium.com/mofed/reacts-component-lifecycles-adf0ebc89d23))

- constructor()
- componentWillMount()
- render()
- componentDidMount()

- componentWillReceiveProps()
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- componentDidUpdate()

2. why `super()` in the constructor([link](https://stackoverflow.com/questions/40433463/what-does-calling-super-in-a-react-constructor-do))

`super()` will calls the constructor of its parent class. This is required when you need to access some variables from the parent class.

3. explain map function

```js
    [1,2,3,4].reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);
```