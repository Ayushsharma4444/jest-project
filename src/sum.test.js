import sum from './Sum';

test('testing of add function', ()=>{

    let a=4;
    let b=6;
    expect(sum(a,b)).toBe(10);
})