import ValidationProvider from '../../../src/providers/validation-provider';

describe("validation-provider", function() { 
    let validationProvider ;
    beforeEach(function() {
        validationProvider = new ValidationProvider(200,'test','test');
      });
      it("instance validationProvider should contain statusCode=200,fields='test'", function() {
        expect(validationProvider.statusCode).toBe(200);
        expect(validationProvider.fields).toBe('test');
        expect(validationProvider.message).toBe('test');
      });
});