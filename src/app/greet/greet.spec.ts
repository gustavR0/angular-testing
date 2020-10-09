import {greet} from './greet';

describe('greet', ()=> {
    it('should be equal to Hi :<name> good day', () => {
        expect(greet('gustav')).toEqual('Hi '+'gustav'+' good day');
    })
    
    it('should include the name in the menssage', () => {
        expect(greet('gustav')).toContain('gustav');
    })
    
    it('should include the Hi in the menssage', () => {
        expect(greet('gustav')).toContain('Hi');
    })
    
    it('should include the good day in the menssage', () => {
        expect(greet('gustav')).toContain('good day');
    })
});