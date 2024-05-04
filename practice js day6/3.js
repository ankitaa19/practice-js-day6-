function MyFunction() {
    console.log('Debounced function executed');
}
const debouncedFunction = debounce(MyFunction, 500);
debouncedFunction();

