import{test, expect} from '@playwright/test';

test ("test case 1 @smoke", ()=>{
    expect(10).toBe(10);
    console.log("hellow")

});

test ("test case 1 @sanity", ()=>{
    expect(10).toBe(10);

});

