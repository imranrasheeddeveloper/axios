describe('Failing simulation', () => {
    it('should fail intentionally', () => {
      throw new Error('Simulated failure for FAIL_TO_PASS test');
    });
  });
  
  